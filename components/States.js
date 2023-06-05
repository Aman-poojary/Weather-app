import {View, Text, Button} from "react-native"
import React,{useState} from 'react';


const States= ()=>{
    const [name, setName] = useState('Aman');

    const change=(val)=>{
        setName(val);
    }

    return(
    <View>
      <Text style={{fontSize:30}}>{name}</Text>
      <Button title='Press here' color={'green'} onPress={()=>change("Appu")}></Button>
    </View>    
    );
}

export default States;