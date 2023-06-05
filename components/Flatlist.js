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
import React, { useState } from 'react';
import style from "../style/style";




export default Flatlist = () => {
  const info = [
    {
      id: 1,
      name: 'Aman',
      data:["PHP","JS","C++"],
    },
    {
      id: 2,
      name: 'Arpan',
      data:["Ruby","React","C"],
    },
    {
      id: 3,
      name: 'Anil',
      data:["C++","JS","python"],
    },
    {
      id: 4,
      name: 'Anna',
      data:["RN","Kotlin","Java"],
    },
    {
      id: 5,
      name: 'Vighnesha',
      data:["Go","Assembly","Django"],
    },
    
  ];


  return (
    // <View>
    //   <Text style={style.text}>Flatlist and components </Text>
      
    //     <FlatList
    //       data={info}
    //       renderItem={({ item }) => (<CompanyData name ={item.name} id={item.id}/>)}
    //       keyExtractor={(item) => item.id.toString()}
    //     />
    // </View>
    <View>
      <Text style={[style.text]}>Section List:</Text>
      <SectionList
      sections={info}
      renderItem={({item})=><Text style={[style.text,{marginLeft:20,}]}>{item}</Text>}
      renderSectionHeader={({section:{name}})=>(
        <Text style={[style.text,{color:'red'}]}>{name}</Text>
      )}
      renderSectionFooter={({section:{id}})=>(
        <Text style={[style.text,{color:'green'}]}>{id}</Text>
      )}
      />
    </View>
  );
};



const CompanyData = (props) => {
    return (
        <SafeAreaView style={style.container}>
            <View style={[style.textbox, style.card3]}>
                <Text style={[style.text, { color: "white" }]}>{props.name}</Text>
            </View>
        </SafeAreaView>

    );
}