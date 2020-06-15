import { StyleSheet } from 'react-native';
import Constants from '../../services/stylesConstants';
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
    borderTopColor: Constants.colors.lightGrey,
  },
  tabBarText: {
    fontSize: 10,
    color: Constants.colors.grey,
  },
  tabBarTab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarIcon: {
    color: Constants.colors.grey,
  },
  activeTab: {
    color: Constants.colors.blue,
  },
});
