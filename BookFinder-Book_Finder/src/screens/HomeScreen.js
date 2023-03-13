import { View,StyleSheet,Image } from 'react-native'
import React from 'react'
import Header from '../components/Header'

export default function HomeScreen() {

  return (
    <View style={styles.conatiner}>
        <Header title='Book Finder'/>
        <Image source={require('./../../assets/front-view-stacked-books-ladders-education-day.jpg')} style={styles.img}/>
    </View>
  )
}

const styles = StyleSheet.create({
    conatiner:{
        flex:1,
    },
    img:{
        width:'100%',
        height:'100%',
    },
})
