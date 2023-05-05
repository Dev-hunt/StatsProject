import { StyleSheet, Text, View , Image, TouchableOpacity} from 'react-native'
import React from 'react'
import Field from '../components/Field';

const Login = ({navigation},{props}) => {
  return (
    <View>
    <View style={{}}>
      <Image source={require('../asstes/antiSocial.png')} style={[styles.image,]}/>
      </View>
      <View>
      <Text style={[styles.welcometxt]}>Welcome To DigiDost</Text>
      {/* <Text style={[styles.digidost]}>DigiDost</Text> */}
      <View style={{marginTop:20}}>
      <Field placeholder= "Email / Username" keyboardType={"email-address"}/>
      <Field placeholder="Password" secureTextEntry={true}/>
      </View>
      </View>
      <View style={[styles.fp1,]}>
        <Text style={[styles.fp,]}>Forgot Password ?</Text>
      </View>
      <View >
      <TouchableOpacity 
        onPress={() => navigation.navigate('Dashboard')}
        >
            <Text style={styles.but}>  Login  </Text>
      </TouchableOpacity>
      </View>
      <View style={{display:'flex', flexDirection:'row',justifyContent:"center"}}>
        <Text>Don't have an account ?</Text>
        <TouchableOpacity onPress={()=> navigation.navigate("Signup")}>
          <Text style={[styles.signup,]}>Signup</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default Login;

const styles = StyleSheet.create({
  image:
  {
    height:240,
    width:240,
    // alignSelf:"flex-end",
    marginLeft:160,
    // marginBottom:730,
    borderRadius:70,
    // position:'absolute'
  },  

  welcometxt:
  {
    fontSize:40,
    fontWeight:"bold",
    color:'#110D59',
    alignSelf:"flex-start",
    paddingHorizontal:"10%"
  },
  digidost:
  {
    fontSize:40,
    fontWeight:"bold",
    color:'#110D59',
    paddingHorizontal:70,
    alignSelf:"flex-start",
  },
  fp1:
  {
    alignItems:"flex-end",
    width:"89%",
    marginBottom:"22%",
    // marginTop:20,


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
  }

})
