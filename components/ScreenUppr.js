import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Modal } from 'react-native';
import Overlay from 'react-native-modal-overlay';




const ScreenUppr = () => {
    const [showOverlay, setShowOverlay] = useState(false);



    return (
        <View>
        <Overlay visible={showOverlay} onClose={()=>setShowOverlay(false)} closeOnTouchOutside>
          <Text>Some Modal Content</Text>
        </Overlay>
            <Text>ScreenUppr</Text>
    {/* <Modal visible={showOverlay} animationType="slide"
    onRequestClose={() => (setShowOverlay(false))}
    >
    {console.log("modal")}
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>This is the overlay content</Text>
            <TouchableOpacity onPress={() => setShowOverlay(false)}>
                <Text>Close Overlay</Text>
            </TouchableOpacity>
        </View>
    </Modal> */}
            <TouchableOpacity onPress={() => setShowOverlay(true)}>
                <Text>Show Overlay</Text>
            </TouchableOpacity>

        </View>
    )
}

export default ScreenUppr

const styles = StyleSheet.create({})