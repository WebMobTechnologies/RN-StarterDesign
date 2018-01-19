import {StyleSheet} from "react-native";
import {Color} from "../../utils/color";

module.exports = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'center'
    },

    logoImage: {
        height: 60,
        width: 250,
        alignItems: 'center',
    },

    subHeader: {
        marginTop: 40,
        alignItems: 'center'
    },
    btnView: {
        marginTop: 30,
        marginBottom: 15
    },
    btnView2: {
        marginBottom: 15
    },
    textView: {
        alignItems: 'center'
    },
    txtWelcome: {
        fontWeight: 'bold',
        fontSize: 20
    }
});
