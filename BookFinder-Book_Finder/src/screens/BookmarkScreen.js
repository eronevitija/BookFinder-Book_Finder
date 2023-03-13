import { View, Text, StyleSheet,Image, Button } from 'react-native'
import React from 'react'
import { useAppContext } from '../../context/AppContext';

export default function BookmarkScreen() {

const {bookmark, addToBookmark, removeFromBookmark} = useAppContext();
  
  
  const bookmarkCheck = (id) => {
    const check = bookmark.some((book)=>book.id === id);
    return check;
  }


  return (
       <View style={styles.container}>
        {
           bookmark.map((book,index)=>(
            <View style={styles.bookInfo} key={index}>
              <Image source={{uri:book.image_url}} style={styles.img}/>
              <Text style={styles.bookTitle}><b>Title: </b>{book.title}</Text> 
              <Text style={styles.bookTitle}><b>Author: </b>{book.authors}</Text>
              <Text style={styles.bookTitle}><b>Genres: </b>{book.genres}</Text>
              <View>
              {
                bookmarkCheck(book.id) ? 
                ( <Button onPress={()=>removeFromBookmark(book)} title='Remove from bookmark' color={'red'}/> ) : 
                ( <Button onPress={()=>addToBookmark(book)} title='Add to bookmark' color={'red'}/> )
              }
            </View>
            </View>
          )) 
        }
      </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    flexWrap:'wrap'
  },
  bookInfo:{
      alignItems:'center',
      justifyContent:'center',
      flexWrap:'wrap'
      
    },
   bookTitle:{
     color: 'black',
     marginTop:5,
   },
   img:{
     width:200,
     height:250,
     borderRadius:40
   },
})

