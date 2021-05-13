import React from 'react'
import { View, Text, Image} from 'react-native'
import styles from './styles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const PostComponent = () => {
    return (
        <View style={styles.container}>
            {/* image */}
        <Image source={{ uri:'https://cdn.pixabay.com/photo/2017/06/22/18/52/rubicon-2432058_960_720.jpg' }} style={styles.image}/>

            {/* passengers */}
            <View style={styles.seats}>
                <MaterialCommunityIcons name={'car-seat'} size={18} color={'#1b262c'}/>
            <Text style={styles.seatsText}>
                5 seats
            </Text>
            </View>
            
            {/* description and type */}
            <Text style={styles.title} numberOfLines={2}>
                Jeep Wrangler
            </Text>

            {/* Old price and new price */}
            <View style={styles.prices}>
            <Text style={styles.prefix} >
                UGX
            </Text>
                <Text style={styles.oldPrice} >
                100,000
                </Text>
                <Text style={styles.newPrice} >
                    80,000/day
                </Text>
                
            </View>

            {/* Total price */}
            <Text style={styles.totalPrice}>
                ugx 500,000
            </Text>
        </View>
    )
}

export default PostComponent
