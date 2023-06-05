/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { Component, useEffect, useState } from 'react';
import style from "../style/style";

import {
  Text,
  View,
  Button,
  TouchableOpacity,
  TextInput,
  FlatList,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
  TouchableOpacityBase
} from 'react-native';


const Loader = () => {
  const [show, setShow] = useState(false);

  const displayLoader=()=>{
    setShow(true);
    setInterval(()=>{
      setShow(false)
    },5000)
  }

  return (
    <View  style={{flex:1,justifyContent:'center', alignItems:'center'}}>
    <ActivityIndicator size={100} color={'gold'} animating={show}/>
    {/* <TouchableOpacity style={[style.button,style.m5]} onPress={displayLoader}><Text style={[style.text]}>Load data</Text></TouchableOpacity> */}
    <Button title='Load data' onPress={displayLoader}></Button>
    </View>
  );
};


export default Loader;
