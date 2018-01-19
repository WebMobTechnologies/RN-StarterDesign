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
        alignItems:'center',
    },
    largeText:{
        fontSize:25,
        color:Color.GREY["800"]
    },
    smallText:{
        marginTop:5,
        fontSize:10,
        color:Color.SECONDRY
    },
    itPass:{
        marginBottom:15
    },
    btnLogin:{
        marginTop:20
    },
    newLoginBind:{
        paddingTop:20

    },
    textViewLogin:{
        marginTop:45,
        alignItems:'center'
    },
    forgotPass:{
        marginTop:17,
        alignItems:'flex-end',
    },
    icon: {
        position: 'absolute',
        top: 33,
        right: 0

    }
});
