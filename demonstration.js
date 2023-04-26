import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-web';
import AsyncStorage from '@react-native-async-storage/async-storage';

class Demonstration extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: []
    }
  }

  componentDidMount() {
    this.getData();
  }


  //API logic goes here
  getData() {
    fetch('https://www.boredapi.com/api/activity/',{
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    })
    .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ data: responseJson })
      }) 
  }

  render() {
    return (
      <View>
        {/* The way you access the data variable depends on the documentation of the api decided*/}
        <Text>{this.state.data.activity}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
});

export default Demonstration;