import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, Platform, FlatList, Button, } from 'react-native';
import React, { useEffect, useState } from 'react'
import RNInstalledApplication from 'react-native-installed-application';
import { NativeModules } from 'react-native';

const { UsageStatsModule } = NativeModules;

const FinalList = () => {

    const [apps, setApps] = useState([]);

    const renderItems = ((element) => {

        let packageNamee = "";
        let appNamee = "";
        let Icons = "";
        let Times = 0;

        apps.map((ele, index) => {
            if (element.item.packageName === ele.packageName) {

                packageNamee = element.item.packageName;
                appNamee = ele.appName;
                Icons = ele.icon;
                Times = element.item.timeInForeground;

            }
        }
        )
        return (
            <View style={{ flexDirection: "row",alignItems:"center" }}>

                {Icons !== "" ? <Image source={{ uri: `data:image/png;base64,${Icons}` }} style={{ height: 40, width: 40,margin:6,marginRight:8 }} /> : ""}
                <View style={{}}>
                {appNamee !== "" ? <Text style={styles.appText}>{appNamee}</Text> : ""}
                {/* {packageNamee!==""?<Text>{packageNamee}</Text>:""} */}
                {Times !== 0 ? <Text style={styles.appText}>{parseInt(Times / 60)}m</Text> : ""}
                </View>

            </View>
        )
    })

    useEffect(() => {
        RNInstalledApplication.getNonSystemApps().then(apps => {
            setApps(apps);
        }).catch(error => {
            console.log(error)
        });
    }, []);

    const [appsUsage, setAppsUsage] = useState([]);

    useEffect(() => {

        UsageStatsModule.getUsageStats().then((e) => {
            setAppsUsage(e)
            console.log("Usage Loaded!")
        }
        );
    }, []);


    return (
        <View>
            <View style={{ margin: 10 }}>
            <Text style={styles.head}>All Apps Analytics ----------</Text>
                <FlatList
                    data={appsUsage}
                    // extraData={appsUsage}
                    // keyExtractor={item=>item.packageName}
                    renderItem={renderItems}

                /> 
            </View>

        </View>
    )
}

export default FinalList

const styles = StyleSheet.create({
    appText:
    {
        color:"black",

    },
    head:
    {
        color:"black",
        marginHorizontal:12,
        fontSize:22,
        fontWeight:"bold",
        marginVertical:8,

    }
})