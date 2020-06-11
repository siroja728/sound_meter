import { StyleSheet } from 'react-native';
import { isIphoneXorAbove } from '../../services/helpers';

export default StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingBottom: isIphoneXorAbove() ? 35 : 10,
    paddingTop: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#b6b6b6',
  },
  tabBarText: {
    fontSize: 10,
    color: 'grey',
  },
  tabBarTab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarIcon: {
    color: 'grey',
  },
  activeTab: {
    color: 'blue',
  },
});
