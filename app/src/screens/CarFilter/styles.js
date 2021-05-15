import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        height: '100%'
    },
    filterContainer: {
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal: 20,
        paddingVertical:20,
        borderBottomWidth: 0.5,
        borderColor: 'lightgrey'
    },
    buttonContainer: {
        flexDirection:'row',
        alignItems:'center'
        
    },
    filterText: {
            fontWeight:'bold'
    },
    choiceButtons: {
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#3282b8',
        width:30,
        height:30,
        borderRadius: 2,
        borderTopRightRadius:10,
        borderBottomLeftRadius:10,
        justifyContent:'center',
        alignItems:'center',
        overflow:'hidden',
        
        
    },
    choiceButtonsText: {
        color: '#3282b8',
        fontSize: 20,
        
    },
    valueText: {
        paddingHorizontal:15,
        fontSize: 16,
        color: '#3282b8'
    },
    searchButton: { 
        padding: 10,
        backgroundColor: '#3282b8',
        marginVertical: 20,
        marginHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center'
      
    }
});

export default styles;