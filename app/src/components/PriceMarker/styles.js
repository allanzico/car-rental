import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  
    priceMarker: {
        backgroundColor:'white',
        padding: 5,
        borderRadius: 5,
        padding: 3,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 15,
    },
    selectedPriceMarker: {
        backgroundColor:'#3282b8',
        padding: 5,
        borderRadius: 5,
        padding: 3,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 15,
    },
    priceMarkerText: {
        fontWeight: 'bold',
        color: '#000000',
        fontSize: 20
    },
    selectedPriceMarkerText: {
        fontWeight: 'bold',
        color: '#ffffff',
        fontSize: 20
    }
   });

   export default styles;