import { StyleSheet, Text, TextInput, View,Button } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';

const AppSetting = (props) => {
    const navigation = useNavigation();

    const packageName = props.route.params.pkgName;
    const apName = props.route.params.appName;
    const icon = props.route.params.appIcon;


    const [time,setTime]=useState(0);
    const handleButton=()=>
    {

        console.log("Inside app Setting : ",packageName);
        console.log("Inside App Setting: ",apName)
        // console.log("Inside App Setting",icon)

        navigation.navigate("Service",{ name:apName,appIcon:icon,remind:time, pkggName:packageName })
        
    }


  return (
    <View>
      <Text style={{color:"black"}}>AppSetting</Text>
      <TextInput
      style={styles.timeField}
      placeholder="Enter Time"
      onChangeText={(time) => {
            setTime(time);
          }}
      >
      </TextInput>
    <Button title='Press Ok'
    onPress={()=>
    handleButton()}
    ></Button>
      {/* {console.log(time)} */}
    </View>
  )
}

export default AppSetting

const styles = StyleSheet.create({
    timeField:
    {
      // padding:10,
      backgroundColor: "rgb(220,220,220)",
      margin: 10,
      alignSelf:"center",
    //   marginLeft: 16,
      borderRadius: 8,
      paddingHorizontal: 10,
      paddingVertical: 14,
      marginVertical: 44,
      width: "41.5%",
      // alignSelf: "center",
      fontSize: 18,
      color:"black",
    }
})