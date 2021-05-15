import React from 'react'
import { View, Text } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import HomeScreen from '../screens/Home/HomeScreen'
import LocationsScreen from '../screens/Locations/LocationsScreen'
import CarFilterScreen from '../screens/CarFilter/CarFilterScreen'
import HomeTabNavigator from './HomeTabNavigator'

const Stack = createStackNavigator();
const Router = () => {
   
    return (
      <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen 
              name={"Home"} 
              component={HomeTabNavigator}
              options={{headerShown: false}}
            />
                 
            <Stack.Screen 
              name={"locations"} 
              component={LocationsScreen}
              options={{ 
                  title: "find your next car"
               }}
            />
            <Stack.Screen 
              name={"carFilter"} 
              component={CarFilterScreen}
              options={{ 
                  title: "How many are you?"
               }}
            />
            
          </Stack.Navigator>
      </NavigationContainer>
    )
}

export default Router
