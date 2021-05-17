import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: 
    {
        padding:10,  
        height: '100%',
        backgroundColor: '#ffffff'
    },
    textInput: 
    {
        backgroundColor: '#e1e5ea',
        borderRadius: 5,
        padding: 10,
        marginBottom:20
    },
    resultsContainer: 
    {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 0.5,
        borderStyle: 'solid',
        borderColor: 'lightgrey'
    },
    iconContainer: {
           padding: 10,
           borderRadius: 10,
           marginRight: 5,
           backgroundColor: '#eeeeee'

    },
    locationText: {

    }
});

export default styles;