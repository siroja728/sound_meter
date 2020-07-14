import React, { useEffect } from 'react';
import { View, StatusBar, Platform } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Routes from './routes/routes';

const appRoot = (props) => {
    useEffect(() => {
        SplashScreen.hide();
    });
    return (
        <View style={{ flex:1 }}>
            <StatusBar
                barStyle={ `${Platform.OS === 'ios' ? 'dark-content' : 'light-content' }` }
            />
            <Routes/>
        </View>
    );
};

export default appRoot;
