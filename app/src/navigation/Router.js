import React from 'react'
import { View, Text } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import HomeScreen from '../screens/Home/HomeScreen'

const Stack = createStackNavigator();
const Router = () => {
   
    return (
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name={"home"} component={HomeScreen}/>
          </Stack.Navigator>
      </NavigationContainer>
    )
}

export default Router
