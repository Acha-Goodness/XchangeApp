import React, { useLayoutEffect } from "react";
import {StyleSheet, View, Text, Image, ScrollView, SafeAreaView } from "react-native";
import ProfilePix from "../assets/appImg/pix.jpg";
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import MenuBar from "../components/MenuBar";
import { Feather } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";



const DashBoard = () => {

    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown:false
        })
    }, [])

    return(
        <SafeAreaView style={styles.dashboard}>
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
                        <FontAwesome name="send" size={30} color="darkblue" />
                        <Text style={styles.iconTxt}>Send</Text>
                    </View>
                    <View style={styles.iconHolder}>
                        <MaterialIcons name="add-alarm" size={30} color="darkblue" />
                        <Text style={styles.iconTxt}>Top Up</Text>
                    </View>
                    <View style={styles.iconHolder}>
                        <AntDesign name="alipay-circle" size={30} color="darkblue" />
                        <Text style={styles.iconTxt}>Pay</Text>
                    </View>
                    <View style={styles.iconHolder}>
                        <MaterialCommunityIcons name="sack-percent" size={30} color="darkblue" />
                        <Text style={styles.iconTxt}>Request</Text>
                    </View>
                </View>
            </View>

            <View style={styles.sectionTwo}>
                <View style={styles.transaction}>
                    <Text style={styles.transTxt}>Transaction</Text>
                    <Text style={styles.seeAll}>See all</Text>
                </View>
                <ScrollView horizontal>
                    <View style={styles.transItem}>
                        <View style={styles.product}>
                            <FontAwesome5 name="gas-pump" size={40} color="darkblue" />
                            <View style={styles.transText}>
                                <Text style={styles.title}>Car Gas Bill</Text>
                                <Text style={styles.duration}>Monthly Payment</Text>
                            </View>
                        </View>
                        <Text style={styles.price}>N200</Text>
                    </View>

                    <View style={styles.transItem}>
                        <View style={styles.product}>
                        <MaterialIcons name="local-grocery-store" size={40} color="darkblue" />
                            <View style={styles.transText}>
                                <Text style={styles.title}>Grocery Bill</Text>
                                <Text style={styles.duration}>Monthly Payment</Text>
                            </View>
                        </View>
                        <Text style={styles.price}>N500</Text>
                    </View>

                    <View style={styles.transItem}>
                        <View style={styles.product}>
                        <MaterialIcons name="electrical-services" size={40} color="darkblue" />
                            <View style={styles.transText}>
                                <Text style={styles.title}>Electri Bill</Text>
                                <Text style={styles.duration}>Monthly Payment</Text>
                            </View>
                        </View>
                        <Text style={styles.price}>N3500</Text>
                    </View>

                    <View style={styles.transItem}>
                        <View style={styles.product}>
                            <Ionicons name="water" size={40} color="darkblue" />
                            <View style={styles.transText}>
                                <Text style={styles.title}>Water Bill</Text>
                                <Text style={styles.duration}>Monthly Payment</Text>
                            </View>
                        </View>
                        <Text style={styles.price}>N1000</Text>
                    </View>
                </ScrollView>
            </View>

            <View style={styles.sectionThree}>
                <View style={styles.transaction}>
                    <Text style={styles.transTxt}>Cards</Text>
                    <Text style={styles.seeAll}>See all</Text>
                </View>
                <ScrollView horizontal>
                    <View style={styles.transItem}>
                        <View style={styles.product}>
                        <FontAwesome name="cc-mastercard" size={40} color="orangered" />
                            <View style={styles.transText}>
                                <Text style={styles.title}>Master</Text>
                            </View>
                        </View>
                        <Text style={styles.price}>N200</Text>
                    </View>

                    <View style={styles.transItem}>
                        <View style={styles.product}>
                            <FontAwesome name="cc-visa" size={40} color="blue" />
                            <View style={styles.transText}>
                                <Text style={styles.title}>Visa</Text>
                            </View>
                        </View>
                        <Text style={styles.price}>N500</Text>
                    </View>

                    <View style={styles.transItem}>
                        <View style={styles.product}>
                        <FontAwesome name="credit-card-alt" size={40} color="brown" />
                            <View style={styles.transText}>
                                <Text style={styles.title}>Credit</Text>
                            </View>
                        </View>
                        <Text style={styles.price}>N3500</Text>
                    </View>

                    <View style={styles.transItem}>
                        <View style={styles.product}>
                        <FontAwesome name="vcard" size={40} color="purple" />
                            <View style={styles.transText}>
                                <Text style={styles.title}>Virtual</Text>
                            </View>
                        </View>
                        <Text style={styles.price}>N1000</Text>
                    </View>
                </ScrollView>
                <View style={styles.contact}>
                    <View>
                        <Text style={styles.contactTxt}>contact</Text>
                    </View>
                    <View>
                        <Feather name="arrow-right-circle" size={30} color="darkblue" />
                    </View>
                </View>
            </View>
            <MenuBar/>
        </SafeAreaView>
    )
}
 
export default DashBoard;

const styles = StyleSheet.create({
    dashboard:{
        paddingTop:50,
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
        color:"darkblue",
    },
    seeAll:{
        fontSize:14,
        fontWeight:600,
        color:"darkblue"
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
        marginLeft:8,
    },
    title:{
        fontSize:18,
        fontWeight:900,
        color:"darkblue",
    },
    duration:{
        fontWeight:500,
    },
    price:{
        fontSize:15,
        fontWeight:700,
    },
    sectionThree:{
        marginTop:10,
        backgroundColor:"white",
    },
    contact:{
        marginTop:20,
        paddingHorizontal:10,
        paddingVertical:37,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
    },
    contactTxt:{
        fontSize:20,
        fontWeight:600,
        color:"darkblue",
    }
})