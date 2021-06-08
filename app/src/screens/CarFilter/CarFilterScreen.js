import React, { useState } from 'react'
import { View, Text, Pressable, TextInput } from 'react-native'
import styles from './styles'
import {useNavigation, useRoute} from '@react-navigation/native'

const CarFilterScreen = () => {
    const [passengers, setPassengers] = useState(0);
    const [bags, setBags] = useState(0);
    const navigation = useNavigation();
    const route = useRoute();

    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
               <View>
               <Pressable
                    style={styles.descriptionButton} 
                    onPress={()=>navigation.navigate('locations')}>
                    <Text style={styles.descriptionButtonText}>
                    {route.params.data.description}
                    </Text>
                    </Pressable>
               </View>
            <View>
                 {/* Passengers button row */}

            <View style={styles.filterMainContainer}>
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
                    <Text style={styles.valueText}>{bags}</Text>
                    <Pressable onPress={()=>setBags(bags+1)} style={styles.choiceButtons} >
                    <Text style={styles.choiceButtonsText}>+</Text>
                    </Pressable>
                    
                </View>
            </View>

           </View>
           
            
        </View>
 </View>
            
  
     


        <View style={styles.footer}> 
            <View style={styles.skipContainer}>
            <Pressable 
            onPress={()=>navigation.navigate('Home', {
                screen: 'Home',
                params: {
                    screen: 'searchResults',
                    params: {
                        passengers: passengers,
                        bags:bags,
                        viewport: route.params.viewport
                    }
                }
            })} 
         >
                <Text style={{ textDecorationLine: 'underline', fontSize:16 }}>
                skip
                </Text>
        </Pressable>
               
                    
            </View>
            <Pressable 
            onPress={null} 
            style={styles.calenderButton }>
                <Text style={{ color:"#ffffff", fontSize: 16 }}>
                select dates
                </Text>
        </Pressable>
        {/* <Pressable 
            onPress={()=>navigation.navigate('Home', {
                screen: 'Home',
                params: {
                    screen: 'searchResults',
                    params: {
                        passengers: passengers,
                        bags:bags,
                        viewport: route.params.viewport
                    }
                }
            })} 
            style={styles.calenderButton }>
                <Text style={{ color:"#ffffff", fontSize: 20 }}>
                Add dates
                </Text>
        </Pressable> */}
        </View>
</View>
        
    )
}

export default CarFilterScreen
