import { StyleSheet, Text, View,Button,
    PermissionsAndroid 
} from 'react-native'
import React from 'react'
import {PERMISSIONS,request,check} from "react-native-permissions";

const Permissions = () => {

    const requestPermission = async()=>
    {
        const grantedd = await check(PermissionsAndroid.PERMISSIONS.CAMERA);
        console.log(grantedd)
        if (grantedd==='granted'){
            console.log("Permission already Granted");
            return;
        }
        else{
            console.log("Permission Not Granted!");
        }


        try {
                  const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.CAMERA,
                    {
                      title: 'Cool Photo App Camera Permission',
                      message:
                        'Cool Photo App needs access to your camera ' +
                        'so you can take awesome pictures.',
                      buttonNeutral: 'Ask Me Later',
                      buttonNegative: 'Cancel',
                      buttonPositive: 'OK',
                    },
                  );
                  if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    console.log('You can use the camera');
                  } else {
                    console.log('Camera permission denied');
                  }
                } catch (err) {
                  console.warn(err);
                }

    }

    const requestUsage= async () =>
    {
        const grantedd = await check(PermissionsAndroid.PERMISSIONS.PACKAGE_USAGE_STATS);
        console.log(grantedd);
        if (grantedd==='granted'){
            console.log("Permission already Granted");
            return;
        }
        else{
            console.log("Permission Not Granted!");
        }

        // try {
        //     const granted = await PermissionsAndroid.request(
        //       PermissionsAndroid.PERMISSIONS.PACKAGE_USAGE_STATS,
        //       {
        //         title: 'Usage Stats Permission',
        //         message:
        //           'This app needs access to your usage statistics ' +
        //           'to provide personalized recommendations.',
        //         buttonNeutral: 'Ask Me Later',
        //         buttonNegative: 'Cancel',
        //         buttonPositive: 'OK',
        //       },
        //     );
        //     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        //       console.log('Usage stats permission granted');
        //     } else {
        //       console.log('Usage stats permission denied');
        //     }
        //   } catch (err) {
        //     console.warn(err);
        //   }
        
    }




  return (
    
    <Button title='Take Camera Permission'
    onPress={()=>
        {
            // requestPermission();
            requestUsage();
        }
    }></Button>
    
  )
}

export default Permissions

const styles = StyleSheet.create({})