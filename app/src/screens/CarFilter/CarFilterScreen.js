import React, { useState } from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from './styles'
import {useNavigation} from '@react-navigation/native'

const CarFilterScreen = () => {
    const [passengers, setPassengers] = useState(0);
    const [bags, setBags] = useState(0);
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View>
                 {/* Passengers button row */}
            <View style={styles.filterContainer}>
                <View >
                    <Text style={styles.filterText}>Passengers</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Pressable onPress={()=>setPassengers(Math.max(0,passengers-1))} style={styles.choiceButtons} >
                    <Text style={styles.choiceButtonsText}>-</Text>
                    </Pressable>
                    <Text style={styles.valueText}>{passengers}</Text>
                    <Pressable onPress={()=>setPassengers(passengers+1)} style={styles.choiceButtons} >
                    <Text style={styles.choiceButtonsText}>+</Text>
                    </Pressable>
                    
                </View>
            </View>

            {/* Bags button row */}
            <View style={styles.filterContainer}>
                <View >
                    <Text style={styles.filterText}>Bags</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Pressable onPress={()=>setBags(Math.max(0,bags-1))} style={styles.choiceButtons} >
                    <Text style={styles.choiceButtonsText}>-</Text>
                    </Pressable>
                    <Text style={styles.valueText}>{passengers}</Text>
                    <Pressable onPress={()=>setBags(bags+1)} style={styles.choiceButtons} >
                    <Text style={styles.choiceButtonsText}>+</Text>
                    </Pressable>
                    
                </View>
            </View>
            
        </View>
        <Pressable onPress={()=>navigation.navigate('')} style={styles.searchButton }>
                <Text style={{ color:"#ffffff", fontSize: 20 }}>
                Search Cars
                </Text>
        </Pressable>
            
    
           
        </View>
        
    )
}

export default CarFilterScreen
