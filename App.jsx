import { View, Text } from 'react-native'
import React from 'react'
import Home from './src/screen/Home'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Page from './src/screen/Page'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='Page' component={Page}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App