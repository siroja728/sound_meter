import { StyleSheet } from 'react-native';
import Constants from '../../services/stylesConstants';
export default StyleSheet.create({
    scrollContent: {
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
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
        maxHeight: 70,
        width: '100%',
        alignItems:'flex-end',
        flex: 1,
    },
    resetBtn: {
        marginRight: 40,
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
