import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 120,
    padding: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },

  innerContainer: {
    flexDirection: 'row',
    
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center'
    
  },

  image: {
    height: '100%',
    aspectRatio: 1,
    resizeMode: 'cover',
  },

  passengersContainer: {
        flexDirection: 'row',
        marginVertical: 2,
        paddingRight: 5
  },
  title: {
    color: '#3282b8',
    fontSize: 14,

  },
  newPrice: {
    fontSize: 14,

}, 
prefix: {
    fontSize: 12,
    marginRight: 2,
    fontWeight: 'bold',
    color: '#000000',
},
  
  prices: {
    marginVertical: 5,
  },
  oldPrice: {
    color: '#5b5b5b',
    textDecorationLine: 'line-through',
  },
  price: {
    fontWeight: 'bold',
  },
  totalPrice: {
    color: '#5b5b5b',
    textDecorationLine: 'underline',
  }
});

export default styles;