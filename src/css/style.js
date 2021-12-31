import { StyleSheet } from "react-native"
import { height } from "styled-system"
const styles = StyleSheet.create({
    //Authentication 
    Content:{
        // backgroundColor: "#f7ab0a",
        width:'100%',
        height:'100%',
    },
    topContent:{
        width:'100%',
        height:'100%',
    },
    Imagebackdrop:{
        height:"100%",
        width:'100%',  
        resizeMode:'contain'     
    },
    topTextView:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    },
    topText:{
        color:'white',
        fontSize: 60,
        fontWeight:'bold',

    },
    title:{
        textAlign: 'center',
        fontWeight:'bold',
        fontSize: 50,
        color:'white',
        
    },
    subtitle:{
        textAlign: 'center',
        fontWeight:'200',
        fontSize: 20,
        color:'white',
    },

    Navigations:{
        width:'100%',
        height:'20%',
    },
    input: {
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
      tinyLogo: {
        width: 60,
        height: 60,
        borderRadius:10
      },
      
      item: {
          paddingTop:0
      },
      footer:{
        // position:'fixed'
      }
      
})
export default styles