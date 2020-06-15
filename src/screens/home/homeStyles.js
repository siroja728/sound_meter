import { StyleSheet } from 'react-native';
import Constants from '../../services/stylesConstants';
export default StyleSheet.create({
    scrollContent: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    currentLevel: {
        fontSize: 40,
        textAlign: 'center',
    },
    textCenter: {
        textAlign: 'center'
    },
    bottomChartContainer: {
        height: 150,
        flexDirection: 'row',
        marginTop: 15,
    },
    resetBtnContainer: {
        position: 'absolute',
        top: 40,
        right: 40,
    },
    resetBtn: {
        borderRadius: 50,
        width: 50,
        height: 50,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'transparent',
        backgroundColor: Constants.colors.blue_08,
    },
    resetBtnText: {
        color: Constants.colors.white,
        fontSize: 12
    }
});
