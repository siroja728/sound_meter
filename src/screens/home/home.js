import React, { Component } from 'react';
import { ScrollView, View, Text, PermissionsAndroid, Dimensions, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as homeActions from './homeActions';
import RNSoundLevel from 'react-native-sound-level';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { AreaChart, Grid, YAxis } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import { handleColorChange } from '../../services/helpers';
import styles from './homeStyles';
import Constants from '../../services/stylesConstants';

class HomeScreen extends Component {

    state = {
        currentLevel: 0,
        minLevel: 0,
        maxLevel: 0,
        avg: 0,
    };

    componentDidMount() {
        const { homeActions } = this.props;
        const { addLevel } = homeActions;
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
                    addLevel(data.value);
                });
            }
        });
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

    handleRest = () => {
        const { homeActions } = this.props;
        const { resetData } = homeActions;

        this.setState({
            minLevel: 0,
            maxLevel: 0,
            avg: 0,
        });
        resetData();
    };

    render() {
        const { homeReducer } = this.props;
        const { levels } = homeReducer;
        const { currentLevel, minLevel, maxLevel, avg } = this.state;
        const contentInset = { top: 10, bottom: 10 };
        const screenWidth = Math.round(Dimensions.get('window').width);
        const chartWidth = screenWidth - 100;

        // Maximum level 140db but progress component needs progress from 0 to 100.
        const progress = currentLevel/1.4;
        return (
            <ScrollView style={ { flex: 1 } } contentContainerStyle={ styles.scrollContent }>
                <View style={ styles.resetBtnContainer }>
                    <TouchableOpacity style={ styles.resetBtn } onPress={ this.handleRest }>
                        <Text style={ styles.resetBtnText }>Reset</Text>
                    </TouchableOpacity>
                </View>
                <AnimatedCircularProgress
                    size={ chartWidth }
                    width={ 30 }
                    rotation={ 180 }
                    fill={ progress }
                    tintColor={ handleColorChange(currentLevel) }
                    backgroundColor={ Constants.colors.blue_08 }>
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
                <View style={ styles.bottomChartContainer }>
                    <YAxis
                        data={ levels }
                        svg={{
                            fill: 'grey',
                            fontSize: 10,
                        }}
                        max={ maxLevel }
                        numberOfTicks={ 10 }
                        formatLabel={ (value) => `${value}dB` }
                        contentInset={ contentInset }
                    />
                    <AreaChart
                        style={ { height: 150, width: chartWidth } }
                        data={ levels }
                        contentInset={ contentInset }
                        curve={ shape.curveNatural }
                        svg={{ fill: Constants.colors.blue_08 }}
                    >
                        <Grid />
                    </AreaChart>
                </View>
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
