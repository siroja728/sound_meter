import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as homeActions from './homeActions';

class HomeScreen extends Component {
    componentDidMount(){
        const { homeActions } = this.props;
        homeActions.getData();
    }

    render() {
        const { homeReducer } = this.props;
        const { data } = homeReducer;
        const usersList = data;
        return (
            <ScrollView>
                { usersList.map(user => (
                    <View key={ user.id } style={{elevation: 3, backgroundColor: 'white', margin: 5, padding: 10}}>
                        <Text>Name: { user.name }</Text>
                        <Text>Email: { user.email }</Text>
                        <Text>Website: { user.website }</Text>
                    </View>
                ))}
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
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);