import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Nothing = (props) => {
    const navigation = useNavigation();
    try{
        const apName = props.route.params.name;
        const icon = props.route.params.appIcon;
        
        
        //   console.log("Hello Bhai startedd")
        console.log("In Nothing : ",apName);
        //   console.log("In Nothing : ",props.route.params.name);
        navigation.navigate('Component1',{name:apName,appIcon:icon});
    }
    catch
    {
        console.log("warning!")
    }
    // return ()

}

export default Nothing

const styles = StyleSheet.create({})