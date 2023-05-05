import { StyleSheet, Text, View,TouchableOpacity,ScrollView,Image,Platform,FlatList } from 'react-native';
import React,{useState,useEffect} from 'react';
import RNInstalledApplication from 'react-native-installed-application';
import { useNavigation } from '@react-navigation/native';

const AppLists = () => {
  const navigation=useNavigation();

    const [apps,setApps]=useState([]);

    useEffect(()=>
    {
        RNInstalledApplication.getNonSystemApps().then(apps=>
            {
                setApps(apps);
            }).catch(error=>
                {
                    console.log(error)
                });
    },[]);




  return (
    <View style={{margin:4}}>
    <Text style={{color:"black",fontSize:24,marginHorizontal:12,fontWeight:"bold",marginVertical:8}}>All Apps ----------------</Text>
      <FlatList 
        data={apps} keyExtractor={item=>item.packageName}
        renderItem={(element)=>
        {
          
            return(
              <TouchableOpacity
              onPress={()=>
              {
                navigation.navigate('AppSetting',{appName:element.item.appName,appIcon:element.item.icon,pkgName:element.item.packageName});
              }}
              >

                <View style={[styles.container,{flexDirection:"row",alignItems:"center" }]}>
                <Image source={{uri:`data:image/png;base64,${element.item.icon}`}} style={{height:40,width:40,margin:6,marginRight:8}} />
                <Text style={styles.names}>{element.item.appName}</Text>
                </View>
              </TouchableOpacity>
            )
        }}
      />
    </View>
  )
}

export default AppLists;

const styles = StyleSheet.create({
  names:
  {
    color:"black"
  },
  container:
  {
    // background:"#ddd",
    backgroundColor:"#ddd",
    margin:4,
    marginHorizontal:8,
    borderRadius:10
  }
})