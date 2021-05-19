import React from 'react'
import { View, Text, Image, ScrollView, Pressable, StatusBar} from 'react-native'
import styles from './styles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import NumberFormat from 'react-number-format';



const DetailedPostComponent = (props) => {
  const post = props.post;

    return (
    <View >
        <StatusBar hidden />
        <ScrollView  style={styles.container}>
        <View >
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
        <View style={styles.footer}> 
            <View style={styles.priceContainer}>
                    <Text style={{ textDecorationLine: 'underline', fontSize:20 }} >
                    <NumberFormat
                        value={post.newPrice}
                        displayType={'text'}
                        thousandSeparator={true}
                        renderText={value => <Text>{value}</Text>} 
                    /> /day
                
                    </Text>
            </View>
               
          
            <Pressable
             style={styles.bookButton} 
             onPress={()=>console.warn('Explore clicked')}>
                <Text style={{ color:'#ffffff', fontSize:20 }}>
                    Book
                </Text>
            </Pressable>
        </View>
        </View>

    )
}

export default DetailedPostComponent
