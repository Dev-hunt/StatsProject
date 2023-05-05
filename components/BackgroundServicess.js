import React, { useEffect, useState } from 'react';
import { View, Text,AppState } from 'react-native';
import Overlay from 'react-native-modal-overlay';
import { NativeModules } from 'react-native';

const BackGroundServicess = () => {
  const [isWhatsappActive, setIsWhatsappActive] = useState(false);

  useEffect(() => {
    const appStateHandler = nextAppState => {
      if (nextAppState === 'active') {
        NativeModules.RNAppInfo.getCurrentApp().then(appName => {
            console.log(appName)
          setIsWhatsappActive(appName === 'com.whatsapp');
        });
      }
    };

    NativeModules.RNAppInfo.getCurrentApp().then(appName => {
      setIsWhatsappActive(appName === 'com.whatsapp');
    });

    const subscription = AppState.addEventListener('change', appStateHandler);
    return () => subscription.remove();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Overlay visible={isWhatsappActive} onClose={() => setIsWhatsappActive(false)} closeOnTouchOutside>
        <Text style={{ fontSize: 20 }}>This is an overlay screen on top of WhatsApp</Text>
      </Overlay>
      {/* Add your other app components here */}
    </View>
  );
};

export default BackGroundServicess;
