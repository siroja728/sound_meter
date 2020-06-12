import React, { Component } from 'react';
import { ScrollView, View, Text, PermissionsAndroid } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as homeActions from './homeActions';
import RNSoundLevel from 'react-native-sound-level';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { handleColorChange } from '../../services/helpers';
import styles from './homeStyles';

class HomeScreen extends Component {

    state = {
        currentLevel: 0,
        minLevel: 0,
        maxLevel: 0,
        avg: 0,
    };

    componentDidMount() {
        const { homeActions } = this.props;
        this.requestAudioPermission().then(() => {
            RNSoundLevel.start();
            RNSoundLevel.onNewFrame = (data) => {
                this.setState({currentLevel: data.value},() => {
                    const { minLevel, maxLevel, currentLevel } = this.state;
                    if(!minLevel){
                        this.setState({ minLevel: currentLevel });
                    }
                    if(currentLevel > maxLevel){
                        this.setState({ maxLevel: currentLevel });
                    }
                    if((currentLevel < maxLevel && currentLevel < minLevel)){
                        this.setState({ minLevel: currentLevel });
                    }
                    this.avarage(minLevel, maxLevel);
                });
            }
        });

        // clear state every minute for getting correct results
        setInterval(() => this.setState({ minLevel: 0, maxLevel: 0, avg: 0 }), 60000)
    }

    componentWillUnmount() {
        RNSoundLevel.stop();
    }

    async requestAudioPermission() {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
                {
                    title: "Sound Permissions",
                    message:
                        "Sound Meter App needs access to your microphone",
                    buttonNeutral: "Ask Me Later",
                    buttonNegative: "Cancel",
                    buttonPositive: "OK"
                }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log("You can use sound meter");
            } else {
                console.log("Audio permission denied");
            }

        }catch (e) {

        }
    }

    avarage = (min,max) => {
        const avg = ((min*1 + max*1) /2).toFixed(0);
        this.setState({avg})
    };

    render() {
        const { homeReducer } = this.props;
        const { data } = homeReducer;
        const { currentLevel, minLevel, maxLevel, avg } = this.state;
        // Maximum level 120db but progress component needs progress from 0 to 100.
        const progress = currentLevel/1.2;
        return (
            <ScrollView style={ { flex: 1 } } contentContainerStyle={ styles.scrollContent }>
                <AnimatedCircularProgress
                    size={ 250 }
                    width={ 30 }
                    rotation={ 180 }
                    fill={ progress }
                    tintColor={ handleColorChange(currentLevel) }
                    backgroundColor="#3d5875">
                    {
                        () => (
                            <View>
                                <Text style={ styles.currentLevel }>{ currentLevel }dB</Text>
                                <Text style={ styles.textCenter }>Min:{ minLevel } - Max: { maxLevel }</Text>
                                <Text style={ styles.textCenter }>Avg:{ avg }</Text>
                            </View>
                        )
                    }
                </AnimatedCircularProgress>
            </ScrollView>
        )
    }
}

function mapStateToProps(state) {
    return {
        homeReducer: state.homeReducer,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        homeActions: bindActionCreators(homeActions, dispatch),
    }
}

HomeScreen.propTypes = {
    homeActions: PropTypes.object.isRequired,
    homeReducer: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
