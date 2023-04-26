import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-web';
import AsyncStorage from '@react-native-async-storage/async-storage';

class allPokemon extends Component {

  constructor(props) {
    super(props);

    this.state = {
      allPokemon: []
    }
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0", {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ allPokemon: responseJson })
      })
  };

  getPokemon = async (url) =>{
    try{
      await AsyncStorage.setItem("pokemonURL", url);
      this.props.navigation.navigate("singlePokemon");
    } catch{
      throw "Something went wrong!"
    }
  }

  render() {
    return (
      <View >
        <FlatList
          data={this.state.allPokemon.results}
          renderItem={({ item }) => (
            <View style={styles.container}>
              <TouchableOpacity onPress={() => this.getPokemon(item.url)} style={styles.container}>
                <Text>{item.name}</Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={({ userId }) => userId}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    backgroundColor: "#a2d9f5",
    margin: 1
  },
});

export default allPokemon;