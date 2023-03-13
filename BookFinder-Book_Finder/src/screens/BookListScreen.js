import React, {useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, Alert, Button, TouchableOpacity } from 'react-native'
import axios from 'axios'
import Search from '../components/Search'
import BookList from '../components/BookList'
import { useAppContext } from '../../context/AppContext'

export default function BookListScreen({navigation}) {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const url = `https://example-data.draftbit.com/books?q=${search}`
  
  const {bookmark, addToBookmark,removeFromBookmark} = useAppContext();


  const bookmarkCheck = (id) => {
    const check = bookmark.some((book)=>book.id === id);
    return check
  }

  useEffect(()=> {
    if(search.length > 0) {
    axios.get(url)
    .then((re)=> {
      setData(re.data)
    })
    .catch((error)=> {
      Alert.alert('Failed to get books', error)
    })
    .finally(() => setLoading(false));
  }
  },[search])


  const renderItem = ({item}) => {
    return(
        <View style={styles.container}>
          <View style={styles.bookInfo}>  
            <TouchableOpacity onPress={()=>navigation.navigate('BookContentScreen',{item:item})}>
            <Image source={{uri:item.image_url}} style={styles.img}/>
            </TouchableOpacity>
            <Text style={styles.bookTitle}><b>Title: </b>{item.title}</Text> 
            <Text style={styles.bookTitle}><b>Author: </b>{item.authors}</Text>
            <Text style={styles.bookTitle}><b>Genres: </b>{item.genres}</Text>
            <View>
              {
                bookmarkCheck(item.id) ? 
                ( <Button onPress={()=>removeFromBookmark(item)} title='Remove from bookmark' color={'red'}/> ) : 
                ( <Button onPress={()=>addToBookmark(item)} title='Add to bookmark' color={'red'}/> )
              }
            </View>
          </View>           
        </View>
    )
  }
  return (
    <View style={styles.container}>
      <Search search={search} setSearch={setSearch} /> 
      <BookList loading={loading} data={data} renderItem={renderItem} />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
   },
   bookInfo:{
    marginTop:20,
    padding:10,
    margin:1,
    marginLeft:10,
    justifyContent:'center',
    alignItems:'center',
   },
   bookTitle:{
     color: 'black',
     marginTop:5
   },
   img:{
     width:200,
     height:250,
     borderRadius:40
   },
})

