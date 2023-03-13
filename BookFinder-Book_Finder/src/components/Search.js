import { View,  StyleSheet, TextInput } from 'react-native'
import React from 'react';


export default function Search(props) {

  return (
    <View style={styles.container}>
        <TextInput
        style={styles.txtInput} 
        placeholder='Search a book' 
        value={props.search} 
        onChangeText={ (newText) => props.setSearch(newText)}
        />            
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      marginTop:30
    },
    txtInput:{
      padding:7,
      borderWidth:1,
      borderRadius:10,
      width:300,
      backgroundColor:'#fff',
      color:'#000',
      margin:5,
    },
});


