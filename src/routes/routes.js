import React, { Component } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { connect, Provider } from 'react-redux';
import { Reducer, Router, Scene, Stack, Actions } from 'react-native-router-flux';
import { ROUTES } from './routesConstants';
import Store from '../store/store';
import NavigationTabBar from '../components/navigationTabBar/navigationTabBar';
import HomeScreen from '../screens/home/home';


const { store } = Store();
const ReduxRouter = connect()(Router);
const reducerCreate = params => {
    const defaultReducer = new Reducer(params);
  
    return (state, action) => {
      store.dispatch(action);
  
      return defaultReducer(state, action);
    };
  };

  class Routes extends Component {

      render() {
          return (
            <Provider store={ store }>
                <ReduxRouter createReducer={ reducerCreate }>
                        <Scene
                            key='tabBar'
                            tabs
                            hideNavBar
                            tabBarComponent={ NavigationTabBar }
                            hiddenTabs={[]}
                        >
                            <Scene
                                key={ ROUTES.HOME }
                                hideNavBar
                                initial
                                title='Home'
                                component={ HomeScreen }
                            />
                            <Scene
                                key={ ROUTES.ABOUT }
                                hideNavBar
                                title='About'
                                component={ ()=><SafeAreaView><View style={{flex:1,backgroundColor:'red'}}><Text>About</Text></View></SafeAreaView> }
                            />

                        </Scene>
                </ReduxRouter>
            </Provider>
          )
      }
  }

  export default Routes;