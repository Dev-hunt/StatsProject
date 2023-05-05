import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppLists from '../../components/AppLists'

const Component2=(prop)=> {
  

  return (
    <View style={styles.container}>
      <View style={[styles.uppr,{flex:1}]}>
      <View>

        <View style={{flexDirection:"row",
        // justifyContent:"center",
        alignItems:"center"}}>
        {/* <Text style={{color:"white",fontSize:24,marginHorizontal:12,fontWeight:"bold",marginVertical:8}}>Back</Text> */}
        <Text style={{color:"white",fontSize:28,marginHorizontal:20,
        fontWeight:"bold",marginVertical:25,justifyContent:"center",alignItems:"center"}}>{prop.route.params.slideName}</Text>
        </View>
        {/* <Text>Hello</Text> */}
        {/* {console.log(slideName)} */}
        {/* {console.log(propName)} */}
        {/* {console.log(prop.route.params.slideName)} */}
        {/* {console.log()} */}

      </View>
      </View>
      <View style={{flex:6}}>
      <View style={[styles.sec,{flex:1}]}></View>
      <View style={[styles.end,{flex:4}]}>
      <AppLists/>

      </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:
    {
        height:"100%",
        width:"100%",
        backgroundColor:"white"
    },

    uppr:
    {
        width: "100%",
        backgroundColor:"#144E76",
        borderBottomLeftRadius:70,
        
    
    },
    sec:
    {
        width: "100%",
        backgroundColor:"#144E76",
        
    
    },
    end:
    {
        width:"100%",
        height:"100%",
        backgroundColor:"white",
        borderTopEndRadius:70,
        position:"absolute",

    }

})
export default Component2;