import { View, Text , FlatList } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper'
import stylesPage from '../../stylesPage'
import CategoryData from '../component/CategoryData'
import { dataAnimals } from '../redux/data'
import CardAnimal from '../component/CardAnimal'

const Page = () => {


  return (
    <View>
      <Text style={stylesPage.logo}>Animals World</Text>
      <TextInput
        label='Recherche'
        style={{marginVertical: 10 , fontFamily: 'serif', width: '90%' , marginLeft: 15 , backgroundColor: 'white'}}
      />
      <CategoryData/>

        <View>
            <FlatList
                data={dataAnimals}
                renderItem={({item})=><CardAnimal animal={item}/>}
                keyExtractor={item => item.id}
                numColumns={1}
            />
        </View>
      
    </View>
  )
}

export default Page