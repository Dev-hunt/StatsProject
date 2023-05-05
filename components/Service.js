import { StyleSheet, Text, View, AppState,Modal,TouchableOpacity,Linking} from 'react-native';
import React, { useState, useEffect } from 'react'
import { NativeModules } from 'react-native';
import BackgroundService from 'react-native-background-actions';
import { useNavigation } from '@react-navigation/native'
const sleep = (time) => new Promise((resolve) => setTimeout(() => resolve(), time));
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


const Service = (props) => {

    const navigation = useNavigation();
    // try{
        const apName = props.route.params.name;
        const pakagName =props.route.params.pkggName;
        const icon = props.route.params.appIcon;
        const time_remind =props.route.params.remind;
        
        
        //   console.log("Hello Bhai startedd")
        console.log("In Service : ",pakagName);
        // console.log("In Service : ",time_remind);
        //   console.log("In Nothing : ",props.route.params.name);
        // }
        // catch
    // {
        // console.log("warning!")
        // }
    // return ()


    

    
    const [showOverlay, setShowOverlay] = useState(false);
    const veryIntensiveTask = async (taskDataArguments) => {
        // Example of an infinite loop task
        const { delay } = taskDataArguments;
        console.log("Task started");
        await new Promise( async (resolve) => {
            let count =0;
            for (let i = 0; BackgroundService.isRunning(); i++) {
              // <OverleyScreen/>
              // stateTracker();
              console.log(i);
              //   useEffect(() => {
                  const appStateHandler = (nextAppState) => {
                      // if (nextAppState === 'active') {
                        const packageName = pakagName; // replace with Instagram's package name
                        // AppState.getRunningAppProcesses().then((appProcesses) => {
                            NativeModules.RNAppInfo.getCurrentApp().then((appName) => {
                                console.log(appName)
                                console.log("In::::",packageName)
                              const isInstagramRunning = appName === packageName;
                              console.log("In Service : ",time_remind);
                              // console.log("Whatsapp Chl gyaa")
                            //   setShowOverlay(isInstagramRunning);
                            isInstagramRunning ? console.log("whatsapp ") : "";
                            isInstagramRunning ? count++ : "";
                            // console.log("Count: ",count)
                            // if(i===time_remind)
                            // {
                                // if (count===time_remind)
                                // {
                                    isInstagramRunning?navigation.navigate('Project_BlockScreen'):"";
                                   isInstagramRunning?Linking.openURL('statsproject://'):"";

                                // }
                            // }
                            //   showScreen=true;
                            }
                            );
                      // } 
                    };
                    
                    // AppState.addEventListener('focus', appStateHandler);
                    
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
// const stopBackgroundService = async ()=>
// {
    //     await BackgroundService.stop();   
    // }
    
    startBackgroundService();
    
    // return(<View>{console.log("Service started")}</View>)
    
    
    navigation.navigate('Component1',{name:apName,appIcon:icon});
}

export default Service;

const styles = StyleSheet.create({})