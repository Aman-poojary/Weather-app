/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { Component, useEffect, useState } from 'react';
import CompanyData from './components/Companydata';
import States from './components/States';
import Flex from './components/Flex';
import Form from './components/Form';
import Flatlist from './components/Flatlist';
import Grids from './components/Grids';
import style from "./style/style";
import Classcomponent from './components/Classcomponent';
import Useeffect from './components/Useeffect';
import Unmount from './components/Unmount';
import Resp from './components/Resp';
import Loader from './components/Loader';
import Modalss from './components/Modals';
import Home from './components/project/Home';
import Details from './components/project/Details';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Screen } from 'react-native-screens';

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
  TouchableOpacityBase,
  Modal,
  Pressable,
  StatusBar,
  Image,
} from 'react-native';

// function HomeScreen(props) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text style={[style.text, style.marginBottom]}>Home Screen</Text>
//       <Image
//         style={{ width: 500, height: 500 }}
//         source={require('./image/photo.jpg')}
//       />
//       <Button title='Login' onPress={() => props.navigation.navigate("Login")}></Button>
//     </View>
//   );
// }

const Stack = createNativeStackNavigator();

const App = () => {
  const [show, setShow] = useState(true);
  return ( 
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown:false }}>
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen name="Details" component={Details}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>

  );
};



export default App;

