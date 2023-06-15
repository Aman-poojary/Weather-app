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
import { useDispatch } from 'react-redux';
import { getUserList } from '../redux/action';
import Product from './Product';


export default function Userlist() {

    // const cartData = useSelector((state)=> state.reducer)
    const dispatch = useDispatch();
    const userList = useSelector((state) => state.reducer);
    const allUsers=userList[0].users;
    console.log(userList.length);
    console.warn(allUsers);
    useEffect(()=>{
        dispatch(getUserList());
        
    },[])
    return (
        <View>
            <Text>HELLO FROM THE OTHER SIDE</Text>
            {/* {userList.length ?
            users.map((item) => (<Text>{item.firstName}</Text>))
            : null
            } */}

            {
                userList.length ? <FlatList
                data={allUsers}
                renderItem={({ item }) => (<Text style={[style.text]}>{item.id}.{item.firstName}</Text>)} 
            />: <Text style={[style.text]}>
                Loading.....
            </Text>
            }
            
           
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

})