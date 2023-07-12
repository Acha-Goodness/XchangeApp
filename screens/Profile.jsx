import React, { useLayoutEffect } from "react";
import { StyleSheet, View, Text, SafeAreaView, Image, Pressable  } from "react-native";
import MenuBar from "../components/MenuBar";
import { useNavigation } from "@react-navigation/native";
import ProfilePix from "../assets/appImg/pix.jpg";
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Profile = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown:false
        })
    },[])

    return(
        <SafeAreaView style={styles.profile}>
            <View>
                <View style={styles.proBoard}>
                    <Image source={ProfilePix} style={styles.proImg}/>
                    <View style={styles.dashName}>
                        <Text style={styles.userName}>Mark Carson</Text>
                        <Text style={styles.userBlc}>Total Balance: N300,000</Text>
                    </View>
                </View>

                <View style={styles.proBalance}>
                    <View style={styles.proWallet}>
                        <Text style={styles.userName}>Point</Text>
                        <Text style={styles.userBlc}>N4000</Text>
                    </View>
                    
                    <View style={styles.proWallet}>
                        <Text style={styles.userName}>Balance in wallet</Text>
                        <Text style={styles.userBlc}>N300,000</Text>
                    </View>
                </View>
                <View style={styles.proOptions}>
                    <View style={styles.proLists}>
                        <View style={styles.proItems}>
                        <FontAwesome5 name="piggy-bank" size={30} color="darkblue" />
                            <Text style={styles.proTxt}>Cards / Bank Accounts</Text>
                        </View>
                        <MaterialIcons name="double-arrow" size={24} color="darkblue" />
                    </View>

                    <View style={styles.proLists}>
                        <View style={styles.proItems}>
                            <FontAwesome5 name="servicestack" size={30} color="darkblue" />
                            <Text style={styles.proTxt}>Affiliate Services</Text>
                        </View>
                        <MaterialIcons name="double-arrow" size={24} color="darkblue" />
                    </View>

                    <View style={styles.proLists}>
                        <View style={styles.proItems}>
                        <FontAwesome name="group" size={30} color="darkblue" />
                            <Text style={styles.proTxt}>Manage Group of friends</Text>
                        </View>
                        <MaterialIcons name="double-arrow" size={24} color="darkblue" />
                    </View>

                    <View style={styles.proLists}>
                        <View style={styles.proItems}>
                        <MaterialIcons name="security" size={30} color="darkblue" />
                            <Text style={styles.proTxt}>Payment Security</Text>
                        </View>
                        <MaterialIcons name="double-arrow" size={24} color="darkblue" />
                    </View>

                    <View style={styles.proLists}>
                        <View style={styles.proItems}>
                            <Ionicons name="ios-settings" size={30} color="darkblue" />
                            <Text style={styles.proTxt}>Settings</Text>
                        </View>
                        <MaterialIcons name="double-arrow" size={24} color="darkblue" />
                    </View>
                </View>
                <Pressable style={styles.loginBtn} onPress={() => navigation.navigate("Login")}>
                    <Text style={styles.btnTxt}>Log Out</Text>
                </Pressable>
            </View>
            <MenuBar/>
        </SafeAreaView>
    )
}

export default Profile;

const styles = StyleSheet.create({
    profile:{
        paddingTop:55,
        paddingHorizontal:8
    },
    proBoard:{
        paddingVertical:20,
        paddingHorizontal:5,
        backgroundColor:"white",
        flexDirection:"row",
        alignItems:"center",
    },
    proImg:{
        width:80,
        height:80,
        borderRadius:100,
    },
    userName:{
        color:"black",
        fontSize:20,
        fontWeight:500,
    },
    userBlc:{
        color:"black",
        fontWeight:500,
    },
    dashName:{
        marginLeft:10,
    },
    proBalance:{
        marginTop:10,
        paddingHorizontal:5,
        backgroundColor:"white",
    },
    proWallet:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingVertical:15,
    },
    proOptions:{
        backgroundColor:"white",
        marginTop:10,
        paddingHorizontal:5,
        paddingVertical:11,
    },
    proLists:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingVertical:18,
        paddingHorizontal:10,
        marginTop:8,
        shadowColor: "black",
        shadowOffset: {width: -2, height: 4},
        elevation: 1,
    },
    proItems:{
        flexDirection:"row",
        alignItems:"center",
    },
    proTxt:{
        marginLeft:10,
        fontSize:16,
        fontWeight:900,
    },
    loginBtn:{
        marginBottom:23,
        backgroundColor:"black",
        paddingVertical:20,
        textAlign:"center",
        borderRadius:10,
        cursor:'pointer'
    },
    btnTxt:{
        color:"white",
        textAlign:"center",
        fontSize:20,
        fontWeight:600,
    },
})