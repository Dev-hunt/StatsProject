import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';


const AddedApps = (props) => {
    const navigation = useNavigation();
    // const [addedApps, setAddedApps] = useState([])
    let addedApps = []

    console.log("In Added Apps", props.name)
    // console.log(props.appIcon)
    // const pushApps =()=>
    // {
    const addApp = {
        name: props.name,
        icon: props.appIcon
    }
    if (addApp.name !== undefined) {
        // setAddedApps([...addedApps,addApp])
        // let addedApp = [...addedApps] 

        addedApps.push(addApp)
        // setAddedApps(addedApp)

    }
    else {
        console.log("Else mai h")
    }

    // }
    // pushApps();
    const renderAddedApps = (element) => {

        return (
            <TouchableOpacity
                onPress={() => {
                    // navigation.navigate('AppSetting', { appName: element.item.appName, appIcon: element.item.icon });
                }}
            >

                <View style={[styles.container1, { flexDirection: "row", alignItems: "center" }]}>
                    <Image source={{ uri: `data:image/png;base64,${element.item.icon}` }} style={{ height: 40, width: 40, margin: 6, marginRight: 8 }} />
                    <Text style={styles.names}>{element.item.name}</Text>
                    <Text>{console.log("Chl gyaa")}</Text>
                </View>
            </TouchableOpacity>
        )

    }

    return (
        <View style={styles.container}>

            <View style={{ flex: 7 }}>
                <Text style={styles.txt}>Added Apps ------------------------</Text>
                <View style={{ marginVertical: 10 }}>

                    {/* <FlatList
                    data={addedApps} keyExtractor={item => item.name}
                    renderItem={renderAddedApps}
                /> */}
                    {
                        addedApps.map((element) => {
                            return (
                                <TouchableOpacity
                                    onPress={() => {
                                        // navigation.navigate('AppSetting', { appName: element.item.appName, appIcon: element.item.icon });
                                    }}
                                >

                                    <View style={[styles.container1, { flexDirection: "row", alignItems: "center" }]}>
                                        <Image source={{ uri: `data:image/png;base64,${element.icon}` }} style={{ height: 40, width: 40, margin: 6, marginRight: 8 }} />
                                        <Text style={styles.names}>{element.name}</Text>
                                        <Text>{console.log("Chl gyaa")}</Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>
            </View>
            <View style={[styles.img_container, { flex: 1, alignItems: "flex-end" }]}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Component2', { slideName: "Add App" })
                    }>
                    <Image source={require("../../assets/icons/plus.png")} style={styles.img} />
                </TouchableOpacity>
            </View>
        </View>

    )
}

export default AddedApps;

const styles = StyleSheet.create({
    img_container:
    {
        marginRight: "2%",
    },
    container:
    {
        margin: 12,
        flex: 1,
        // backgroundColor: "red",
    },
    txt:
    {
        fontFamily: "Inter-Bold",
        fontSize: 18,
        color: "black",
    },
    img:
    {
        width: 60,
        height: 60,
        // alignSelf:"center",
        // marginTop:"100%"
        // justifyContent:"flex-end"
    },
    names:
    {
        color: "black"
    },
    container1:
    {
        // background:"#ddd",
        backgroundColor: "#ddd",
        margin: 4,
        marginHorizontal: 8,
        borderRadius: 10
    }
})