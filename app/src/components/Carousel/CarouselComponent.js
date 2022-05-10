import React from 'react'
import { View, Text, Image, useWindowDimensions, Pressable} from 'react-native'
import styles from './styles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import NumberFormat from 'react-number-format';
import {useNavigation} from '@react-navigation/native'

const CarouselComponent = (props) => {
    const post = props.post;
    const width = useWindowDimensions().width;

  const navigation = useNavigation();
  const loadDetailsPage = () => {
    navigation.navigate('detailsPage', {postId:post.id})
  }
    
    return (
    <Pressable onPress={loadDetailsPage} style={[styles.container, { width: width - 60}]}>
      <View style={styles.innerContainer}>
        {/* Image  */}
        <Image
          style={styles.image}
          source={{uri: post.image}}
        />

        <View style={{flex: 1, marginHorizontal: 10}}>
          {/* Passengers, Bags and Doors  */}
        <View style={{ flexDirection: 'row' }}>
            <View style={styles.passengersContainer}>
                <MaterialCommunityIcons name={'seat-passenger'} size={18} color={'#3282b8'}/>
                <Text style={styles.passengersText}>
                    {post.passengers}
                </Text>
            </View>
            <View style={styles.passengersContainer}>
                <MaterialCommunityIcons name={'car-shift-pattern'} size={18} color={'#3282b8'}/>
                <Text style={styles.passengersText}>
                    {post.gearType}
                </Text>
            </View>
            <View style={styles.passengersContainer}>
                <MaterialCommunityIcons name={'car-door'} size={18} color={'#3282b8'}/>
                <Text style={styles.passengersText}>
                    {post.doors}
                </Text>
            </View>
        </View>
        
          {/* Title */}
          <Text style={styles.title} numberOfLines={2}>
           {post.title}
          </Text>

          {/*  New Price*/}
          <Text style={styles.prices}>
                <Text style={styles.prefix} >
                    UGX
                </Text>
                <Text style={styles.newPrice}>
                 <NumberFormat
                    value={post.newPrice}
                    displayType={'text'}
                    thousandSeparator={true}
                    renderText={value => <Text>{value}</Text>} 
                /> /day
                </Text>
          </Text>
        </View>
      </View>
    </Pressable>
   
    )
}

export default CarouselComponent
