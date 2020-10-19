import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, AsyncStorage  } from 'react-native';

export default class App extends Component {
  setItemStorage = async (key, value) => {
    try {
      await AsyncStorage.setItem(
        key,
        JSON.stringify(value)
      );
    } catch (error) {
      // Error saving data
      console.log("Saving data error")
    }
  };

  removeItemStorage = async (key) => {
    try {
      await AsyncStorage.removeItem(
        key
      );
    } catch (error) {
      // Error saving data
      console.log("Remove data error")
    }
  };

  getItemStorage = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        // We have data!!
        return value
      }else {
        console.log("Saving data error")
      }
    } catch (error) {
      // Error retrieving data
      console.log("Saving data error")
    }
  };

  saveStorage = () => {
    this.setItemStorage('Login', {username: 'Admin', pass:'123123'})
  }

  readStorage = () => {
    this.getItemStorage('Login').then(result => {
      let jsonObject = JSON.parse(result)
      alert("username: " + jsonObject.username + " " + "password: " + jsonObject.pass  )
    })
  }

  removeStorage = () => {
    this.removeItemStorage('Login')
  }

  render() {
    let {container, btnStyle, txtStyle} = styles;
    return (
      <View style={container}>
        <TouchableOpacity style={btnStyle} onPress={this.saveStorage}>
          <Text style={txtStyle}>Save String</Text>
        </TouchableOpacity>
        <TouchableOpacity style={btnStyle} onPress={this.readStorage}>
          <Text style={txtStyle}>Read String</Text>
        </TouchableOpacity>
        <TouchableOpacity style={btnStyle} onPress={this.removeStorage}>
          <Text style={txtStyle}>Remove String</Text>
        </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create(
  {
    container : {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    btnStyle : {
      backgroundColor: '#7f7fff',
      justifyContent: 'center',
      height: 50,
      width: 100,
      alignItems: 'center',
      marginBottom: 20
    },
    txtStyle: {
      color: '#fff'
    }
  }
)