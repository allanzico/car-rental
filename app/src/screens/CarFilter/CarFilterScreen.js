import React, { useRef, useState, useCallback } from 'react'
import { View, Text, Pressable, TextInput, Platform, Modal, ScrollView, SafeAreaView } from 'react-native'
import styles from './styles'
import {useNavigation, useRoute} from '@react-navigation/native'
import Calendar from "react-native-calendar-range-picker";
import RBSheet from "react-native-raw-bottom-sheet";
import DateRangePicker from "react-native-daterange-picker";
import { DatePickerModal } from 'react-native-paper-dates';
import moment from 'moment'




const CarFilterScreen = () => {
    const initialStartDate = new Date();
    const initialEndDate = new Date();
    const [passengers, setPassengers] = useState(0);
    const [bags, setBags] = useState(0);
    const navigation = useNavigation();
    const route = useRoute();
    const [open, setOpen] = useState(false);
    const [range, setRange] = useState({ startDate: initialStartDate, endDate: initialEndDate});

    //Dismiss calendar
    const onDismiss = useCallback(() => {
      setOpen(false);
    }, [setOpen]);

    //Confirm Dates
    const onConfirm = useCallback(
      ({ startDate, endDate }) => {
        setOpen(false);
        setRange({ startDate, endDate });
      },
      [setOpen, setRange]
    );

    console.log(initialStartDate, initialEndDate);
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
         <View>
               <Pressable
                    style={styles.datesContainer} 
                    onPress={() => setOpen(true)}>
                      <View style={styles.startDateContainer}>
                        <Text style={{ textDecorationLine: 'underline', fontSize:16 }}>
                          {moment(range.startDate).format('DD-MM-YYY')}
                        </Text>
                      </View>
                      <View style={styles.daysContainer}>
                        <Text style={{ fontSize:16 }}>
                          7 days
                        </Text>
                      </View>
                      <View style={styles.endDateContainer}>
                        <Text style={{ textDecorationLine: 'underline', fontSize:16 }}>
                        {moment(range.endDate).format('DD-MM-YYY')}
                        </Text>
                      </View>
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
         >
                
        </Pressable> */}

                </Pressable>
          </View>
         
    </View>
            
  
     


        <View style={styles.footer}> 

            <Pressable style={styles.confirmDatesButton}
            onPress={() => setOpen(true)}
            style={styles.calenderButton }>
                <Text style={{ color:"#ffffff", fontSize: 16 }}>
                search
                </Text>
            </Pressable>   
        </View>
 <DatePickerModal
        // locale={'en'} optional, default: automatic
        mode="range"
        visible={open}
        onDismiss={onDismiss}
        startDate={range.startDate}
        endDate={range.endDate}
        onConfirm={onConfirm}
        // validRange={{
        //   startDate: new Date(2021, 1, 2),  // optional
        //   endDate: new Date(), // optional
        // }}
        // onChange={} // same props as onConfirm but triggered without confirmed by user
        // locale={'nl'} // optional
        // saveLabel="Save" // optional
        // label="Select period" // optional
        // startLabel="From" // optional
        // endLabel="To" // optional
        // animationType="slide" // optional, default is slide on ios/android and none on web
      />

   
</View>
        
    )
}

export default CarFilterScreen
