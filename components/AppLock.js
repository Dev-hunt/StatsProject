import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as LocalAuthentication from 'expo-local-authentication';

const AppLock = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pin, setPin] = useState('');
  const [storedPin, setStoredPin] = useState('');

  const authenticate = async () => {
    const hasHardwareSupport = await LocalAuthentication.hasHardwareAsync();
    if (hasHardwareSupport) {
      const supportedAuthTypes = await LocalAuthentication.supportedAuthenticationTypesAsync();
      if (supportedAuthTypes.includes(LocalAuthentication.AuthenticationType.PIN)) {
        const isEnrolled = await LocalAuthentication.isEnrolledAsync(LocalAuthentication.AuthenticationType.PIN);
        if (isEnrolled) {
          const result = await LocalAuthentication.authenticateAsync({
            promptMessage: 'Authenticate to unlock the app',
            disableDeviceFallback: true,
            authenticationType: LocalAuthentication.AuthenticationType.PIN,
          });
          if (result.success) {
            setIsAuthenticated(true);
          }
        }
      }
    }
  };

  const lockApp = () => {
    setIsAuthenticated(false);
    setPin('');
  };

  const savePin = async () => {
    try {
      await AsyncStorage.setItem('appLockerPin', pin);
      setStoredPin(pin);
    } catch (e) {
      console.error(e);
    }
  };

  const loadPin = async () => {
    try {
      const value = await AsyncStorage.getItem('appLockerPin');
      if (value !== null) {
        setStoredPin(value);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handlePinChange = (text) => {
    setPin(text);
  };

  const handlePinSubmit = () => {
    if (pin === storedPin) {
      authenticate();
    } else {
      lockApp();
    }
  };

  return (
    <View>
      {isAuthenticated ? (
        <Text>The app is unlocked!</Text>
      ) : (
        <View>
          <TextInput
            onChangeText={handlePinChange}
            onSubmitEditing={handlePinSubmit}
            value={pin}
            keyboardType="number-pad"
            secureTextEntry={true}
            maxLength={4}
          />
          <TouchableOpacity onPress={savePin}>
            <Text>Save PIN</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default AppLock;
