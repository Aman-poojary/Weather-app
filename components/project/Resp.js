import React from 'react';
import { View, StyleSheet } from 'react-native';

const Resp = () => {
  return (
    

    <View style={styles.container}>
      <View style={[styles.box, { backgroundColor: 'orange' }]}></View>
      <View style={[styles.box, { backgroundColor: 'white' }]}></View>
      <View style={[styles.box, { backgroundColor: 'green' }]}></View>
     
      
      
    </View>
    
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    flexWrap:'wrap',
    margin:10,
    
  },
  box: {
    height:900,
    width:'100%',
  },
});

export default Resp;
