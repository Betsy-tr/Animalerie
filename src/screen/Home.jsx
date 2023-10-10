import { View, Text , ImageBackground , TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../../styles'
import { Button } from 'react-native-paper'

const Home = ({navigation}) => {

    const accueil = () => { 

        navigation.navigate('Page')
    
    }

  return (
    <ImageBackground
        style={styles.container}
        source={{uri : 'https://th.bing.com/th/id/R.f181deef8469ff3d86aa6605592c21b9?rik=W%2b3PhPebgytVrA&riu=http%3a%2f%2fwww.chien-bonheur.fr%2fwp-content%2fuploads%2f2017%2f03%2fpetit-chien-chiot-mignon-images-photos-gratuites.jpg&ehk=fODDKY2dMIKS2R2OY%2fi6T4Ur5pZpHvqMuTIzIpwH0a8%3d&risl=&pid=ImgRaw&r=0'}}
    >
        <View style={styles.filtre}>
        <View>
            <Text style={styles.logo}>Animals World</Text>
            <Text style={styles.slogan}>Envie d'avoir une compagnie, mais tu as du mal à choisir. Tu es au bon endroit, nous te garantissons que tu trouveras ton bonheur</Text>
            <Button onPress={accueil} style={styles.button} labelStyle={{color: 'white' , fontSize: 20}}>EXPLORER</Button>
        </View>
        
        </View>
    </ImageBackground>
  )
}

export default Home