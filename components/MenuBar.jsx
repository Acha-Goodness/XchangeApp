import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const MenuBar = () => {
    const navigation = useNavigation()
    return(
        <View style={styles.nav}>
            <AntDesign name="profile" size={35} color="black" onPress={() => navigation.navigate("Profile") } />
            <Pressable style={styles.navHome} onPress={() => navigation.navigate("Home")}>
                <Ionicons name="ios-home" size={35} color="white" />
            </Pressable>
            <MaterialIcons name="dashboard" size={35} color="black" onPress={() => navigation.navigate("Dash Board")}/>
        </View>
    )
}

export default MenuBar;
const styles = StyleSheet.create({
    nav:{
        height:60,
        backgroundColor:"white",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-evenly",
        shadowColor: "black",
        shadowOffset: {width: 6, height: 4},
        elevation: 6,
        borderColor:"darkblue",
        marginTop:6,
    },
    navHome:{
        backgroundColor:"black",
        width:80,
        height:80,
        justifyContent:"center",
        alignItems:"center",
        position:"relative",
        borderRadius:50,
        top:-15,
        shadowColor: "black",
        shadowOffset: {width: 0, height: 4},
        elevation: 6,
    }
})