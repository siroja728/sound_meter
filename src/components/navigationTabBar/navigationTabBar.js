import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ROUTES } from '../../routes/routesConstants';
import styles from './navigationTabBarStyles';

class NavigationTabBar extends React.Component {

  getIconName = (key) => {
    switch(key) {
      case ROUTES.HOME:
        return 'equalizer';
      case ROUTES.ABOUT:
        return 'info';
      default:
        return 'equalizer';
    }
  };

  goToRoute = (routeKey) => () => Actions[routeKey]();

  render() {
    const { state } = this.props.navigation;
    const { routes } = state;
    const activeTabIndex = state.index;
    const { params } = routes[0];
    const hiddenTabs = params.hasOwnProperty('hiddenTabs') ? params.hiddenTabs : [];

    return (
      <View style={ styles.tabBar }>
        {
          routes.map((route, index) => {
            const { routes } = route;
            const isActive = activeTabIndex === index;
            const title = routes[0].params.title;

            if(!hiddenTabs.indexOf(route.key)) return;

            return (
              <TouchableOpacity key={ route.key } onPress={ this.goToRoute(route.key) } style={ styles.tabBarTab }>
                <Icon name={ this.getIconName(route.key) } size={ 25 } style={ [styles.tabBarIcon, isActive && styles.activeTab] } />
                <Text style={ [styles.tabBarText, isActive && styles.activeTab] }>{ title }</Text>
              </TouchableOpacity>
            );
          })
        }
      </View>
    );
  }
}

NavigationTabBar.propTypes = {
  navigation: PropTypes.object,
};

export default NavigationTabBar;
