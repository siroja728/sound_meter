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

export const handleColorChange = (currentLevel) => {

    // Leaves rustling, soft music, whisper
    if((currentLevel >=0) && (currentLevel <= 30)) {
        return '#0CAD4D'
    }
    // Average home noise
    if((currentLevel >30) && (currentLevel <= 40)) {
        return '#6EB646'
    }
    // Normal conversation, background music
    if((currentLevel >40) && (currentLevel <= 60)) {
        return '#A9C437'
    }
    // Office noise, inside a car at 60 mph
    if((currentLevel >60) && (currentLevel <= 70)) {
        return '#DDD21E'
    }
    // Vacuum cleaner, average radio
    if((currentLevel >70) && (currentLevel <= 80)) {
        return '#FCDE00'
    }
    // Heavy traffic, window air conditioner, noisy restaurant, power lawn mower. Sound above 85 dB are harmful.
    if((currentLevel >80) && (currentLevel <= 89)) {
        return '#FED006'
    }
    // Subway, shouted conversation
    if((currentLevel >=90) && (currentLevel <= 95)) {
        return '#FBBD12'
    }
    // Boom box, ATV, motorcycle
    if((currentLevel >=96) && (currentLevel <= 100)) {
        return '#FEAC17'
    }
    // School dance
    if((currentLevel >=101) && (currentLevel <= 105)) {
        return '#F9A11B'
    }
    // Chainsaw, leaf blower, snowmobile
    if((currentLevel >=106) && (currentLevel <= 119)) {
        return '#F5891C'
    }
    // Sports crowd, rock concert, loud symphony
    if((currentLevel >=120) && (currentLevel <= 129)) {
        return '#F16820'
    }
    // Stock car races
    if((currentLevel >=130) && (currentLevel <= 139)) {
        return '#F74424'
    }
    // Gun shot, siren at 100 feet
    if(currentLevel >=140) {
        return '#EC1A23'
    }
};
