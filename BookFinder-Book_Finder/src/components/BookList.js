import { View, StyleSheet, FlatList, SafeAreaView } from 'react-native'
import React from 'react'


export default function BookList (props)  {
  return(
    <SafeAreaView style={{flex:1}}>
        <View style={styles.container}>
                <FlatList 
                  data={props.data}
                  renderItem={props.renderItem}
                  numColumns={3}
                  keyExtractor={(item,index) => index.toString()}
                  showsHorizontalScrollIndicator={false}
                />
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
 
  })
  
  