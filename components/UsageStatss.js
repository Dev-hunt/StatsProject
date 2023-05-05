import { Button, StyleSheet, Text, View, FlatList,ScrollView } from 'react-native'
import React,{useState} from 'react'
// import { DeviceEventEmitter, NativeModules,PermissionsAndroid } from 'react-native';
import { NativeModules } from 'react-native';

const { UsageStatsModule } = NativeModules;
const helll=[1,2,2,33,4,5]
// UsageStats.requestUsageStatsPermission();
let packages =[]
let timeUsed =[]

const caluculateTime=(apps)=>
{
  apps.map((element)=>
  {
    // console.log(element.packageName);
    packages.push(element.packageName);
    timeUsed.push(element.timeInForeground);
  })
  packages.map((e,index)=>
  {
    console.log(index," : ",e , timeUsed[index]);
  })
  // console.log(timeUsed)

  const duplicates =
  packages.map((item,index)=>
  {
    const prevIndex = packages.indexOf(item)
    if(prevIndex!==index)
    {
        console.log(index)
        let total_time = parseInt((timeUsed[prevIndex] + timeUsed[index]*2)/2) 
        // packages.splice()
        // timeUsed.
        console.log(packages[prevIndex],": ",total_time);


    }
  })
  // console.log(duplicates)

  // for (let i in apps )
  // {   
      
  //   for(let j in apps)
  //   {
  //       if(apps[i].packageName===apps[j].packageName)
  //       {
  //         console.log(apps[i].packageName)
  //         arr.push(apps[i].packageName)
  //       }
  //     }
      // console.log("Array:: ",apps[i])
      // console.log(`${apps[i].packageName} : ${apps[i].timeInForeground}`);
  // }
  

}


const UsageStatss = () => {
  const [apps,setApps]=useState([]);
    const getAppUsageStats = async () => {
        console.log("hii")

        // console.log("hello")
        // const data =UsageStatsModule.requestUsageStatsPermission;
        // const data = UsageStatsModule.getAppUsageStats();
        // console.log(data)
        UsageStatsModule.getUsageStats().then((e)=>{
          setApps(e)
          // console.log(e)
          apps.map((e)=>
          {
            console.log(e)
          })
          console.log("hehe")
        }
        );
        

        // const apps = await NativeModules.RNDeviceInfo.getInstalledApps();
        
            
            // apps.forEach((app) => {
            //   NativeModules.AppUsageStats.getUsageStats(app, (err, usageStats) => {
            //     if (err) {
            //       console.error(err);
            //     } else {
            //       console.log(`Usage stats for ${app}: ${JSON.stringify(usageStats)}`);
            //     }
            //   });
            // });

        // const permission = PermissionsAndroid.PERMISSIONS.PACKAGE_USAGE_STATS;
        // const granted = setTimeout(()=>{PermissionsAndroid.check(permission)},3000) 
    };
    // const greet =()=>
    // {
    //     console.log("Good morning");
    // }
      

  return (
    <View style={{margin:22}}>
    
    <Button title='Press me'
    onPress={()=>
      getAppUsageStats()
    }></Button>
    <Button
    title='Calculate Time'
    onPress={()=>
    {
      caluculateTime(apps);
    }}
    ></Button>
      <Text>UsageStats</Text>
      <View style={{height:"82%"}}>
      <FlatList 
        // data={apps} keyExtractor={item=>item.packageName}
        data={apps} 
        // keyExtractor={item=>item.packageName}
        renderItem={(element)=>
        {
            return(
                <View style={{flexDirection:"row"}}>
                {/* <Image source={{uri:`data:image/png;base64,${element.item.icon}`}} style={{height:25,width:25}} /> */}
                <Text>{element.item.packageName}  :  </Text>
                <Text>{parseInt(element.item.timeInForeground/60)}m</Text>
                </View>
            )
        }}
      />
      </View>
    </View>
  )
}

export default UsageStatss

const styles = StyleSheet.create({})


