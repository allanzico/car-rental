import { StyleSheet,Dimensions } from "react-native";

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#3282b8',
    },
    subContainer: {
            height:'45%',
            justifyContent:'space-between',
           alignItems:'center',
           top:50
    },
   
    filterMainContainer: {
        width:Dimensions.get('screen').width- 40,
        borderRadius: 5,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: -3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 3,
 
    },
    filterContainer: {
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal: 20,
        paddingVertical:20,
        borderBottomWidth: 0.8,
        borderColor: 'lightgrey',

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
        position: 'absolute',
        alignItems: 'center',
        bottom: 30
      
    },
    descriptionButton: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 3,
        flexDirection: "row",
        alignItems: 'center',
        marginHorizontal: 20,
        width:Dimensions.get('screen').width- 40,
        top: 20,
        zIndex: 100,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: -3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 3,
    },
    descriptionButtonText: {
        color: '#1b262c',
        fontSize: 16,
    },
    calenderButton: {
        backgroundColor: '#3282b8',
        padding: 10,
        borderRadius: 5,
        width: '40%',
        height: 40,
        margin:  10,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    skipContainer: {
        width: '40%',
        height: 40,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        flexDirection: 'row',
        borderRadius:5,
        height: 80,
        backgroundColor:'white',
        position: 'absolute',
        justifyContent: 'space-between',
        alignItems:'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: -3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 3,
        bottom:20,
        left:20,
        right:20
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: 'rgba(0,0,0, .6)',
      
    },
    modalView: {
        flex:1,
        backgroundColor:'white',
        borderRadius: 20,
        margin: 20,
        padding: 20,
        alignItems: 'center'
    }
});

export default styles;