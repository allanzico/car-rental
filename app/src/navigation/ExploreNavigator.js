import React from 'react'
import { View, Text } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import HomeScreen from '../screens/Home/HomeScreen';
import SearchResultsScreen from '../screens/SearchResults/SearchResultsScreen';
import SearchResultsTabNavigator from './SearchResultsTabNavigator';



const Stack = createStackNavigator();
const ExploreNavigator = () => {
    return (
      
          <Stack.Navigator>
            <Stack.Screen 
              name={"Home"} 
              component={HomeScreen}
              options={{headerShown: false}}
            />        
            <Stack.Screen 
              name={"searchResults"} 
              component={SearchResultsTabNavigator}
              options={{ 
                  title: "cars to rent"
               }}
            />
         </Stack.Navigator>
     
    )
}

export default ExploreNavigator
