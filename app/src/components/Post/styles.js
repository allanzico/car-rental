import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
           margin: 20
    },
    image: {
        width: '100%',
       aspectRatio: 3/2,
       resizeMode: 'cover',
       borderRadius: 10
    },
    seats: {
        marginVertical: 5,
        flexDirection: 'row',
        alignItems: "center"
    },
    seatsText: {
            fontSize: 14,
            marginHorizontal: 5,
            color: 'grey'
    },
    title: {
        color: '#0f4c75',
        fontSize: 18,
        lineHeight: 20,
        letterSpacing: 2,
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
    prefix: {
        fontSize: 12,
        marginRight: 5,
        fontWeight: 'bold',
        color: '#0f4c75',
    },
    prices: {
        flexDirection: 'row',
        alignItems: "center"
    },
    oldPrice: {
        fontSize: 16,
        color: 'grey',
        marginRight: 5,
        textDecorationLine:'line-through', 
    }, 
    newPrice: {
        fontSize: 16,
        fontWeight: 'bold'
    }, 
    totalPrice: {

    },
   
    
});

export default styles;