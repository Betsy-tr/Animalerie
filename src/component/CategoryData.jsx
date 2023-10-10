import { View, Text, FlatList } from 'react-native'
import React from 'react'
import CategoryItem from './CategoryItem';


const categories = [{id:1 , name:'Chats'},
                    {id:2 , name:'Chiens'},
                    {id:3 , name:'Hamsters'},
                    {id:4 , name:'Poissons'},
                    {id:4 , name:'Souris'},
                    ];

const CategoryData = () => {
  return (
    <View >
      <FlatList 
        data={categories}
        renderItem={({item})=><CategoryItem category={item} /> }
        keyExtractor={item=>item.id}
        horizontal={true}
      
      />

    </View>
  )
}

export default CategoryData