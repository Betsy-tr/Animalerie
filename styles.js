import { StyleSheet} from "react-native"; 

export default  StyleSheet.create({
    container:{
        flex: 1,
    },
    filtre:{
        flex: 1,
        backgroundColor: 'black',
        opacity: 0.6
    },
    logo:{
        fontFamily: 'serif',
        fontSize: 40,
        color: 'white',
        textAlign: 'center',
        marginVertical: 55,
        fontWeight: '800'
    },
    slogan:{
        fontFamily: 'serif',
        fontWeight: '700',
        textAlign: 'center',
        color: '#C6920E',
        fontSize: 30,
        marginVertical: 55
    },
    button:{
        backgroundColor: '#C6920E',
        height: 50,
        width: 350,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 65,
        marginLeft: 15
    }
})