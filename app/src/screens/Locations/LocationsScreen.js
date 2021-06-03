import React, { useState } from 'react'
import { View, Text, TextInput, FlatList, Pressable } from 'react-native'
import styles from './styles'
import searchResults from '../../../assets/data/search'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import {useNavigation} from '@react-navigation/native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import SuggestionsRow from './SuggestionsRow'



const LocationsScreen = () => {
    const [inputText, setInputText] = useState('');
    const navigation = useNavigation();

    
    return (
        <View  style={styles.container}>
           {/* input component */}
           <GooglePlacesAutocomplete
                    placeholder='Search for car locations'
                    onPress={(data, details = null) => {
                        fetchDetails = true
                        navigation.navigate('carFilter')
                    }}
                    styles={{ 
                       textInput: styles.textInput,
                     }}
                     suppressDefaultStyles
                     renderRow={(item)=><SuggestionsRow item={item} />}
                    query={{
                        key: 'AIzaSyB61-FJ_TL4CE_PRerC5JuMtoWBDhMRIJs',
                        language: 'en',
                    }}
                    
                 
            />
            
        </View>
    )
}

export default LocationsScreen
