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
    Image,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { useDispatch,  useSelector } from 'react-redux'; //functions imported from redux cant be used directly.we should use useDispatch 
import style from "../../style/style";
import { addToCart, removeFromCart } from '../redux/action';

export default function Product(props) {
    //states
    const [isAddedToCart, setisAddedToCart] = useState(false);


    const item = props.item;
    const cartItems = useSelector((state)=>state.reducer);

    const dispatch = useDispatch(); //create a useDispatch variable

    //cart managaing functions
    const handAddToCart=(item)=>{
        dispatch(addToCart(item));
    }
    const handRemovefromCart=(item)=>{
        dispatch(removeFromCart(item.name));
    }

    useEffect(()=>{
        const final = cartItems.filter((element)=>{
            return element.name === item.name;
        })
        console.warn(final.length);
        if(final.length){
            setisAddedToCart(true);
        }
        else{
            setisAddedToCart(false);
        }
                
    });
    return (
            <View style = {{ alignItems: 'center',borderBottomColor:'gold', borderBottomWidth:2,padding:10,marginBottom:30}}>
            <Text style={{ fontSize: 24 }} >{item.name}</Text>
            <Text style={{ fontSize: 24 }} >{item.price}</Text>
            <Text style={{ fontSize: 24 }} >{item.color}</Text>
            <Image style={{width:200, height:200}} source={{uri:item.image}}/>
            {
                isAddedToCart? <Button title='remove from cart' onPress={()=>handRemovefromCart(item)}/>: <Button title='Add to cart' onPress={()=>handAddToCart(item)}/>
            }
           
        </View>
            
    )
}