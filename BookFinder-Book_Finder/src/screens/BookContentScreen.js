import { View, Text, Image, Button, StyleSheet,  SafeAreaView } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useRoute } from '@react-navigation/native';


export default function BookContentScreen({navigation}) {

  const route = useRoute();
  const {item} = route.params;

  return (
    <SafeAreaView style={{flex:1}}>
      <View style={styles.container}>
        <Image source={{uri:item.image_url}} style={styles.img}/>
        <Text style={styles.bookTitle}>Title: {item.title}</Text>
        <Text style={styles.bookTitle}>Authors: {item.authors}</Text>
        <Text style={styles.bookTitle}>Genres: {item.genres}</Text>
        <Text style={{width:'50%',padding:5}}>Description: {item.description}</Text>
        <Text style={styles.bookTitle}>Edition: {item.edition}</Text>
        <Text style={styles.bookTitle}>Format: {item.format}</Text>
        <Button title='Go back' color={'red'} onPress={()=>navigation.goBack()}/>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
   container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
   },
   bookInfo:{
    padding:10,
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    margin:1,
    marginLeft:10,
    marginTop:5
   },
   bookTitle:{
     color: 'black',
     marginTop:5,
     padding:5,
   },
   img:{
     width:200,
     height:250,
     borderRadius:40
   },
})

