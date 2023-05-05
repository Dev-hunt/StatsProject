import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Faltu = () => {
    const navigation =useNavigation();
  return (
    <View>
      <Text>Faltu</Text>
      <TouchableOpacity
      onPress={()=>navigation.navigate('Home')}>
        <Text>Main App</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Faltu

const styles = StyleSheet.create({})