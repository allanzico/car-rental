/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import PostComponent from './src/components/Post/PostComponent';
import CarFilterScreen from './src/screens/CarFilter/CarFilterScreen';
import HomeScreen from './src/screens/Home/HomeScreen';
import LocationsScreen from './src/screens/Locations/LocationsScreen';
import 'react-native-gesture-handler';

import SearchResultsScreen from './src/screens/SearchResults/SearchResultsScreen';
import Router from './src/navigation/Router';


const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  // dummy data
 
  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Router/>

    </>
   
  );
};


export default App;
