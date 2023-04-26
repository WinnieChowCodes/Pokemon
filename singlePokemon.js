import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, FlatList } from 'react-native-web';
import AsyncStorage from '@react-native-async-storage/async-storage';

class singlePokemon extends Component {

  constructor(props) {
    super(props);

    this.state = {
      pokemonData: []
    }
  }

  componentDidMount(){
    this.getData();
  }

  async getData() {
    fetch(await AsyncStorage.getItem("pokemonURL"), {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ pokemonData: responseJson })
      })
  };

  render() {
    console.log(this.state.pokemonData.sprites);
    return (
      <View >
        <Button title="back" onPress={() => this.props.navigation.goBack(null)}/>
        <Text>{this.state.pokemonData.name}</Text>
        <Text>Base Experience: {this.state.pokemonData.base_experience}</Text>
        <Text>Weight: {this.state.pokemonData.weight}</Text>
        <Text>Types: </Text>
        <FlatList
          data={this.state.pokemonData.types}
          renderItem={({ item }) => (
            <View>
              <Text>{item.type.name}</Text>
            </View>
          )}
          keyExtractor={({ userId }) => userId}
        />
        <Text>Abilities: </Text>
        <FlatList
          data={this.state.pokemonData.abilities}
          renderItem={({ item }) => (
            <View>
              <Text>{item.ability.name}</Text>
              <Text>{item.url}</Text>
            </View>
          )}
          keyExtractor={({ userId }) => userId}
        />
        <Text>Moves: </Text>
        <FlatList
          data={this.state.pokemonData.moves}
          renderItem={({ item }) => (
            <View>
              <Text>{item.move.name}</Text>
            </View>
          )}
          keyExtractor={({ userId }) => userId}
        />
        <Text>Stats: </Text>
        <FlatList
          data={this.state.pokemonData.stats}
          renderItem={({ item }) => (
            <View>
              <Text>{item.stat.name}</Text>
              <Text>{item.base_stat}</Text>
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default singlePokemon;