import React, {useEffect, useRef, useState} from 'react'
import { View, Text, StyleSheet, FlatList, useWindowDimensions } from 'react-native'
import MapView,{ Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import PriceMarker from '../../components/PriceMarker/PriceMarker';
import styles from "./styles";
import cars from '../../../assets/data/feed'
import CarouselComponent from '../../components/Carousel/CarouselComponent';


const SearchResultsMap = () => {
    const [selectedCar, setSelectedCar] = useState(null);
    const flatlist = useRef();
    const panMap = useRef();
    const viewConfig = useRef({ itemVisiblePercentThreshold:70 });
    const onViewChanged = useRef(({viewableItems})=>{
        if (viewableItems.length > 0) {
            const viewableCar = viewableItems[0].item;
            setSelectedCar(viewableCar.id)
            
        }
    });
    
    const width = useWindowDimensions().width;

    //Scroll to element
    useEffect(() => {
        if (!selectedCar || !flatlist) {  
            return;
        }
        const index = cars.findIndex(car=>car.id === selectedCar)
        flatlist.current.scrollToIndex({index})
        const scrolledCar = cars[index];
        const region = {
            latitude: scrolledCar.coordinate.latitude,
            longitude: scrolledCar.coordinate.longitude,
            latitudeDelta: 0.8,
            longitudeDelta:0.8
        }
        panMap.current.animateToRegion(region);
    }, [selectedCar])

    return (
        <View style={styles.container}>
            <MapView
                ref={panMap}
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
                        isSelected={car.id === selectedCar}
                        onPress={()=>setSelectedCar(car.id)}
                />
                ))}
                
           
            </MapView>
            <View style={styles.carouselContainer}> 
               <FlatList
               ref={flatlist}
               viewabilityConfig={viewConfig.current}
               onViewableItemsChanged={onViewChanged.current}
               data={cars}
               renderItem={({item}) =>  <CarouselComponent post={item}/>}
               horizontal={true}
               showsHorizontalScrollIndicator={false}
               snapToInterval={width-60}
               snapToAlignment={'center'}
               decelerationRate={'fast'}
               />
            </View>
        </View>
       
       
    )
    
}



export default SearchResultsMap
