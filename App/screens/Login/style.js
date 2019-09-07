import {StyleSheet} from "react-native";
export default StyleSheet.create({
    loginContainer: {
        flex:1,
        flexDirection:'column',
        backgroundColor:"yellow"
    },
    loginText:{
        fontSize:40,
        marginHorizontal:30,
        alignContent:"center",
        alignSelf:"center",
        marginVertical:30
    },
    mainContents:{
        flex:3,
        flexDirection:'column',
        backgroundColor:"skyblue"
    },
    btnStyle:{
        backgroundColor:"blue",
        height:50,
        width:"800%",
        alignSelf:"center",
    },
    btnTxt:{
        color:"white",
        fontSize:22,
        textAlign:"center",
        padding:10,
        textAlignVertical:"center"
    }
})