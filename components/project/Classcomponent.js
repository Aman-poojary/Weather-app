import React, { Component, useState } from 'react';
import style from "../../style/style";


import {
  Text,
  View,
  Button,
  TouchableOpacity,
  TextInput,
  FlatList,
  StyleSheet,
} from 'react-native';


class Classcomponent extends Component {
  constructor() {
    super();
    this.state = {
      isHighlighted: true,
      name: 'Aman',
      id: 20,
    };
  }

  updateName(val) {
    this.setState({ name: val });
  }

  setIsHighlighted(val) {
    this.setState({ isHighlighted: val });
  }

  getContainerStyle() {
    if (this.state.isHighlighted) {
      return styles.highlightedContainer;
    } else {
      return styles.container;
    }
  }

  render() {
    return (
      <TouchableOpacity
        style={this.getContainerStyle()}
        onPress={() => {
          this.setIsHighlighted(!this.state.isHighlighted);
        }}
      >
        <Text style={styles.text}>Press to change color</Text>
      </TouchableOpacity>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  highlightedContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
});



export default Classcomponent;