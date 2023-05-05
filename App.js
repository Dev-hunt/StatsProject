import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import AppList from './components/AppList';
import AppLists from './components/AppLists';
import UsageStatss from './components/UsageStatss';
import Permissions from './components/Permissions';
import NewModuleButton from './components/NewModuleButton';
import ProperList from './components/ProperList';
import FinalList from './components/FinalList';
import OverleyScreen from './components/OverleyScreen';
import ScreenUppr from './components/ScreenUppr';
import BackgroundServices from './components/BackgroundServices';
import BackgroundServicess from './components/BackgroundServicess';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/screens/Home';
import Dashboard from './src/screens/Dashboard';
import Addedapp from './src/components/AddedApps';
import Todolist from './src/components/Todolist';
import Analytics from './src/components/Analytics';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import Component1 from './src/components/Component1';
import Component2 from './src/components/Component2';
import Faltu from './components/Faltu';
import ProScreen from './src/screens/ProScreen';
import AppSetting from './components/AppSetting';
import Nothing from './components/Nothing';
import Service from './components/Service';
import Project_BlockScreen from './components/Project_BlockScreen';



const Stack = createNativeStackNavigator();


const App = () => {
  return (
    
      <NavigationContainer initialRouteName="Faltu">
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home " component={Home}  />    
        <Stack.Screen name="Dashboard" component={Dashboard}/>   
        <Stack.Screen name='Addedapp' component={Addedapp} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Signup' component={Signup} />
        <Stack.Screen name="Component1" component={Component1}/>
        <Stack.Screen name="Component2" component={Component2}/>
        <Stack.Screen name='Todolist' component={Todolist} />
        <Stack.Screen name='Faltu' component={Faltu} />
        <Stack.Screen name='ProScreen' component={ProScreen} />
        <Stack.Screen name='AppSetting' component={AppSetting} />
        <Stack.Screen name='Nothing' component={Nothing} />
        <Stack.Screen name='Service' component={Service} />
        <Stack.Screen name='Project_BlockScreen' component={Project_BlockScreen} />
        {/* <Stack.Screen name='Service' component={Service} /> */}
      </Stack.Navigator>
    </NavigationContainer>
      
      
      )
    };
    
export default App;

const styles = StyleSheet.create({});
    {/* <Text>Hello World!</Text> */}
  {/* <AppList/> */}
  {/* <AppLists/> */}
  {/* <NewModuleButton/> */}
  {/* <UsageStatss/> */}
  {/* <Permissions/> */}
  {/* <ProperList/> */}
  {/* <FinalList/> */}
  {/* <OverleyScreen/> */}
  {/* <BackgroundServices/> */}
  {/* <BackgroundServicess/> */}
  {/* <ScreenUppr/> */}