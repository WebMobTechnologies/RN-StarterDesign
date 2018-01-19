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
        marginTop:40,
        fontSize:20,
        color:Color.GREY["800"]
    },
    smallText:{
        marginTop:5,
        fontSize:10,
        color:Color.SECONDRY
    },
    btnView:{
        marginTop:30,
        marginBottom:15
    },
    btnView2:{
        marginBottom:15
    },
    textView:{
        alignItems:'center'
    },
});
