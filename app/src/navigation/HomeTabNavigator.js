import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home/HomeScreen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ExploreNavigator from './ExploreNavigator';
import SearchResultsMap from '../screens/SearchResultsMap/SearchResultsMap';

const Tab = createBottomTabNavigator();
const HomeTabNavigator = () => {
    return (
        <Tab.Navigator tabBarOptions={{ 
            activeTintColor: '#3282b8'
         }}>

             {/* Home tab */}
            {/* <Tab.Screen 
            name={"Home"} 
            component={ExploreNavigator}
            options={{ 
                tabBarIcon:({color}) => (
                    <Ionicons name="home-outline" size={24} color={color}/>
                )
             }}
            /> */}
            <Tab.Screen 
            name={"Home"} 
            component={SearchResultsMap}
            options={{ 
                tabBarIcon:({color}) => (
                    <Ionicons name="home-outline" size={24} color={color}/>
                )
             }}
            />

            {/* Favorites Tab */}
            <Tab.Screen 
            name={"Favorites"} 
            component={HomeScreen}
            options={{ 
                tabBarIcon:({color}) => (
                    <Ionicons name="heart-outline" size={24} color={color}/>
                )
             }}
            />

            {/* Rentals Tab */}
            <Tab.Screen 
            name={"Rentals"} 
            component={HomeScreen}
            options={{ 
                tabBarIcon:({color}) => (
                    <Ionicons name="car-sport-outline" size={24} color={color}/>
                )
             }}
            />

            {/* Inbox tab */}
            <Tab.Screen 
            name={"Inbox"} 
            component={HomeScreen}
            options={{ 
                tabBarIcon:({color}) => (
                    <Ionicons name="chatbox-outline" size={24} color={color}/>
                )
             }}
            />

            {/* Profile tab */}
            <Tab.Screen 
            name={"Profile"} 
            component={HomeScreen}
            options={{ 
                tabBarIcon:({color}) => (
                    <Ionicons name="person-circle-outline" size={24} color={color}/>
                )
             }}
            />
        </Tab.Navigator>
    )
}

export default HomeTabNavigator
