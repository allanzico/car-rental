import React, { useRef, useState } from 'react'
import { View, Text, Pressable, TextInput, Platform, Modal, ScrollView, SafeAreaView } from 'react-native'
import styles from './styles'
import {useNavigation, useRoute} from '@react-navigation/native'
import Calendar from "react-native-calendar-range-picker";
import RBSheet from "react-native-raw-bottom-sheet";
import DateRangePicker from "react-native-daterange-picker";
import moment from 'moment'



const CarFilterScreen = () => {
    const [passengers, setPassengers] = useState(0);
    const [bags, setBags] = useState(0);
    const [date, setDate] = useState(new Date());
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [calender, setCalender] = useState(true);
    const navigation = useNavigation();
    const route = useRoute();
    const refRBSheet = useRef();
 
    
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
            onPress={() => refRBSheet.current.open()}
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

        {/* {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )} */}

   
        {/* {showCalender && <Calendar
            startDate="2020-05-05"
            endDate="2020-05-12"
            onChange={({ startDate, endDate }) => console.log({ startDate, endDate })}
        />} */}
        <View >
        <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000"
      }}
    >
        
     <View>
     <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent"
          },
          draggableIcon: {
            backgroundColor: "#000"
          }
        }}
      >
    
          <Calendar
            startDate={date}
            endDate="2021-05-12"
            disabledBeforeToday = {true}
            onChange={({ startDate, endDate }) => console.log({ startDate, endDate })}
            style={{

                todayColor: '#3282b8',
                selectedDayTextColor: 'white',
                selectedDayBackgroundColor: '#3282b8',
                selectedBetweenDayBackgroundTextColor: '#bbe1fa',
              }}
        
        />
    
         

      </RBSheet>
     </View>
     <View>
         <Pressable>
             <Text>
             Enter
             </Text>
         </Pressable>
     </View>
     
     
    </View>
</View>
   
</View>
        
    )
}

export default CarFilterScreen
