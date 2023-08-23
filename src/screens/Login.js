import { StyleSheet, Text, View , Image, TouchableOpacity , ScrollView} from 'react-native'
import React, { useState } from 'react'
import Field from '../components/Field';

const Login = ({navigation},{props}) => {
  const [user, setUser]=useState({
    Email_Address:"",
    Password:"",

  });
  const [errormsg, setErrormsg] = useState(null);
  const Sendtobackend=()=>{
    console.log(user);
    if (user.Email_Address==''|| user.Password==''){
      setErrormsg('All Fields are Required');
      return;
    }
    else{
      fetch('http://10.0.2.2.:5000/signin',{
        method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify(user)
      })
      .then(res => res.json()).then(
        data =>{
          if(data.error){
            setErrormsg(data.error);
          }
          else{
            alert('Login SuccessFully');
            navigation.navigate('Dashboard');
          }
        }
        

      )
    }

  }
  return (
    <View style={{width:"100%",height:"100%"}}>
    <View style={{}}>
      <Image source={require('../asstes/antiSocial.png')} style={[styles.image,]}/>
      </View>
      <View>
      <Text style={[styles.welcometxt]}>Welcome To DigiDost</Text>
      {/* <Text style={[styles.digidost]}>DigiDost</Text> */}
      <View style={{marginTop:20}}>
      {
        errormsg ? <Text style={[styles.errormessage]}>{errormsg}</Text>:null
      }
      <Field placeholder= "Email / Username" keyboardType={"email-address"}
      onPressIn={()=>setErrormsg(null)}
      onChangeText={(text) => setUser({ ...user, Email_Address:text})}/>
      <Field placeholder="Password" secureTextEntry={true}
      onPressIn={()=>setErrormsg(null)}
      onChangeText={(text) => setUser({ ...user, Password:text})}/>
      </View>
      </View>
      <View style={[styles.fp1,]}>
        <Text style={[styles.fp,]}>Forgot Password ?</Text>
      </View>
      <View >
      <TouchableOpacity 
        // onPress={() => navigation.navigate('Dashboard')}
        onPressIn={()=> Sendtobackend()}
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
    height:140,
    width:140,
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
  },
  errormessage:
  {
    color:'red',
    fontSize: 15,
    textAlign:"center",
    padding: 9,
    borderRadius: 15,
  }

})
















// import { StyleSheet, Text, View , Image, TouchableOpacity} from 'react-native'
// import React from 'react'
// import Field from '../components/Field';

// const Login = ({navigation},{props}) => {
//   return (
//     <View>
//     <View style={{}}>
//       <Image source={require('../asstes/antiSocial.png')} style={[styles.image,]}/>
//       </View>
//       <View>
//       <Text style={[styles.welcometxt]}>Welcome To DigiDost</Text>
//       {/* <Text style={[styles.digidost]}>DigiDost</Text> */}
//       <View style={{marginTop:20}}>
//       <Field placeholder= "Email / Username" keyboardType={"email-address"}/>
//       <Field placeholder="Password" secureTextEntry={true}/>
//       </View>
//       </View>
//       <View style={[styles.fp1,]}>
//         <Text style={[styles.fp,]}>Forgot Password ?</Text>
//       </View>
//       <View >
//       <TouchableOpacity 
//         onPress={() => navigation.navigate('Dashboard')}
//         >
//             <Text style={styles.but}>  Login  </Text>
//       </TouchableOpacity>
//       </View>
//       <View style={{display:'flex', flexDirection:'row',justifyContent:"center"}}>
//         <Text>Don't have an account ?</Text>
//         <TouchableOpacity onPress={()=> navigation.navigate("Signup")}>
//           <Text style={[styles.signup,]}>Signup</Text>
//         </TouchableOpacity>
//       </View>

//     </View>
//   )
// }

// export default Login;

// const styles = StyleSheet.create({
//   image:
//   {
//     height:240,
//     width:240,
//     // alignSelf:"flex-end",
//     marginLeft:160,
//     // marginBottom:730,
//     borderRadius:70,
//     // position:'absolute'
//   },  

//   welcometxt:
//   {
//     fontSize:40,
//     fontWeight:"bold",
//     color:'#110D59',
//     alignSelf:"flex-start",
//     paddingHorizontal:"10%"
//   },
//   digidost:
//   {
//     fontSize:40,
//     fontWeight:"bold",
//     color:'#110D59',
//     paddingHorizontal:70,
//     alignSelf:"flex-start",
//   },
//   fp1:
//   {
//     alignItems:"flex-end",
//     width:"89%",
//     marginBottom:"22%",
//     // marginTop:20,


//   },
//   fp:
//   {
//     fontWeight:"bold",
//     color:'#110D59',
//   },
//   but:
//   {
//       color:"white",
//       textAlign:"center",
//       marginVertical:10,
//       backgroundColor:"#181277",
//       padding:9,
//       paddingLeft:44,
//       paddingRight:44,
//       alignSelf:"center",
//       elevation: 8,
//       borderRadius: 32,
//       fontSize:34,
//   },
//   signup:
//   {
//     fontWeight:'bold',
//     color:'#110D59',
//   }

// })
