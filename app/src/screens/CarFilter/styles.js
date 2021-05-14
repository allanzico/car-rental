import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
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
        borderColor: '#0f4c75',
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
        color: '#0f4c75',
        fontSize: 20,
        
    },
    valueText: {
        paddingHorizontal:15,
        fontSize: 16,
        color: '#0f4c75'
    }
});

export default styles;