import React from 'react'
import { View, Text, Pressable } from 'react-native'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import styles from './styles'

const SuggestionsRow = ({item})=>(
    <View style={styles.resultsContainer} >
        <View style={styles.iconContainer}>
        <EvilIcons name={"location"} size={24}/>
        </View>
        <Text style={styles.locationText}>{item.description}</Text>
    </View>
)

export default SuggestionsRow
