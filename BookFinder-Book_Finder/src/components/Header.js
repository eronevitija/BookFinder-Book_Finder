import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = (props) => {
    return(
        <View style={styles.container}>
        <Text style={styles.txtTitle}>{props.title}</Text>
        </View>
    )};


const styles = StyleSheet.create({
    txtTitle:{
        backgroundColor:'#393E46',
        color:'white',
        textAlign:'center',
        padding:10,
        fontSize:20
    }
});

export default Header;