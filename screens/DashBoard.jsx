import React from "react";
import {StyleSheet, View, Text, Image, ScrollView } from "react-native";
import ProfilePix from "../assets/appImg/pix.jpg";
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const DashBoard = () => {
    return(
        <View style={styles.dashboard}>
            <View style={styles.sectionOne}>
                <View style={styles.dashId}>
                    <Image source={ProfilePix} style={styles.proImg}/>
                    <View style={styles.dashName}>
                        <Text style={styles.userName}>Mark Carson</Text>
                        <Text style={styles.userBlc}>Total Balance: N300,000</Text>
                    </View>
                </View>
                <View style={styles.proMenu}>
                    <View style={styles.iconHolder}>
                        <FontAwesome name="send" size={30} color="black" />
                        <Text style={styles.iconTxt}>Send</Text>
                    </View>
                    <View style={styles.iconHolder}>
                        <MaterialIcons name="add-alarm" size={30} color="black" />
                        <Text style={styles.iconTxt}>Top Up</Text>
                    </View>
                    <View style={styles.iconHolder}>
                        <AntDesign name="alipay-circle" size={30} color="black" />
                        <Text style={styles.iconTxt}>Pay</Text>
                    </View>
                    <View style={styles.iconHolder}>
                        <MaterialCommunityIcons name="sack-percent" size={30} color="black" />
                        <Text style={styles.iconTxt}>Request</Text>
                    </View>
                </View>
            </View>
            <View style={styles.sectionTwo}>
                <View style={styles.transaction}>
                    <Text style={styles.transTxt}>Transaction</Text>
                    <Text style={styles.seeAll}>See all</Text>
                </View>
                <ScrollView>
                    <View style={styles.transItem}>
                        <View style={styles.product}>
                            <MaterialCommunityIcons name="sack-percent" size={50} color="black" />
                            <View style={styles.transText}>
                                <Text>Car Gas Bill</Text>
                                <Text>Monthly Payment</Text>
                            </View>
                        </View>
                        <Text>N210</Text>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}
 
export default DashBoard;

const styles = StyleSheet.create({
    dashboard:{
        paddingVertical:10,
        paddingHorizontal:10,
    },
    sectionOne:{
        backgroundColor:"black",
        paddingVertical:30,
        paddingHorizontal:10,
        borderRadius:20,
        height:200,
    },
    dashId:{
        flexDirection:"row",
        alignItems:"center",
    },
    proImg:{
        width:80,
        height:80,
        borderRadius:100,
    },
    userName:{
        color:"white",
        fontSize:20,
        fontWeight:500,
    },
    userBlc:{
        color:"white",
        fontWeight:500,
    },
    dashName:{
        marginLeft:10,
    },
    proMenu:{
        position:"relative",
        top:25,
        backgroundColor:"white",
        paddingVertical:30,
        flexDirection:"row",
        justifyContent:"space-evenly",
        borderRadius:10,
        shadowColor: "black",
        shadowOffset: {width: 6, height: 4},
        elevation: 6,
    },
    iconHolder:{
        alignItems:"center",
    },
    iconTxt:{
        fontSize:16,
        fontWeight:900,
        marginTop:15,
    },
    sectionTwo:{
        marginTop:80,
        backgroundColor:"white",
    },
    transaction:{
        paddingVertical:25,
        paddingHorizontal:15,
        backgroundColor:"white",
        flexDirection:"row",
        justifyContent:"space-between",
        shadowColor: "black",
        shadowOffset: {width: 6, height: 4},
        elevation: 3,
    },
    transTxt:{
        fontSize:18,
        fontWeight:900,
    },
    seeAll:{
        fontSize:14,
        fontWeight:600,
    },
    transItem:{
        flexDirection:"row",
        alignItems:"center",
        backgroundColor:"white",
        width:250,
        justifyContent:"space-between",
        margin:15,
        paddingVertical:10,
        paddingHorizontal:10,
        shadowColor: "black",
        shadowOffset: {width: 6, height: 4},
        elevation: 6,
        borderRadius:10,
    },
    product:{
        flexDirection:"row",
        alignItems:"center",
    },
    transText:{
        marginLeft:4,
    }
})