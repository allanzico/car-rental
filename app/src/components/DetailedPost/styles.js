import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
         
           marginHorizontal: 20,
           marginVertical: 10  ,
           backgroundColor: 'white',
           height: '100%',
              
    },
    bookButton: {
        backgroundColor: '#3282b8',
        padding: 10,
        borderRadius: 5,
        width: '40%',
        height: 50,
        margin:  10,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    priceContainer: {
        width: '40%',
        height: 40,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    footer: {
        flexDirection: 'row',
        height: 120,
        backgroundColor:'white',
        position: 'absolute',
        justifyContent: 'space-between',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: -3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        bottom:0,
        left:0,
        right:0
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