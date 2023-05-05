import { StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native';
import React,{useState} from 'react';

const Project_Analytics = () => {

    const [b1, setB1] = useState({
        flexGrow: 2,
        flexBasis: 40,
        flexShrink:2,
      });
      const [b2, setB2] = useState({
        flexGrow: 2,
        flexBasis: 60,
        flexShrink:2,
      });
      const [b3, setB3] = useState({
        flexGrow: 2,
        flexBasis: 20,
        flexShrink:2,
      });
      const [b4, setB4] = useState({
        flexGrow: 2,
        flexBasis: 30,
        flexShrink:2,
      });

    // b1=4;
    // b2=3;
    // b3=1;


    return (
        <View style={styles.container}>
            <View style={styles.first}>
                <Text style={{fontFamily: "Inter-Bold",fontSize: 26,marginLeft: "3%",textShadowColor:"#B8AFAF",
        textShadowOffset:{width:5,height:5},
        textShadowRadius:8,}}>Screen Time</Text>
                <Text style={{fontFamily: "Inter-Bold",fontSize: 30,marginLeft: "3%",color:"#292DAC"}}>4h 57m</Text>
                <Text style={{fontFamily: "Inter-Bold",fontSize: 16,marginLeft: "3%",color:"#BD1F1F"}}>32 m more than yesterday</Text>


            </View>
            <View style={styles.second}>
                <View style={{flexDirection:"row"}}>
                <Text style={{fontFamily: "Inter-Bold",fontSize: 22,marginLeft: "3%",color:"#17A1FA"}}>Added Apps</Text>
                <Text style={{fontFamily: "Inter-Bold",fontSize: 20,marginLeft: "3%"}}>-----------  </Text>
                <Image source={require("../../assets/icons/filter.png")} style={{width:40,height:40}}/>
                {/* <Text>------------</Text> */}
                </View>
                <Text style={{fontFamily: "Inter-Bold",fontSize: 26,marginLeft: "3%"}}>47m</Text>
            <View style={styles.progreesBar}>
            
            <View style={[styles.box1,{flexBasis:b1.flexBasis,flexGrow:b1.flexGrow}]}></View>
            <View style={[styles.box2,{flexBasis:b2.flexBasis,flexGrow:b2.flexGrow}]}></View>
            <View style={[styles.box3,{flexBasis:b3.flexBasis,flexGrow:b3.flexGrow}]}></View>
            <View style={[styles.box4,{flexBasis:b4.flexBasis,flexGrow:b4.flexGrow}]}></View>
            {/* <View style={[styles.box1,{}]}></View>
            <View style={[styles.box2,{}]}></View>
            <View style={[styles.box3,{}]}></View>
            <View style={[styles.box4,{}]}></View> */}
            </View>

            </View>
            <View style={styles.third}>

            </View>
            <View style={styles.fourth}>
            <TouchableOpacity>
                <Text style={{fontFamily: "Inter-Regular",fontSize: 16,marginLeft: "3%",textDecorationLine:"underline"}}>View More</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Project_Analytics


const styles = StyleSheet.create({
    img_container:
    {
        marginRight: "2%",
    },
    container:
    {
        margin: 12,
        flex: 1,
        backgroundColor: "#EEEEEE",
        borderRadius: 20,
        borderTopRightRadius: 70,
        // backgroundColor: "red",
    },
    txt_head:
    {
        fontFamily: "Inter-Bold",fontSize: 26,marginLeft: "3%",
    },
    img:
    {
        width: 60,
        height: 60,
        // alignSelf:"center",
        // marginTop:"100%"
        // justifyContent:"flex-end"
    },
    first:
    {
        flex: 4,
        // backgroundColor: "red",
        margin:12,
        
    },
    second:
    {
        flex: 5,
        // backgroundColor: "blue",

    },
    third:
    {
        // backgroundColor: "green",
        flex: 5,

    },
    fourth:
    {
        // backgroundColor: "green",
        flex: 2,
        justifyContent:"center",
        alignItems:"center",
        

    },
    progreesBar:
    {
        backgroundColor:"#ddd",
        flexBasis:35,
        marginHorizontal:15,
        marginVertical:18,
        borderRadius:20,
        flexDirection:"row",
    },
    box1:
    {
        backgroundColor:"#8B0C03",
        // flexBasis:,
        // flexBasis:40,
        borderTopLeftRadius:20,
        borderBottomLeftRadius:20,
        // flexGrow:2,
        // flexShrink:2,
        
    
        
    },
    box2:
    {
        backgroundColor:"#292DAC",
        // flexBasis:40,
        // flexGrow:2,
        // flexShrink:4,


        
    },
    box3:
    {
        backgroundColor:"#9747FF",
        // flexBasis:40,
        // flexGrow:2,
        // flexShrink:4,

        // borderTopRightRadius:20,
        // borderBottomRightRadius:20,

    },
    box4:
    {
        backgroundColor:"#ddd",
        // flexBasis:40,
        // flexGrow:10,


        borderTopRightRadius:20,
        borderBottomRightRadius:20,


    },

})