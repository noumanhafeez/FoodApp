import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor :"#dfbdfc",
      alignItems: "center",
    },
    text: {
        top: 240,
        fontSize:30,
        fontWeight:"600",
        fontStyle:"italic",
        color:"#8a13f2",
        fontFamily: "Times New Roman"
    },
    sign: {
        top: 250,
        fontSize:16,
        fontWeight:"600",
        fontStyle:"italic",
        color: "#8a13f2",
        fontFamily:"Times New Roman"
    },
    box: {
        padding:250,
        backgroundColor:"#a949fc",
        marginTop:330,
        borderTopLeftRadius:180,
        shadowOpacity:0.6,
        shadowColor:"black",
        borderTopRightRadius:80,
    },
    mail: {
        position:'absolute',
        left:95,
        top:50,
        width:320,
        height:100
    },
    email: {
        fontSize:20,
        left: 7,
        fontStyle:"italic",
        fontFamily:"Times New Roman",
        color: "#44068c"
    },
    example: {
        height: 45,
        left:10,
        top:10,
        borderRadius: 8,
        paddingHorizontal: 10,
        fontSize: 16,
        marginBottom:30,
        backgroundColor: '#d1a9f5',
    },
    check: {
        left:200,
        color:"orange",
        fontWeight:"600"
    },
    forgot: {
        left:200,
        color:"#7f07e8",
    },
    button1: {
        padding:22,
        borderRadius:18,
        backgroundColor:"#8a13f2",
        top:30,
        alignItems:"center"
      },
      signup: {
        fontSize:16,
        fontWeight:"400",
        top: 60,
        left:26,
        color: "#44068c"
      },
      up: {
        left:205,
        top:40,
        color:"#44068c",
        fontSize:16,
        fontWeight:"500"
      }
});

export default styles;