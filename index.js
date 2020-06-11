/**
 * @format
 */

import {AppRegistry} from 'react-native';
import appRoot from './src/root'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => appRoot);
