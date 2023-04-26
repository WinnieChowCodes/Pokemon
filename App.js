import * as React from 'react';
import { Component } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AllPokemon from "/allPokemon";
import SinglePokemon from "/singlePokemon";
import Demonstration from './demonstration';

const MainStack = createNativeStackNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <MainStack.Navigator initialRouteName="demonstration" screenOptions={{headerShown: false}}>
          <MainStack.Screen name="allPokemon" component={AllPokemon}/>
          <MainStack.Screen name="singlePokemon" component={SinglePokemon}/>
          <MainStack.Screen name="demonstration" component={Demonstration}/>
        </MainStack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;