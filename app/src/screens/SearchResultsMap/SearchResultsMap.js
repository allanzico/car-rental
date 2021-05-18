import React, {useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MapView,{ Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import PriceMarker from '../../components/PriceMarker/PriceMarker';
import styles from "./styles";
import cars from '../../../assets/data/feed'
import CarouselComponent from '../../components/Carousel/CarouselComponent';


const SearchResultsMap = () => {
    const [selectdPlace, setSelectedPlace] = useState(null)
    return (
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE} 
                style={styles.map}
                initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
                
                }}
            >
                {cars.map(car=>
                (
                    <PriceMarker 
                        coordinate={car.coordinate} 
                        price={car.newPrice} 
                        isSelected={car.id === selectdPlace}
                        onPress={()=>setSelectedPlace(car.id)}
                />
                ))}
                
           
            </MapView>
            <View style={styles.carouselContainer}> 
                <CarouselComponent post={cars[0]}/>
            </View>
        </View>
       
       
    )
    
}



export default SearchResultsMap
