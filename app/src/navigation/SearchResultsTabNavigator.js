import React from 'react'
import { View, Text } from 'react-native'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import SearchResultsScreen from '../screens/SearchResults/SearchResultsScreen';
import SearchResultsMap from '../screens/SearchResultsMap/SearchResultsMap';

const Tab = createMaterialTopTabNavigator();
const SearchResultsTabNavigator = () => {
    return (
        <Tab.Navigator tabBarOptions=
        {{ activeTintColor: '#3282b8',
            indicatorStyle: {
                backgroundColor: '#3282b8'
            }
        
        }}>
            <Tab.Screen
            name={"list"}
            component={SearchResultsScreen}
            />
            <Tab.Screen
            name={"map"}
            component={SearchResultsMap}
            />

        </Tab.Navigator>
    )
}

export default SearchResultsTabNavigator
