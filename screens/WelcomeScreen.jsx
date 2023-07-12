import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { StyleSheet, View, Text, SafeAreaView, Image, Pressable } from "react-native";
import logo from "../assets/logo.png";
import Xchng from "../assets/appImg/xcng.png";


const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown:false,
        });
    }, [])
    return(
        <SafeAreaView style={styles.home}>
            <View style={styles.menu}>
                <View>
                    <Image source={logo} style={styles.img}/>
                </View>
                <View>
                    <Text style={styles.logo}>TGWMONEY</Text>
                </View>
            </View>
            <View style={styles.content}>
                <Text style={styles.contentOne}>Enjoy the ease of currency exchange with</Text>
                <Text style={styles.contentTwo}>Good Rate</Text>
                <Text style={styles.contentThree}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sapiente, debitis 
                      eveniet labore error voluptas enim laudantium autem pariatur architecto totam
                </Text>
            </View>
            <View style={styles.imgCont}>
                <Image source={Xchng} style={styles.xcng}/>
            </View>
            <Pressable style={styles.btn} onPress={() => navigation.navigate("Login")}>
                <Text style={styles.btnText}>START</Text>
            </Pressable>
        </SafeAreaView>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    home:{
        backgroundColor:"white",
        flex:1,
        paddingTop:"8%",
        paddingLeft:"3%",
        paddingRight:"3%",
        paddingBottom:"3%"
    },
    menu:{
        alignItems:"center",
    },
    img:{
        width:100,
        height:120,
    },
    logo:{
        marginTop:-35,
        fontSize:25,
        fontWeight:800,
    },
    content:{
        marginTop:20,
    },
    contentOne:{
        fontSize:20,
        fontWeight:700,
        textAlign:"center",
    },
    contentTwo:{
        fontSize:40,
        fontWeight:900,
        textAlign:"center",
    },
    contentThree:{
        textAlign:"center",
    },
    imgCont:{
        justifyContent:"center",
    },
    xcng:{
        width:"100%",
    },
    btn:{
        backgroundColor:"black",
        paddingVertical:15,
        marginTop:-30,
        borderRadius:30,
    },
    btnText:{
        color:"white",
        textAlign:"center",
        fontWeight:900,
        fontSize:20,
    }
})
