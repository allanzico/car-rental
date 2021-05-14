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

import SearchResultsScreen from './src/screens/SearchResults/SearchResultsScreen';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  // dummy data
 
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
 
   {/* <PostComponent post={post1}/> */}
   
   {/* <SearchResultsScreen/> */}
   {/* <LocationsScreen/> */}
        {/* <HomeScreen/> */}
        <CarFilterScreen/>
    </SafeAreaView>
  );
};


export default App;