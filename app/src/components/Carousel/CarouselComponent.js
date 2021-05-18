import React from 'react'
import { View, Text, Image, useWindowDimensions} from 'react-native'
import styles from './styles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import NumberFormat from 'react-number-format';

const CarouselComponent = (props) => {
    const post = props.post;
    const width = useWindowDimensions().width;
    return (
    <View style={[styles.container, { width: width - 60}]}>
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
    </View>
    // <View style={[styles.container, {width: width-60}]}>
    //     <View style={styles.innerContainer}>
    //         {/* image */}
    //     <Image source={{ uri:post.image }} style={styles.image}/>

    //         {/* passengers */}
    //         <View style={styles.passengersContainer}>
    //             <View style={styles.passengers}>
    //                 <MaterialCommunityIcons name={'seat-passenger'} size={18} color={'#3282b8'}/>
    //                 <Text style={styles.passengersText}>
    //                     {post.passengers}
    //                 </Text>
    //             </View>
    //         <View style={styles.passengersContainer}>
    //             <View style={styles.passengers}>
    //                 <MaterialCommunityIcons name={'car-shift-pattern'} size={18} color={'#3282b8'}/>
    //                 <Text style={styles.passengersText}>
    //                     {post.gearType}
    //                 </Text>
    //             </View>
    //         </View>
    //         <View style={styles.passengersContainer}>
    //             <View style={styles.passengers}>
    //             <MaterialCommunityIcons name={'car-door'} size={18} color={'#3282b8'}/>
    //                 <Text style={styles.passengersText}>
    //                     {post.doors}
    //                 </Text>
    //             </View>
    //         </View> 
    //         </View>
            
    //         {/* description and type */}
    //         <Text style={styles.title} numberOfLines={2}>
    //         {post.title}
    //         </Text>

    //         {/* Old price and new price */}
    //         <View style={styles.prices}>
   
    //             <Text style={styles.newPrice} >
    
               
    //             </Text>
                
    //         </View>
    //         </View>
    //     </View>
    )
}

export default CarouselComponent
