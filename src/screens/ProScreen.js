import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';

const ProScreen = () => {
    return (

        <View style={styles.container}>
            <View style={{ flex: .8, }}>
                <View style={styles.header}>
                    <Image source={require('../icons/crown-removebg-preview.png')}
                        style={styles.headerimage} />


                    <Text style={styles.heading}>Get pro version</Text>
                </View>
                <View style={{ marginTop: 25 }}>
                    <Text style={styles.subheading}>Pro features:</Text>
                </View>

            </View>


            {/* <ScrollView style={styles.featuresContainer}> */}
            <View style={{ flex: 3,  }}>
                <ScrollView>
                    <View style={styles.featureContainer}>
                        <View style={styles.tickImage}>
                            <Image
                                source={require('../icons/tick2-removebg-preview.png')}
                                style={styles.tickImage}
                            />
                        </View>
                        <View style={styles.featureset}>
                            <View>
                                <Text style={styles.featureheading}>No Ads</Text>
                            </View>

                        </View>
                    </View>
                            {/* <View style={styles.featureBlock}> */}
                            <View style={[styles.featureBlock,{marginHorizontal:28,}]}>

                                <Text style={styles.featuresub}>100% Ad free experience</Text>
                            </View>

                    <View style={styles.featureContainer}>
                        <View style={styles.tickImage}>

                            <Image
                                source={require('../icons/tick2-removebg-preview.png')}
                                style={styles.tickImage}
                            />
                        </View>
                        <View style={styles.featureset}>
                            <View style={styles.featureBlock}>

                                <Text style={styles.featureheading} >Export Analytics in CSV or XLS</Text>
                            </View>
                        </View>
                    </View>
                            <View style={[styles.featureBlock,{marginHorizontal:28,}]}>
                                <Text style={styles.featuresub}>Export analytics of upto 2 years</Text>
                            </View>


                    <View style={styles.featureContainer}>
                        <View style={styles.tickImage}>

                            <Image
                                source={require('../icons/tick2-removebg-preview.png')}
                                style={styles.tickImage}
                            />
                        </View>
                        <View style={styles.featureset}>

                            <View style={styles.featureBlock}>
                                <Text style={styles.featureheading}>Full access to strict mode and lock mode</Text>
                            </View>
                        </View>
                    </View>
                            <View style={[styles.featureBlock,{marginLeft:28,}]}>
                                <Text style={styles.featuresub}>Get Full access of strict mode and lock mode more than 6 hours and can also do parenting control</Text>
                            </View>


                    {/* Add more features here */}
                    <View style={styles.featureContainer}>
                        <View style={styles.tickImage}>

                            <Image
                                source={require('../icons/tick2-removebg-preview.png')}
                                style={styles.tickImage}
                            />
                        </View>
                        <View style={styles.featureset}>
                            <View style={styles.featureBlock}>

                                <Text style={styles.featureheading}>Customizable block screen</Text>
                            </View>
                        </View>
                    </View>
                            {/* <View style={styles.featureBlock}> */}
                            <View style={[styles.featureBlock,{marginHorizontal:28,}]}>


                                <Text style={styles.featuresub}>Customize your block screen with your stubborn images and text</Text>
                            </View>

                    <View style={styles.featureContainer}>
                        <View style={styles.tickImage}>
                            <Image
                                source={require('../icons/tick2-removebg-preview.png')}
                                style={styles.tickImage}
                            />
                        </View>
                        <View style={styles.featureset}>
                            <View style={styles.featureBlock}>

                                <Text style={styles.featureheading}>Get multiple themes</Text>
                            </View>
                        </View>
                    </View>
                            {/* <View style={styles.featureBlock}> */}
                            <View style={[styles.featureBlock,{marginHorizontal:28,}]}>
                            
                                <Text style={styles.featuresub}>Get access to multiple themes and apply them according to your choice</Text>
                            </View>


                    <View style={styles.featureContainer}>
                        <View style={styles.tickImage}>
                            <Image
                                source={require('../icons/tick2-removebg-preview.png')}
                                style={styles.tickImage}
                            />
                        </View>
                        <View style={styles.featureset}>
                            <View style={styles.featureBlock}>

                                <Text style={styles.featureheading}>Pin Protection</Text>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.featureBlock,{marginHorizontal:28,}]}>
                            {/* <View style={styles.featureBlock}> */}
                                <Text style={styles.featuresub}>Lock the app with PIN protection to prevent others from changing setting</Text>
                            </View>
                </ScrollView>
            </View>



            <View style={{ flex: 1, marginVertical: 10, borderWidth: 1 }}>
                {/* </ScrollView> */}
                <View style={styles.plansContainer}>
                    <TouchableOpacity style={styles.plan}>
                        <Text style={styles.Numberplan}>1</Text>
                        <Text style={styles.Months}>Month</Text>
                        <Text style={styles.rupees}>Rs.59</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.plan}>
                        <Text style={styles.Numberplan}>6</Text>
                        <Text style={styles.Months}>Months</Text>
                        <Text style={styles.rupees}>Rs.269</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.plan}>
                        <Text style={styles.Numberplan}>12</Text>
                        <Text style={styles.Months}>Months</Text>
                        <Text style={styles.rupees}>Rs.499</Text>
                    </TouchableOpacity>
                    {/* Add more plans here */}
                </View>
                <TouchableOpacity style={styles.subscribeButton}>
                    <Text style={styles.subscribeText}>Subscribe</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // width:"100%",
        // height:"100%",
        // alignItems: 'center',
        // justifyContent: 'center',
        // paddingHorizontal: 8,
        marginHorizontal:8,
        // backgroundColor: "red",
        // width: "45%",
        // height: 500,
    },
    heading: {
        fontSize: 30,
        fontWeight: 'bold',
        color:"black",
        marginTop: 15,
    },
    header: {
        flexDirection: 'row',
        flexWrap: "wrap"
    },
    headerimage: {
        height: 60,
        width: 60,
        marginRight: 10,
        marginLeft: 10,
    },
    subheading: {
        textAlign: 'center',
        textDecorationLine: 'underline',
        fontWeight: 'bold',
        fontSize: 20,
        color:"black",
    },
    featuresContainer: {
        // flexDirection: 'column',
        // marginBottom: 20,
        // width: "50%"
    },
    featureContainer: {
        flexDirection: 'row',
        // alignItems: 'center',
        // marginBottom: 5,
        // marginLeft: 5,
        // alignContent:"flex-start"

        // width:10,
        // flexWrap:"wrap",
        // flex:5,
    },
    featureset: {
        // flexDirection: 'row',
        // flexWrap:"wrap",
    },
    tickImage: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    featureheading: {
        fontSize: 18,
        color:"black",
        // flexDirection: 'column',
        // flexWrap:"wrap",
        // width:"90%",
        // alignContent:"flex-start",
        fontWeight: 'bold',
    },
    featuresub: {
        fontSize: 16,
        color:"black",
        // width: "95%",

        // flexWrap:"wrap",

        // flexDirection: 'column',
    },
    plansContainer: {
        flexDirection: 'row',
        // marginBottom: 20,
        justifyContent: "center",

    },
    plan: {
        flexDirection: 'column',
        padding: 10,
        backgroundColor: 'grey',
        marginRight: 10,
        textAlign: 'center',
    },
    Numberplan: {
        fontWeight: 'bold',
        fontSize: 25,
        color:"black",
    },
    Months: {

        fontSize: 18,
    },
    rupees: {
        fontSize: 12,
        color: '#00ff00'
    },
    subscribeButton: {
        color: "white",
        // textAlign: "center",
        marginVertical: 10,
        backgroundColor: "#181277",
        padding: 9,
        // paddingLeft: 44,
        // paddingRight: 44,
        alignSelf: "center",
        elevation: 8,
        borderRadius: 32,
        fontSize: 34,
        // backgroundColor: '#03254c',
        // padding: 10,
        // borderRadius: 13,
        // alignSelf: 'center',
        // elevation: 8,
    },
    subscribeText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
    },
    featureBlock:
    {
        // width:"99%",
        // flexWrap:"wrap",
        // marginHorizontal:20,
        // alignContent:"flex-start"
        marginRight:8,
        // marginBottom:2,

    }
});

export default ProScreen;

