import { Dimensions, Platform } from 'react-native';

export const isIphoneXorAbove = () => {
    const dim = Dimensions.get('window');
  
    return (
      Platform.OS === 'ios' &&
      !Platform.isPad &&
      !Platform.isTVOS &&
      ((dim.height === 812 || dim.width === 812) || (dim.height === 896 || dim.width === 896))
    );
  };