import { StyleSheet, Text, View, AppState, Overlay,Modal} from 'react-native'
import React, { useState, useEffect } from 'react'
import { NativeModules } from 'react-native';
// import {Overlay} from 'rn-overlay';

// import Overlay from 'react-native-overlay';
// import AppState from 'react-native-appstate';



// const App = () => {

const MyOverlay = () => {
    return (
        <Overlay isVisible={true}>
            <View>
                <Text>This is my overlay</Text>
            </View>
        </Overlay>
    );
};

const OverleyScreen = () => {

    const [showOverlay, setShowOverlay] = useState(false);

    useEffect(() => {
        const appStateHandler = (nextAppState) => {
            if (nextAppState === 'active') {
                const packageName = 'com.whatsapp'; // replace with Instagram's package name
                // AppState.getRunningAppProcesses().then((appProcesses) => {
                NativeModules.RNAppInfo.getCurrentApp().then((appName) => {
                    console.log(appName)
                    const isInstagramRunning = appName === packageName;
                    // console.log("Whatsapp Chl gyaa")
                    setShowOverlay(isInstagramRunning);
                    isInstagramRunning ? console.log("whatsapp ") : ""
                });
            } 
            // else {
            //     setShowOverlay(false);
            // }
        };
        // setInterval(()=>
        // {
            AppState.addEventListener('change', appStateHandler);

        // },1000)

        return () => {
            AppState.removeEventListener('change', appStateHandler);
        };
    }, []);

    return (
        <View>
            <Text>My app content</Text>
            {/* {showOverlay?<MyOverlay />:""} */}
            {/* <MyOverlay/> */}
            <Modal visible={showOverlay} animationType="slide"
                onRequestClose={() => (setShowOverlay(false))}
            >
                {/* {console.log("modal")} */}
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{color:"black"}}>This is the overlay content</Text>
                    {/* <TouchableOpacity onPress={() => setShowOverlay(false)}>
                        <Text>Close Overlay</Text>
                    </TouchableOpacity> */}
                </View>
            </Modal>
            {/* {showOverlay && <MyOverlay />} */}

        </View>
    );
};







//   return (
//     <View>
//       <Text>OverleyScreen</Text>
//     </View>
//   )
// }

export default OverleyScreen

const styles = StyleSheet.create({})