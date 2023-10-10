import { View, Text } from 'react-native'
import React from 'react'
import { Card } from 'react-native-paper'
import stylesPage from '../../stylesPage'


const CardAnimal = ({animal}) => {
  return (
    <Card style={stylesPage.cardAnimal}>
        <Card.Cover source={{ uri: animal?.image }} />
        <Card.Content>
            <Text style={stylesPage.cardTitle}>{animal?.name}</Text>
            <Text>{animal?.description}</Text>
            <Text>{animal?.prix} €</Text>
        </Card.Content>
    </Card>
  )
}

export default CardAnimal