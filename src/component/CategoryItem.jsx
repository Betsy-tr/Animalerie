import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import stylesPage from '../../stylesPage'


const CategoryItem = ({category}) => {
  return (
            <TouchableOpacity style={stylesPage.categoryItemContainer}>
                <Text style={stylesPage.categoryItemTitle}>{category.name}</Text>
            </TouchableOpacity>

 
  )
}

export default CategoryItem