import React from 'react'
import { View, Text, ImageBackground, Pressable } from 'react-native'
import styles from './styles'
import Feather from 'react-native-vector-icons/Feather'

const HomeScreen = () => {
    return (
        <View>
            {/* searchbar */}
            <Pressable
             style={styles.searchButton} 
             onPress={()=>console.warn('Search clicked')}>
                 <Feather name={"search"} size={24} color={'#0f4c75'}  />
            <Text style={styles.searchButtonText}>
                Search cars
            </Text>
           
            </Pressable>
            <ImageBackground 
            source={require('../../../assets/images/bg.jpg')} 
            style={styles.image}>
            <Text style={styles.title}>
                Explore!
            </Text>
            {/* button */}
            <Pressable
             style={styles.button} 
             onPress={()=>console.warn('Explore clicked')}>
            <Text style={styles.exploreButtonText}>
                Find cars near You
            </Text>
            </Pressable>
            </ImageBackground>
           
        </View>
    )
}

export default HomeScreen
