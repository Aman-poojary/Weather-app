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
 
const Modals = () => {
    const [show, setShow] = useState(true);
    return (
      <View style={{flex:1,justifyContent:'flex-end'}}>
      <Modal
      transparent={true}
      animationType='slide'
      visible={show}
      >
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <View style={[style.modalView]} >
            <Text style={[style.text,{color:'skyblue'}]}>Hello world</Text>
           <TouchableOpacity style={[style.button,{marginTop:8}]} onPress={()=>setShow(!show)}><Text style={[style.text]}>close</Text></TouchableOpacity>
          </View>
        </View>
      </Modal>
        <Button title='Load data'onPress={()=>setShow(!show)} ></Button>
      </View>
    );
  };
  
  
  export default Modals;
  