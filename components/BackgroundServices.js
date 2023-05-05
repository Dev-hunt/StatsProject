// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { StyleSheet, Text, View, AppState,Modal,TouchableOpacity,Linking} from 'react-native'
// import React from 'react'
import React, { useState, useEffect } from 'react'
import { NativeModules } from 'react-native';
import BackgroundService from 'react-native-background-actions';
// import OverleyScreen from './OverleyScreen';
// import { FloatingActionMenu } from 'react-native-floating-action-menu';


import Overlay from 'react-native-modal-overlay';

const sleep = (time) => new Promise((resolve) => setTimeout(() => resolve(), time));
let showScreen= false;
// const MyOverlay = () => {
//     return (
//         <Overlay isVisible={true}>
//           <View>
//               <Text>This is my overlay</Text>
//           </View>
//       </Overlay>
//   );
// };

const options = {
    taskName: 'Example',
    taskTitle: 'ExampleTask title',
    taskDesc: 'ExampleTask description',
    taskIcon: {
        name: 'ic_launcher',
        type: 'mipmap',
    },
    color: '#ff00ff',
    linkingURI: 'yourSchemeHere://chat/jane', // See Deep Linking for more info
    parameters: {
        delay: 5000,
    },
};


// const stateTracker=()=>
// {
    

//     useEffect(() => {
//         const appStateHandler = (nextAppState) => {
//             if (nextAppState === 'active') {
//                 const packageName = 'com.whatsapp'; // replace with Instagram's package name
//                 // AppState.getRunningAppProcesses().then((appProcesses) => {
//                     NativeModules.RNAppInfo.getCurrentApp().then((appName) => {
//                         console.log(appName)
//                         const isInstagramRunning = appName === packageName;
//                         // console.log("Whatsapp Chl gyaa")
//                         setShowOverlay(isInstagramRunning);
//                         isInstagramRunning ? console.log("whatsapp ") : ""
//                     });
//             } 
//             // else {
//                 //     setShowOverlay(false);
//                 // }
//       };
//       // setInterval(()=>
//       // {
//           AppState.addEventListener('change', appStateHandler);
          
//           // },1000)
          
//           return () => {
//               AppState.removeEventListener('change', appStateHandler);
//             };
//         }, []);
        
//     }
    
    const BackgroundServices = () => {
        
        const [showOverlay, setShowOverlay] = useState(false);
        const veryIntensiveTask = async (taskDataArguments) => {
            // Example of an infinite loop task
            const { delay } = taskDataArguments;
            console.log("Task started");
            await new Promise( async (resolve) => {
              for (let i = 0; BackgroundService.isRunning(); i++) {
                  // <OverleyScreen/>
                  // stateTracker();
                console.log(i);
                //   useEffect(() => {
                    const appStateHandler = (nextAppState) => {
                        // if (nextAppState === 'active') {
                            const packageName = 'com.whatsapp'; // replace with Instagram's package name
                              // AppState.getRunningAppProcesses().then((appProcesses) => {
                              NativeModules.RNAppInfo.getCurrentApp().then((appName) => {
                                  console.log(appName)
                                  const isInstagramRunning = appName === packageName;
                                  // console.log("Whatsapp Chl gyaa")
                                    setShowOverlay(isInstagramRunning);
                                    isInstagramRunning?Linking.openURL('statsproject://'):"";
                                  showScreen=true;
                                  isInstagramRunning ? console.log("whatsapp ") : ""
                              });
                          // } 
                        };
                        
                        // AppState.addEventListener('change', appStateHandler);
                        
                        appStateHandler();
                
                          // AppState.removeEventListener('change', appStateHandler);
                          // return () => {
                              // };
                  // }, []);
        
        
        
        
        
                  await sleep(delay);
                }
            });  
        };
        
        
        const startBackgroundService = async ()=>
        {
            await BackgroundService.start(veryIntensiveTask, options);
        await BackgroundService.updateNotification({
            taskDesc: 'New ExampleTask description'
        });
        }
        const stopBackgroundService = async ()=>
        {
            await BackgroundService.stop();   
        }

        // if (showScreen===true)
    // {
    //     setShowOverlay(true)
    // }


  return (
    <View>
        <Overlay visible={showOverlay} onClose={()=>setShowOverlay(false)} closeOnTouchOutside>
          <Text style={{color:"black"}}>Some Modal Content</Text>
        </Overlay>
      <Text>BackgroundServices</Text>
      <TouchableOpacity
      onPress={()=>
        {
            startBackgroundService();
            // stateTracker();
        }
      }>
        <Text>Run Service</Text>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={()=>
        {
            stopBackgroundService();
        }
      }>
        <Text>Stop Service</Text>
      </TouchableOpacity>
      {/* <Modal visible={showOverlay} animationType="slide"
                onRequestClose={() => (setShowOverlay(false))}
            >
                
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{color:"black"}}>This is the overlay content</Text>
                    <TouchableOpacity onPress={() => setShowOverlay(false)}>
                        <Text>Close Overlay</Text>
                    </TouchableOpacity>
                </View>
            </Modal> */}

    </View>
  )
}

export default BackgroundServices

const styles = StyleSheet.create({})