import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, Platform, FlatList, Button, } from 'react-native';
import React, { useEffect,useState } from 'react'
import RNInstalledApplication from 'react-native-installed-application';
import { NativeModules } from 'react-native';

const { UsageStatsModule } = NativeModules;
// const names ={{"Gaurav",},{"Karan",},{"hello",}}
// const obj=[{name: "gaurav"},{name :"karan"}]
// console.log(obj.indexOf({name:"gaurav"}))
// console.log(Object.values(obj))
// console.log(obj)

let indexes =[]

let show=0

const ProperList = () => {

    const [kradePrint,setKradePrint] =useState(false)
    const [apps, setApps] = useState([]);


    const renderItems=((element)=>
    {
        
        let packageNamee="";
        let appNamee="";
        let Icons = "";
        let Times = 0;

            // if (appsUsage)
            
                // console.log("hii")
            
            // for (let i in appsUsage[0])
            // {
            //     console.log(i)
            // }
            // console.log(show," : ",element.item.packageName)
            // let ind = findIndex(element.item.packageName);
            // console.log(ind)
            // console.log(apps[33].packageName)

            apps.map((ele,index)=>
            {   
                if (element.item.packageName===ele.packageName)
                {
            //          console.log("**********************************************")
            // //         // console.log(" ")

            //         console.log(index,"done: ",element.item.packageName)
            //         count+=1
            //     }
            //     // else
            //     // {
            //     //     console.log("hh")
            //     // }
            //     // let index = apps.indexOf(ele.packageName)

            // })
            // console.log("Finish")
            // console.log(count)
            show+=1
            
            // console.log(show,": ",element.item.packageName)
        //    console.log(index);
        
        

            packageNamee = element.item.packageName; 
            appNamee=ele.appName;
            Icons=ele.icon;
            Times=element.item.timeInForeground;
            // console.log(Icons)
            // return(
                // <View style={{flexDirection:"row"}}>
                 {/* <Image source={{uri:`data:image/png;base64,${element.item.icon}`}} style={{height:25,width:25}} />  */}
                {/* <Text>{apps[4].appName}  :  </Text>   */}
                
                {/* <Text>{element.item.timeInForeground}  : </Text> */}
                {/* {show==0 ?<Text> hello{show=1} </Text>:<Text>  Nhiii</Text>} */}
                {/* <Text>{show=1}</Text> */}
                {/* <Text>{appsUsage.values()}</Text> */}
                {/* <Text>{i}. {element.item.packageName}</Text> */}
                // <Text> {element.item.packageName}</Text> 
                {/* <Text>{apps[4].packageName}</Text> */}
                
                // </View>
            // )
                }
            }
            )
            return (
                <View style={{flexDirection:"row"}}>
                {Icons!==""?<Image source={{uri:`data:image/png;base64,${Icons}`}} style={{height:25,width:25}} />:""}
                {appNamee!==""?<Text>{appNamee} : </Text>:""}
                {/* {packageNamee!==""?<Text>{packageNamee}</Text>:""} */}
                {Times!==0?<Text>: {parseInt(Times/60)}m</Text>:""}
                {/* {packageNamee!==""?
                <Text>{packageNamee}</Text>
                :""} */}
                
                
                </View>
                )
        }
        
        )
    // const [show, setShow] = useState(false);
    
    let i=0 
    let count =0
    
    useEffect(() => {
        RNInstalledApplication.getNonSystemApps().then(apps => {
            setApps(apps);
        }).catch(error => {
            console.log(error)
        });
    }, []);
    
    
    
    const [appsUsage, setAppsUsage] = useState([]);
    const getAppUsageStats = async () => {

        UsageStatsModule.getUsageStats().then((e) => {
            setAppsUsage(e)
            // console.log(e)
            // appsUsage.map((e) => {
                //     console.log(e)
                // })
            console.log("Usage Loaded!")
        }
        );

        let packages = []
        let timeUsed = []
        appsUsage.map((element) => {
            packages.push(element.packageName);
            timeUsed.push(element.timeInForeground);
        })


    };
    // const usagedata = Object.values(appsUsage)
        // console.log(usagedata)
        // const usg= Object.values(usagedata)
        // console.log(appsUsage[0].packageName)
        
    let filtered = []
    const reduced = (apps,appsUsage)=>
    {
        let i=0
        apps.map((element)=>
        {   
            // filtered.push(element.packageName)
            appsUsage.map((ele)=>
            {
                if (element.packageName===ele.packageName)
                {
                    // i+=1
                    filtered.push(element)
                }
            })
            // let reduced = apps.filter
            // i+=1
            // return (
            //     [
            //         i,element.packageName
            //     ]
            
            //     )
            
        })
        console.log(filtered[0].packageName);
        // const usagedata = Object.values(appsUsage)
        // console.log(usagedata)
        console.log(filtered.length)
        console.log("Reduced")
        // console.log(i);
    }
    
    const check = ()=>
    {
        apps.map((app,ind)=>
        {   
            appsUsage.map((appp,index)=>
            {
                // if (appsUsage)
                if (app.packageName !==appp.packageName)
                {
                    // delete apps.app
                    // console.log(apps.app)
                    // Reflect.deleteProperty(apps, app);
                    // console.log(app.packageName)
                    
                }
                else{
                    console.log(ind,app.packageName)
                    
                }
                
            })
            // console.log("hiii")
        })
        // console.log(apps)
    }
    
    const findIndex=(apkName)=>
    {
        // const obj = { a: 1, b: 2, c: 3 };
        // const obj=[{name: "gaurav"},{name :"karan"}]
        const searchElement = apkName;
        // console.log(searchElement)
        // const searchElement = 2;r
        let index = -1;
        
        for (let key in apps) {  
            if (apps[key].packageName === searchElement) {
                
                index = key;
                // if(index>0)
                // {
                break;

            // }
        }
        }
        if (index>0)
        {
            indexes.push(index)
            // console.log(apps[index].packageName)
            // console.log(indexes); // outputs "b"
            // return index;
// 
        }
        // console.log(indexes)
    }
    
    const printKrao = ()=>
    {
        // let len =appsUsage.length;
        // let length =apps.length;
        // for(let i=0;i<=appsUsage.length;i+=1)
        {
           
            // return(
            //    <View>
            //         <Text>{i} : Hello</Text>
            //     </View>
    
            // )
        }
        appsUsage.map((e)=>
        {
            findIndex(e.packageName)
        })
        console.log(indexes)
    }
    
    
    return (
        <View>
            <Button title='Press me'
                onPress={() =>
                {
                    getAppUsageStats();
                    
                }
                }>

            </Button>
            {/* <Button
            title='Press OK'
            onPress={()=>
            {
                reduced(apps,appsUsage);
            }}
            >

            </Button> */}
            <Button
            title='Krade Print'
            onPress={()=>
            {
                setKradePrint(true)
                printKrao();
            }}
            >

            </Button>
            <Button
            title='Check'
            onPress={()=>
            {
                check(apps,appsUsage);
            }}
            >

            </Button>
            <Button
            title='try it '
            onPress={()=>
            {
                tryit();
            }}
            >

            </Button>
        <View style={{height:"75%",margin:10}}>
        {/* {console.log(apps[3].packageName)} */}
        {kradePrint? <FlatList 
        data={appsUsage} 
        // extraData={appsUsage}
        // keyExtractor={item=>item.packageName}
        renderItem={renderItems}
        
      />:""
      } 
      {
        indexes.map((e,index)=>
        {

            console.log("\n")
            {/* console.log ("Final1 : ",index," ",appsUsage[index].packageName) */}
            console.log ("Final2 : ",index," ",e," ",apps[e].packageName)
            {/* if (apps[e].packageName===appsUsage[index].packageName)
            {


            } */}
            
        })
      } 
      {/* {console.log(appsUsage.length)} */}
      {/* {
        printKrao()
      } */}
      {/* {console.log(show)}  */}
      {/* {kradePrint?
        apps.map((element,index)=>
         {
            

            {appsUsage.map((ele)=>
            {
                if (element.packageName===ele.packageName)
                {
                    console.log(index,"",element.packageName)
                    
                }

            }
            )}
        
         }
        ):""
      } */}
      </View>


            {/* <Text>ProperList</Text> */}

        </View>
    )
}

export default ProperList

const styles = StyleSheet.create({})


// kradePrint?<ScrollView>
// {
//     appsUsage.map((app,index) => (
    
    
//     <View style={{ flexDirection: "row" }}>
    
//         {/* <Image source={{ uri: `data:image/png;base64,${app.icon}` }} style={{ height: 25, width: 25 }} /> */}
//         {/* <Text>{app.appName}</Text> */}
//         <Text>{app.timeInForeground}</Text>
        
//         {/* <Text>{app.appName}</Text> */}
//         {/* <Text key={app.packageName}>App : {app.appName}</Text> */}
//     </View>
// ))
// }

// </ScrollView>:""