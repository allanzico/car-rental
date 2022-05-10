import React from 'react'
import { View, Text } from 'react-native'
import styles from "./styles";
import { Marker } from 'react-native-maps';

const PriceMarker = (props) => {
    const {coordinate, price, onPress, isSelected} = props;
    return (
        <Marker coordinate={coordinate} onPress={onPress}>   
            <View style={isSelected ? styles.selectedPriceMarker : styles.priceMarker}> 
                <Text style={isSelected ? styles.selectedPriceMarkerText: styles.priceMarkerText}>
                  {price}
                </Text>
            </View>
        </Marker>
    )
}

export default PriceMarker
