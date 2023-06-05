import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { deviceHeight, deviceWidth } from './Dimensions'

export default function (props) {
    return (
        <TouchableOpacity style={{ marginHorizontal: 10, }}>
            <ImageBackground 
            source={props.image} 
            style={{ height: deviceHeight / 5, width: deviceWidth / 2 - 50, }} imageStyle={{ borderRadius: 17, opacity: 0.6,borderWidth:1, borderColor:'#fff' }} />
            <View style={{ position: 'absolute', height: '100%', width: '100%' }}>
                <Text style={{ color: '#fff', fontSize: 21, height: '100%', width: '100%', textAlign: 'center', textAlignVertical: 'center' }}> {props.name}</Text>
            </View>
        </TouchableOpacity>
    )
}