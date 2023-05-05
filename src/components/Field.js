import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const Field = (props) => {
  return (
    <TextInput {...props} style={[styles.email,]} placeholderTextColor={'#110D59'}></TextInput>

  )
}

export default Field ;

const styles = StyleSheet.create({
    email:
    {
        borderRadius:100,
        marginVertical:"3%",
        color:'#110D59',
        paddingHorizontal:8,
        width:"80%",
        height:50,
        backgroundColor:"rgb(220,220,220)",
        alignSelf:"center"    
    }
})