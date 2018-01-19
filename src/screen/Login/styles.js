import {StyleSheet} from "react-native";
import {Color} from "../../utils/color";

module.exports=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },

    logoImage:{
        height:60,
        width:250,
        alignItems:'center'
    },
    largeText:{
        marginTop:40,
        fontSize:20,
        color:Color.GREY["800"]
    },
    smallText:{
        marginTop:5,
        fontSize:10,
        color:Color.SECONDRY
    },

    btnLogin:{
        marginTop:15
    },
    newLoginBind:{
        paddingTop:30

    },
    textViewLogin:{
        marginTop:110,
        alignItems:'center'
    },
    forgotPass:{
        marginTop:17,
        alignSelf:'flex-end'
    },
    icon: {
        position: 'absolute',
        top: 33,
        right: 0

    }
});
