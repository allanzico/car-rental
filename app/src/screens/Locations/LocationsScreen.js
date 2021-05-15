import React, { useState } from 'react'
import { View, Text, TextInput, FlatList, Pressable } from 'react-native'
import styles from './styles'
import searchResults from '../../../assets/data/search'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import {useNavigation} from '@react-navigation/native'

const LocationsScreen = () => {
    const [inputText, setInputText] = useState('');
    const navigation = useNavigation();
    return (
        <View  style={styles.container}>
           {/* input component */}
            <TextInput 
            style={styles.textInput}
            placeholder="Search for car locations"
            value={inputText}
            onChangeText={setInputText} />
           {/* locations list */}
           <FlatList
           data={searchResults}
           renderItem={({item})=>
           (<Pressable onPress={()=>navigation.navigate('carFilter')} style={styles.resultsContainer} >
               <View style={styles.iconContainer}>
                <EvilIcons name={"location"} size={24}/>
               </View>
               <Text style={styles.locationText}>{item.description}</Text>
           </Pressable>)}
           
           />
        </View>
    )
}

export default LocationsScreen
