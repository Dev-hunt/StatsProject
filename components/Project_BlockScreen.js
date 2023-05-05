import { ImageBackground, StyleSheet, Text, View ,Image, TouchableOpacity,BackHandler} from 'react-native'
import React,{useState,useEffect} from 'react';


const Project_BlockScreen = ({navigation}) => {

    useEffect(() => {
        const backAction = () => {
          // Use the BackHandler API to exit the app
        //   BackHandler.exitApp();
          return true;
        };
        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            backAction
          );
          return () => backHandler.remove();
        }, []);



  return (
    <View>
    <Image source={require("../src/asstes/UnlockScreen1.png") }style={[styles.imagebg,]}/>
    <Text style={[styles.Digidost]}>DigiDost</Text>

    <TouchableOpacity
        onPress={() => {
            BackHandler.exitApp();
            BackHandler.exitApp();
            BackHandler.exitApp();
            BackHandler.exitApp();
            return true
        }}
        >
    <Text style={[styles.Exit]}>Exit</Text>
        
    </TouchableOpacity>
    {/* <TouchableOpacity
        // onPress={() => navigation.navigate('')}
        >  
    <Text style={[styles.Continue]}>Continue</Text>    
    </TouchableOpacity> */}

    </View>
  )
}

export default Project_BlockScreen;

const styles = StyleSheet.create({
    imagebg:
{
    height:"100%",
    width:"100%",
    position:'relative'
},
Digidost:
{
    position:"absolute",
    color:"white",
    // alignSelf:"center",
    top:43,
    marginLeft:135,
    fontSize:30,
    fontWeight:'bold'
},
Exit:
{
    position:"absolute",
    color:"white",
    fontSize:25,
    fontWeight:'bold',
    bottom:100,
    alignSelf:"center",

},
Continue:
{
    position:"absolute",
    color:"white",
    fontSize:10,
    fontWeight:'bold',
    bottom:70,
    alignSelf:"center",
}

})