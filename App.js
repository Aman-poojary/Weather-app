/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { Component, useEffect, useState } from 'react';
import CompanyData from './components/project/Companydata';
import States from './components/project/States';
import Flex from './components/project/Flex';
import Form from './components/project/Form';
import Flatlist from './components/project/Flatlist';
import Grids from './components/project/Grids';
import style from "./style/style";
import Classcomponent from './components/project/Classcomponent';
import Useeffect from './components/project/Useeffect';
import Unmount from './components/project/Unmount';
import Resp from './components/project/Resp';
import Loader from './components/project/Loader';
import Modalss from './components/project/Modals';
import Home from './components/project/Home';
import Product from './components/project/Product';
import Header from './components/project/Header';
import Userlist from './components/project/Userlist';
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
  ScrollView,
} from 'react-native';



const Stack = createNativeStackNavigator();

const App = () => {
  // const [show, setShow] = useState(true);
  const products=[
    {
    id:1,
    name: 'Samsung Mobile',
    color: 'white',
    price: 30000,
    image: 'https://www.iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png'
    },
    {
    id:2,
    name: 'Apple I phone',
    color: 'black',
    price: 130000,
    image: 'https://www.iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png'
    },
    {
    id:3,
    name: 'Nokia Mobile',
    color: 'green',
    price:20000,
    image: 'https://www.iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png'
    }
  ]
  return ( 

    //weather app navigation code
    // <NavigationContainer>
    //   <Stack.Navigator screenOptions={{ headerShown:false }}>
    //     <Stack.Screen name="Home" component={Home}></Stack.Screen>
    //     <Stack.Screen name="Details" component={Details}></Stack.Screen>
    //   </Stack.Navigator>
    // </NavigationContainer>

    <View>
     
      
        {/* {
          products.flatMap((item)=><Product item={item}/>)
        } */}
        <Userlist/>
      

      
    </View>





  );
};



export default App;

