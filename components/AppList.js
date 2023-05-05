import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, PermissionsAndroid, Button, ScrollView, Image } from "react-native";
import RNInstalledApplication from 'react-native-installed-application';
// import RNReactNativeUsageStatsManager from 'react-native-usage-stats-manager';
// import {request, PERMISSIONS} from 'react-native-permissions';

// request(Platform.OS === 'ios' ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA).then((result) => {
//     setPermissionResult(result)
//     console.log(result)
//   });

// const requestCameraPermission = async () => {
//     try {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.CAMERA,
//         {
//           title: 'Cool Photo App Camera Permission',
//           message:
//             'Cool Photo App needs access to your camera ' +
//             'so you can take awesome pictures.',
//           buttonNeutral: 'Ask Me Later',
//           buttonNegative: 'Cancel',
//           buttonPositive: 'OK',
//         },
//       );
//       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//         console.log('You can use the camera');
//       } else {
//         console.log('Camera permission denied');
//       }
//     } catch (err) {
//       console.warn(err);
//     }
//   };


const items = ["Gaurav", "Karan", "Ajay", "Madhur"];
let appsNameee = [];
let appsIcon = [];
let a = 5;

const AppList = () => {
    const [apps, setApps] = useState([]);

    const [data, setData] = useState([]);
    const [selected, setSelected] = useState(false);
    // setSelected(false);
    let i = 0
    // RNReactNativeUsageStatsManager;

    //     RNReactNativeUsageStatsManager.getUsageStats(UsageStats.INTERVAL_MONTHLY, Date.now() - 86400000, Date.now())
    //   .then(stats => {
    //     console.log(stats);
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });

    useEffect(() => {
        RNInstalledApplication.getNonSystemApps()
            .then(apps => {
                setApps(apps);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    // const getApplication = () => {
    //     RNInstalledApplication.getNonSystemApps().then((apps) => {
    //             setData(apps)
    //             a = 4;

    //             appsNameee=apps.map((app) => {
    //                  return app.appName;
    //             }
    //             )
    //             appsIcon=apps.map((app) => {
    //                  return app.icon;
    //             })
    //             console.log(`First :${a}`);
    //             // console.log(appsNameee);
    //             // console.log(appsName[59]);
    //             setSelected(true);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    //     }
    // // getApplication();
    console.log(`Second :${a}`);

    // console.log(appsNameee);
    // const looping = () => {
    //     // console.log("Hehehe")
    //     // if (selected)
    //     {
    //         for (let i = 0; i < 3; i++) {
    //             console.log("heieehihfhif");
    //             console.log(`App  : ${appsName[0]}`);
    //             // <Text>App {i+1} : {appsName[i]}</Text>
    //         }
    //     }
    // }



    return (
        <ScrollView style={{ marginVertical: 80, marginHorizontal: 20 }}>
            <TouchableOpacity onPress={() => {

                console.log("Hii");
                // getApplication();
                // selected ? {
                //     const renderList = appsName.map((item, index) =>
                //         <text key={index}>{item}</text>)
                // } : "";

                //   console.log(getApplication());
            }
            }>
                <Text>Touch Me</Text>

                {/* <Text>{console.log(getApplication())}</Text> */}
                {/* {selected?apps.map(app => (
    <Text >{app.appName}</Text>
    
  )):""} */}
                {/* {selected? for (let i=0;i<appsName.length;i++)
  {
    <Text>App{i+1} : appsName[i]</Text>
  }:""} */}
            </TouchableOpacity>
            {/* {selected?<Text>{appsName}</Text>:""}
            <FlatList data={appsName} renderItem={(element)=>{
        return(<Text style={[styles.txt,{marginTop:20}]}> App Name :  {element.item.name}  </Text>);
    }}>
    </FlatList> */}
            {/* 
    <View style={styles.container}>
    <Text style={styles.item}>Try permissions</Text>
    <Button title="request permissions" onPress={requestCameraPermission} /> */}
            {/* </View> */}
            {/* {
        setTimeout(()=>{
            for(let i=0;i<appsName.length;i++)
            {
                <Text>App {i+1} : {appsName[i]}</Text>
            }
        },3000)
    } */}
            <TouchableOpacity onPress={() => {
                // <Text> Hiii</Text>;
                appsNameee.map((item, index) => {
                    console.log(`App ${index}: ${item}`)
                    // <Text>App: {item}</Text>
                });
                // console.log("hiii");
                // console.log(`Get data: ${appsNameee}`);
            }
            }><Text>Get the dataa</Text></TouchableOpacity>
            {/* {selected?<Text>appsNameee</Text>:""} */}
            {/* {selected?<Image source={require("")}></Image>:""} */}

            {/* <Image source={{ uri: `data:image/png;base64,${apps.Icon}` }} /> */}

            {selected ? appsNameee.map((item, index) => <Text>App{index} :{item}</Text>) : ""}
            {/* <Text>Hello duniyaa waloo {a}</Text> */}
            <ScrollView>
                {apps.map(app => (
                    <View style={{flexDirection:"row"}}>
                <Image source={{uri:`data:image/png;base64,${app.icon}`}} style={{height:25,width:25}} />
                <Text>{app.appName}</Text>
                    {/* <Text key={app.packageName}>App : {app.appName}</Text> */}
                </View>



                ))}
            </ScrollView>

        </ScrollView>

    );
};
{/* <Text key={app.packageName}>{app.appName}</Text> */ }

export default AppList;

const styles = StyleSheet.create({
    txt:
    {
        color: "white",
        fontSize: 15,
    },
})