import { StyleSheet, Text, View , Image, TouchableOpacity,} from 'react-native'
import React from 'react'
import Field from '../components/Field';

const Signup =({navigation},{props}) => {
  return (
    <View>
      <Image source={require('../asstes/antiSocial.png')} style={[styles.image,]}/>
      <Text style={[styles.welcometxt]}>Create a new account </Text>
      <Field placeholder= "Name " />
      <Field placeholder= "Email Address " keyboardType={"email-address"}/>
      <Field placeholder="Password" secureTextEntry={true}/>
      <Field placeholder="Confirm Password" secureTextEntry={true}/>

      <TouchableOpacity 
        onPress={() => navigation.navigate("Dashboard")}
        >
            <Text style={styles.but}>  Register </Text>
      </TouchableOpacity>
      <View style={{display:'flex', flexDirection:'row',justifyContent:"center"}}>
        <Text> Already have an account ?</Text>
        <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
          <Text style={[styles.signup,]}>Login</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default Signup;

const styles = StyleSheet.create({
  image:
  {
    height:240,
    width:240,
    // alignSelf:"flex-end",
    marginLeft:160,
    borderRadius:80,
  },  

  welcometxt:
  {
    fontSize:29,
    fontWeight:"bold",
    color:'#110D59',
    alignSelf:"flex-start",
    paddingHorizontal:"10%"
  },
//   digidost:
//   {
//     fontSize:40,
//     fontWeight:"bold",
//     color:'#110D59',
//     paddingHorizontal:70,
//     alignSelf:"flex-start",
//   },
  fp1:
  {
    alignItems:"flex-end",
    width:"85%",
    marginBottom:"20%",


  },
  fp:
  {
    fontWeight:"bold",
    color:'#110D59',
  },
  but:
  {
      color:"white",
      textAlign:"center",
      marginVertical:10,
      backgroundColor:"#181277",
      padding:9,
      paddingLeft:44,
      paddingRight:44,
      alignSelf:"center",
      elevation: 8,
      borderRadius: 32,
      fontSize:34,
  },
  signup:
  {
    fontWeight:'bold',
    color:'#110D59',
  },

})
