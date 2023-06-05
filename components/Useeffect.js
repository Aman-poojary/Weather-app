import {
    Text,
    View,
    Button,
    TouchableOpacity,
    TextInput,
    FlatList,
    SafeAreaView,
    SectionList,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import style from "../style/style";




export default Useeffect = () => {
    const [count, setCount]= useState(0);
    const [data, setData]= useState(100);
    // useEffect is used for calling of api or validating as it takes place before the loading of components
    // we are passing parameters to a useEffect func
//   useEffect( ()=>{console.warn('hello');} , [] ) 
  // [] is used to stop the firing of useEffect func during updation of any components. The func is fired only during the loading.
  return (
    <View>
        <Text style={[style.text,style.m10]}>USEFFECT:</Text>
        <TouchableOpacity style={[style.button,style.marginBottom]} onPress={()=>setData(data+10)}><Text >Add data</Text></TouchableOpacity>
        <TouchableOpacity style={[style.button]} onPress={()=>setCount(count+1)}><Text >Add count</Text></TouchableOpacity>
        <User info={{data,count}}/>
    </View>
  );
};

const User=(props)=>{
    useEffect( ()=>{console.warn('Data value updated');} , [props.info.data] ) 
    useEffect( ()=>{console.warn('Count value updated');} , [props.info.count] ) 
    return(
        <View>
            <Text style={[style.text,style.card1,style.m10,style.p5]}>DATA:{props.info.data}</Text>
            <Text style={[style.text,style.card2,style.m10,style.p5]}>COUNT:{props.info.count}</Text>
        </View>
    );
}


