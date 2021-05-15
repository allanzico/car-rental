import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 500,
        resizeMode: "cover",
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 60,
        fontWeight: "bold",
        color:'#3282b8',
    },
    button: {
        backgroundColor: '#3282b8',
        padding: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    exploreButtonText: {
            color: '#ffffff',
            fontWeight: 'bold'
    },
    searchButton: {
        backgroundColor: '#ffffff',
        padding: 10,
        borderRadius: 3,
        flexDirection: "row",
        alignItems: 'center',
        position: 'absolute',
        marginHorizontal: 20,
        width:Dimensions.get('screen').width- 40,
        top: 20,
        zIndex: 100,
        elevation: 1
    },
    searchButtonText: {
        color: '#1b262c',
        fontSize: 16,
    }
});

export default styles;