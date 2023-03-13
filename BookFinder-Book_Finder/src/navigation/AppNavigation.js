import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from './Tabs';
import BookContentScreen from '../screens/BookContentScreen';
 

export default function AppNavigator() {

  const Stack = createStackNavigator();

  return(
    <Stack.Navigator>
      <Stack.Screen name='Tabs' component={Tabs} options={{headerShown:false}}/>
      <Stack.Screen name='BookContentScreen' component={BookContentScreen} options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}

