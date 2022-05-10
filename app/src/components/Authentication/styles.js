import { StyleSheet, Dimensions } from "react-native";
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        height: '100%',
        justifyContent: 'center',
        width: windowWidth,
        padding: 20
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderColor:'lightgray',
        marginBottom: 2,
        borderRadius: 5,
        padding: 10
       
    },
    label: {
        marginBottom: 5
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        textTransform:'uppercase',
        fontWeight:'600'
    },
    button: {
            backgroundColor:'#3282b8',
            height: 40,
            borderRadius: 5,
            justifyContent: 'center'
    },
    buttonText: {
        textTransform: 'uppercase',
        color: 'white',
        textAlign:'center'
    },
    links: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10
    },
    linksText: {
        color: '#3282b8'
    },
    error: {
        color:'red',
        paddingBottom: 10,
        marginLeft:5
    }
})

export default styles