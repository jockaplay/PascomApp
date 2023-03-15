import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    button: {
        padding: 5, 
        backgroundColor: '#EEE', 
        borderRadius: 7, 
        width: 60, 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        flexDirection: 'row'
    }, 
    separator: {
        height: 20,
    },
    card: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10
    },
    separatorView:{
        height: 10
    }
})

export default Styles;