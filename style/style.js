import {StyleSheet} from 'react-native'

export default styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        
      },
    textbox:{
        backgroundColor: "lightgreen",
        margin:10,
        padding: 10,
        borderRadius:10,
        alignItems: 'center',
        justifyContent: 'center',
        height:"100%",
        width:'100%',
    },
    textbox2:{
        backgroundColor: "pink",
        margin:10,
        padding: 10,
        borderRadius:10,
        alignItems: 'center',
        justifyContent: 'center',
        height:"100%",
        width:'100%',
    },
    button:{
        padding:10,
        borderRadius: 10,
        elevation: 3,
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
    },
    button1:{
        padding:10,
        borderRadius: 5,
        elevation: 3,
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        marginHorizontal:100,
        marginTop:15,
    },
    button2:{
        padding:10,
        borderRadius:50,
        elevation: 3,
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        marginHorizontal:180,
        marginTop:8,
    },
    outbtn:{
        justifyContent:'center',
        alignItems:'center',
    },
    textinput:{
        fontSize:20,
        color:"blue",
        borderWidth:2,
        borderColor:"black",
    },
    m10:{
        margin:10,
    },
    m5:{
        margin:5,
    },
    p5:{
        padding:5,
    },
    marginBottom:{
        marginBottom:5,
    },
    container:{
        flex:1,
        flexDirection:"row",
        flexWrap:'wrap',
        justifyContent:'space-between'
    },
    card1:{
        backgroundColor:"pink",
    },
    card2:{
        backgroundColor:"lightblue",
    },
    card3:{
        backgroundColor:"lightgreen",
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 30,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
})