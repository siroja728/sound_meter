import { StyleSheet } from 'react-native';
import Constants from '../../services/stylesConstants';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    currentLevel: {
        fontSize: 40,
        textAlign:'center',
        marginTop: 20
    },
    scrollContent: {
        padding: 20,
    },
    currentInfo: {
        borderWidth: 1,
        padding: 5,
        color: Constants.colors.white,
    },
    note: {
        marginBottom: 10,
        marginTop: 10,
        backgroundColor: Constants.colors.warning,
        color: Constants.colors.white,
        padding: 10,
        marginHorizontal: 20,
    }
});
