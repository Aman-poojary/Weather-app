import {
  Text,
  View,
  Button,
  TouchableOpacity,
  TextInput,
  FlatList,
  SafeAreaView,
  ScrollView,
  ImageBackground
} from 'react-native';
import React, { useState, useEffect } from 'react';
import style from "../../style/style";
import { deviceHeight, deviceWidth } from './Dimensions';
import Cards from './Cards';
import Icon from 'react-native-vector-icons/Ionicons'

export default function Home(props) {
  const [city, setCity] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    require('../../images/image1.jpg'),
    require('../../images/image2.jpg'),
    require('../../images/image8.jpg'),
    require('../../images/image9.jpg'),
    require('../../images/image10.jpg'),
    require('../../images/image11.jpg'),
    
  ];

  const cities = [
    {
      id: 1,
      name: 'New Delhi',
      image: require('../../images/image3.jpg'),
    },
    {
      id: 2,
      name: 'New York',
      image: require('../../images/image4.jpg'),
    },
    {
      id: 3,
      name: 'London',
      image: require('../../images/image5.jpg'),
    },
    {
      id: 4,
      name: 'San Francisco',
      image: require('../../images/image6.jpg'),
    },
    {
      id: 5,
      name: 'New Jersey',
      image: require('../../images/image7.jpg'),
    },
  ];

  const renderedItems = cities.map((item) => (
    <Cards key={item.id} name={item.name} image={item.image} />
  ));

  const nextScreen=()=>{
    if(city.length>=2){
     return props.navigation.navigate('Details', {name:city});
    }
    else{
      console.warn("Please enter valid name")
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 25000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <View>
      <ImageBackground source={images[currentImageIndex]} style={{ height: deviceHeight, width: deviceWidth }} imageStyle={{ opacity: 0.55, backgroundColor: 'black' }} />

      <View style={{ position: 'absolute', paddingHorizontal: 20, paddingVertical: 10, marginTop: 20 }}>

        <View style={{ paddingHorizontal: 89, paddingTop: 5, flex: 1, flexDirection: 'row', alignItems: 'center', width: deviceWidth - 45, justifyContent: 'space-between' }} >
          <Icon name='cloud' size={46} color='#fff' />
          <Text style={{ fontSize: 34, color: '#fff', fontWeight: 'bold' }}>Weather</Text>
        </View>

        <View style={{ paddingHorizontal: 10, marginTop: 100 }}>
          <Text style={{ fontSize: 40, fontWeight: 'bold', color: '#fff' }}>Hello, Guys</Text>
          <Text style={{ fontSize: 25, fontWeight: 300, color: '#fff' }}>Search the city by name.</Text>

          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 50, borderColor: '#fff', borderWidth: 1, borderRadius: 45, }}>

            <TextInput
              value={city}
              onChangeText={val => setCity(val)}
              placeholder='Search city'
              placeholderTextColor={'white'}
              style={{ color: '#fff', fontSize: 20, paddingHorizontal: 15 }} />

            <TouchableOpacity onPress={nextScreen}>
              
              <Icon name='search' size={26} color='#fff' style={{ paddingHorizontal: 15 }} />
            </TouchableOpacity>

          </View>
          <Text style={{ color: '#fff', fontSize: 22, fontWeight: 'bold', paddingHorizontal: 10, marginTop: 60, marginBottom: 20 }} >My Locations</Text>

          <View>
            <FlatList
              horizontal={true}
              data={cities}
              renderItem={({ item }) => (<Cards name={item.name} image={item.image} />)}
            />

          </View>
        </View>

      </View>

    </View>
  )
}