import { View, Text, Button, StyleSheet,SafeAreaView,StatusBar } from "react-native"
import style from "../../style/style";
import { useEffect } from "react";


export default Flex = () => {
    let timer = setInterval(()=>{console.warn("timer")},2000)
    useEffect(
      ()=> clearInterval(timer)
    )
    return (
        <>
            <Text style={[styles.headingText]}>flex cards </Text>
            <SafeAreaView style={[styles.container]}>
                <View style={[styles.card,styles.card1]}>
                    <Text>Red</Text>
                </View>
                <View style={[styles.card,styles.card2]}>
                    <Text>Blue</Text>
                </View>
                <View style={[styles.card,styles.card3]}>
                    <Text>Green</Text>
                </View>
                <View style={[styles.card,styles.card1]}>
                    <Text>Red</Text>
                </View>
                <View style={[styles.card,styles.card2]}>
                    <Text>Blue</Text>
                </View>
                <View style={[styles.card,styles.card3]}>
                    <Text>Green</Text>
                </View>
                
            </SafeAreaView>
            

            </>
    );

}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:300,
        margin:4,
    },
    container:{
        flex:1,
        flexDirection:"row",
        flexWrap:'wrap',
        justifyContent:'space-evenly'
    },
    card:{
        justifyContent:"center",
        alignItems:"center",
        height:100,
        width:100,
        borderRadius:10,
        margin:5,
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
})