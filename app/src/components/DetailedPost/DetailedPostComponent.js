import React from 'react'
import { View, Text, Image, ScrollView} from 'react-native'
import styles from './styles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import NumberFormat from 'react-number-format';



const DetailedPostComponent = (props) => {
  const post = props.post;
    return (
        <ScrollView>

        
        <View style={styles.container}>
            {/* image */}
        <Image source={{ uri:post.image }} style={styles.image}/>

            {/* passengers */}
            <View style={styles.passengersContainer}>
                <View style={styles.passengers}>
                    <MaterialCommunityIcons name={'seat-passenger'} size={18} color={'#3282b8'}/>
                    <Text style={styles.passengersText}>
                        {post.passengers}
                    </Text>
            </View>
            <View style={styles.passengersContainer}>
                <View style={styles.passengers}>
                    <MaterialCommunityIcons name={'car-shift-pattern'} size={18} color={'#3282b8'}/>
                    <Text style={styles.passengersText}>
                        {post.gearType}
                    </Text>
                </View>
            </View>
            <View style={styles.passengersContainer}>
                <View style={styles.passengers}>
                <MaterialCommunityIcons name={'car-door'} size={18} color={'#3282b8'}/>
                    <Text style={styles.passengersText}>
                        {post.doors}
                    </Text>
                </View>
            </View> 
            
           
            
            </View>
            
            {/* Title */}
            <Text style={styles.title} numberOfLines={2}>
            {post.title}
            </Text>

            {/* Old price and new price */}
            <View style={styles.prices}>
            <Text style={styles.prefix} >
                UGX
            </Text>
                <Text style={styles.oldPrice} >
                <NumberFormat
                    value={post.oldPrice}
                    displayType={'text'}
                    thousandSeparator={true}
                    renderText={value => <Text>{value}</Text>} 
                />
                
                </Text>
                <Text style={styles.newPrice} >
                <NumberFormat
                    value={post.newPrice}
                    displayType={'text'}
                    thousandSeparator={true}
                    renderText={value => <Text>{value}</Text>} 
                /> /day
               
                </Text>
                
            </View>

            {/* Total price */}
            <View>
            <Text >
            <Text style={styles.prefix} >
                UGX
            </Text> 
            <Text style={styles.totalPrice}>
            <NumberFormat
                    value={post.totalPrice}
                    displayType={'text'}
                    thousandSeparator={true}
                    renderText={value => <Text>{value}</Text>} 
                />
            </Text>

            </Text>
             {/* Description */}
             <Text style={styles.longDescription}>
                 {post.description}
             </Text>
            </View>
            
        </View>
        </ScrollView>
    )
}

export default DetailedPostComponent
