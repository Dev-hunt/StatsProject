import { StyleSheet, Text, View , Image, TouchableOpacity,TextInput} from 'react-native'
import React, {useState} from 'react'
import Field from '../components/Field';

const Signup =({navigation},{props}) => {

  const [user, setUser] = useState({
    Name:"",
    Email_Address:"",
    Password:"",
    Confirm_Password:"",
  });

  const [errormsg, setErrormsg] = useState(null);

  const Sendtobackend = () =>{
    //console.log(user);
    if(user.Name == "" ||
    user.Confirm_Password == ''||
    user.Email_Address == ''||
    user.Password == ''){
      setErrormsg('All fields are required');
      return ;
    }
    else{
      if(user.Password != user.Confirm_Password){
        setErrormsg('Password and Confirm Password must be same');
        return;
      }
      else{
        fetch('http://10.0.2.2.:5000/signup',{
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
                alert('account created successfully');
                navigation.navigate('Login');
              }
            }
          )
      }
    }
  }
  return (

    <View>
      <Image source={require('../asstes/antiSocial.png')} style={[styles.image,]}/>
      <Text style={[styles.welcometxt]}>Create a new account </Text>
      {
        errormsg ? <Text style={[styles.errormessage]}>{errormsg}</Text>:null
      }
      <Field 
      placeholder= "Name " 
      onPressIn={()=>setErrormsg(null)}
      onChangeText={(text) => setUser({ ...user, Name:text})
        // console.log(text)
      }
      />
       {/* <TextInput 
        placeholder= "Name " 
        onChangeText={(Text)=>
        {
          console.log(Text)
        }}
       
      /> */}
      <Field placeholder= "Email Address " keyboardType={"email-address"}
      onPressIn={()=>setErrormsg(null)}
      onChangeText={(text) => setUser({ ...user, Email_Address:text})}/>
      <Field placeholder="Password" secureTextEntry={true}
      onPressIn={()=>setErrormsg(null)}
      onChangeText={(text) => setUser({ ...user, Password:text})}/>
      <Field placeholder="Confirm Password" secureTextEntry={true}
      onPressIn={()=>setErrormsg(null)}
      onChangeText={(text) => setUser({ ...user, Confirm_Password:text})}/>

      <TouchableOpacity 
        onPress={() => {
          Sendtobackend();
        }
          
// Anshuuu yha pr code likhnaaaa
  

          // navigation.navigate("Dashboard")
        }
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
    height:140,
    width:140,
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
  errormessage:
  {
    color:'red',
    fontSize: 15,
    textAlign:"center",
    padding: 9,
    borderRadius: 15,
  }
})














// import { StyleSheet, Text, View , Image, TouchableOpacity,} from 'react-native'
// import React from 'react'
// import Field from '../components/Field';

// const Signup =({navigation},{props}) => {
//   return (
//     <View>
//       <Image source={require('../asstes/antiSocial.png')} style={[styles.image,]}/>
//       <Text style={[styles.welcometxt]}>Create a new account </Text>
//       <Field placeholder= "Name " />
//       <Field placeholder= "Email Address " keyboardType={"email-address"}/>
//       <Field placeholder="Password" secureTextEntry={true}/>
//       <Field placeholder="Confirm Password" secureTextEntry={true}/>

//       <TouchableOpacity 
//         onPress={() => navigation.navigate("Dashboard")}
//         >
//             <Text style={styles.but}>  Register </Text>
//       </TouchableOpacity>
//       <View style={{display:'flex', flexDirection:'row',justifyContent:"center"}}>
//         <Text> Already have an account ?</Text>
//         <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
//           <Text style={[styles.signup,]}>Login</Text>
//         </TouchableOpacity>
//       </View>

//     </View>
//   )
// }

// export default Signup;

// const styles = StyleSheet.create({
//   image:
//   {
//     height:240,
//     width:240,
//     // alignSelf:"flex-end",
//     marginLeft:160,
//     borderRadius:80,
//   },  

//   welcometxt:
//   {
//     fontSize:29,
//     fontWeight:"bold",
//     color:'#110D59',
//     alignSelf:"flex-start",
//     paddingHorizontal:"10%"
//   },
// //   digidost:
// //   {
// //     fontSize:40,
// //     fontWeight:"bold",
// //     color:'#110D59',
// //     paddingHorizontal:70,
// //     alignSelf:"flex-start",
// //   },
//   fp1:
//   {
//     alignItems:"flex-end",
//     width:"85%",
//     marginBottom:"20%",


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
//   },

// })
