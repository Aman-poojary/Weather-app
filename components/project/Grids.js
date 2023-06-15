import {
    Text,
    View,
    Button,
    TouchableOpacity,
    TextInput,
    FlatList,
    SafeAreaView,
    ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import style from "../../style/style";



export default Grids = () => {
    const info = [
        {
            id: 1,
            name: 'Aman',
        },
        {
            id: 2,
            name: 'Arpan',
        },
        {
            id: 3,
            name: 'Anil',
        },
        {
            id: 4,
            name: 'Anna',
        },
        {
            id: 5,
            name: 'Vighnesha',
        },
        {
            id: 11,
            name: 'A',
        },
        {
            id: 21,
            name: 'r',
        },
        {
            id: 32,
            name: 'nil',
        },
        {
            id: 22,
            name: 'nna',
        },
        {
            id: 58,
            name: 'nesha',
        },
        {
            id: 15,
            name: 'Aman',
        },
        {
            id: 25,
            name: 'Arpan',
        },
        {
            id: 35,
            name: 'Anil',
        },
        {
            id: 45,
            name: 'Anna',
        },
        {
            id: 55,
            name: 'Vighnesha',
        },
    ];
    return (
        <>
            <ScrollView>

                <SafeAreaView style={[style.container]}>
                    {
                        info.map((item) => <View style={[style.textbox]}><Text style={[style.text, { color: "white" }]}>{item.name}</Text></View>)
                    }
                </SafeAreaView>
            </ScrollView>

        </>
    );

}