import React from 'react';
import { View, StatusBar, Platform } from 'react-native';
import Routes from './routes/routes';

const appRoot = (props) => (
    <View style={{ flex:1 }}>
        <StatusBar
            barStyle={ `${Platform.OS === 'ios' ? 'dark-content' : 'light-content' }` }
        />
            <Routes/>
    </View>
);

export default appRoot;