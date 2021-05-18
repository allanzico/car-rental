import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
         
           marginHorizontal: 20,
           marginVertical: 10  ,
           backgroundColor: 'white',
           height: '100%'
              
    },
    image: {
        width: '100%',
       aspectRatio: 3/2,
       resizeMode: 'cover',
       borderRadius: 5,
       marginBottom: 5,
       
    },
    passengersContainer: {
        marginVertical: 5,
        flexDirection: 'row',   
    },
    passengers: {
        marginHorizontal: 5,
        flexDirection: 'row',
        alignItems: "center",
        
    },
    passengersText: {
            fontSize: 14,
            marginHorizontal: 1,
            color: 'grey'
    },
    title: {
        color: '#3282b8',
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
        color: '#3282b8',
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
        fontSize: 16,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        
    },
    longDescription: {
        marginVertical: 5,
        fontSize: 14,
        lineHeight: 24,
      }
   
    
});

export default styles;