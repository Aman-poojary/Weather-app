import {
    Text,
    View,
    Button,
    TouchableOpacity,
    TextInput,
    FlatList,
    SafeAreaView,
    ScrollView,
    ImageBackground,
    StyleSheet,
  } from 'react-native';
  import React, { useState, useEffect } from 'react';
  import style from "../../style/style";
  import { useSelector } from 'react-redux';

export default function Header() {
    const cartData = useSelector((state)=> state.reducer)
    // console.warn(cartData);
    const [cartItems, setcartItems] = useState(0);

    useEffect(()=>{
        setcartItems(cartData.length);
    },[cartData]);
  return (
    <View>
      <Text style={{fontSize:20,padding:10,textAlign:'right',backgroundColor:'yellow'}}>{cartItems}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
    },

})