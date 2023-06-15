import React, { useState } from 'react';
import style from "../../style/style";
import {
    Text,
    View,
    Button,
    TouchableOpacity,
    TextInput,
    FlatList,
    StyleSheet,
    SafeAreaView,
  } from 'react-native';
  
  
  const Unmount = () => {
    const [btn, setBtn] = useState(false);
    const [show, setShow] = useState(false);
  
    const getContainerStyle = () => {
      return btn ? style.button2 : style.button1;
    };
  

    return (
      <View>
        <TouchableOpacity style={getContainerStyle()} onPress={()=>[setBtn(!btn),setShow(!show)]}>
          {
            btn?<Text style={[style.text,{color:'red'}]}>X</Text>:<Text style={[style.text,{color:'green'}]}>Show</Text>
          }
        </TouchableOpacity>
        {
          show?<Flex/>:<Textinput/>
        }
      </View>
    );
  };
  
  
  export default Unmount;