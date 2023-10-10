import { StyleSheet} from "react-native"; 

export default  StyleSheet.create({
    logo:{
        fontFamily: 'serif',
        fontSize: 35,
        color: '#C6920E',
        marginLeft: 15,
        marginVertical: 20,
        fontWeight: '800',
        textDecorationLine: 'underline'
    },
    container:{
        margin: 10
    },
    categoryItemContainer:{
        margin:10,
        height: 30 ,
        width : 100, 
        alignItems:'center',
        justifyContent:"center",
        borderColor:'#C6920E',
        borderWidth:  1,
        borderRadius:15, 
    },
    categoryItemTitle:{
        fontFamily: 'serif',
        fontWeight: '600',
        fontSize: 15,
        color: 'black'
    },
    cardAnimal:{
        margin: 5,
    },
    cardTitle:{
        fontSize:16,
        color:'#C6920E',
        fontWeight: "700",
        marginTop: 5
    },
})