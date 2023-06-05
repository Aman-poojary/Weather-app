import { View, ImageBackground, Image, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { deviceHeight, deviceWidth } from './Dimensions';
import Icon from 'react-native-vector-icons/Ionicons';
import { API_KEY } from './API';
import FadeInAnimation from './Fade';

export default function Details(props) {
  const { name } = props.route.params
  const [data, setData] = useState()
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    require('../../images/image1.jpg'),
    require('../../images/image8.jpg'),
    require('../../images/image9.jpg'),
    require('../../images/image10.jpg'),
    require('../../images/image11.jpg'),

  ];




  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=9c0234fe7fd64e64623180729a53f79c`,
    )
      .then(res => res.json())
      .then(res => setData(res))
      .catch(err => console.warn(err));
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 20000);

    return () => {
      clearInterval(interval);
    };

  }, [])


  const Data = (props) => (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Text style={{ color: 'lightgray', fontSize: 22 }}>{props.title}</Text>
      <Text style={{ color: 'white', fontSize: 22 }}>{props.value}</Text>

    </View>
  );

  return (
    <View>
      <ImageBackground
        source={images[currentImageIndex]}
        style={{ height: deviceHeight, width: deviceWidth }}
        imageStyle={{ opacity: 0.6, backgroundColor: 'black' }}
      />
      <View
        style={{
          position: 'absolute',
          paddingVertical: 20,
          paddingHorizontal: 10,
        }}>
        <View style={{ paddingHorizontal: 89, paddingTop: 5, flex: 1, flexDirection: 'row', alignItems: 'center', width: deviceWidth - 45, justifyContent: 'space-between' }} >
          <Icon name='cloud' size={46} color='#fff' />
          <Text style={{ fontSize: 34, color: '#fff', fontWeight: 'bold' }}>Weather</Text>
        </View>

        {data ? (
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              height: deviceHeight - 100,
            }}>
            <View>
              <Text style={{ color: 'white', fontSize: 40, textTransform: 'capitalize' }}>{name}</Text>
              <Text style={{ fontSize: 22, color: 'white', textAlign: "center", }}>
                {data['weather'][0]['main']}
              </Text>
            </View>

            <FadeInAnimation value={data['main']['temp']} />

            <View style={{ marginHorizontals: 16 }}>
              <Text style={{ color: 'white', fontSize: 22, marginBottom: 16 }}>Weather Details</Text>
              <View style={{ width: deviceWidth - 150 }}>
                <Data value={data['wind']['speed']} title="Wind" />
                <Data value={data['main']['pressure']} title="Pressure" />
                <Data value={`${data['main']['humidity']}%`} title="Humidity" />
                <Data value={data['visibility']} title="Visibility" />
              </View>
            </View>
          </View>
        ) : null}
      </View>
    </View>
  );
}
