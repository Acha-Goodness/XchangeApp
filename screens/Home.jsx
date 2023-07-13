import React, { useLayoutEffect } from "react";
import { StyleSheet, View, Text, SafeAreaView, ImageBackground } from "react-native";
import MenuBar from "../components/MenuBar";
import { useNavigation } from "@react-navigation/native";
import heroImg from "../assets/appImg/heroImg.jpg";
import * as Animatable from 'react-native-animatable';
import Carousel from "../components/carousel/Carousel";
import data from "../components/carousel/Data";

const Home = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown:false,
        });
    }, []);

    return(
        <SafeAreaView style={styles.home}>
            <View style={styles.hero}>
                <ImageBackground source={heroImg} resizeMode="cover" style={styles.image}>
                    <View style={styles.content}>
                        <Text style={styles.text1}>TGW MONEY EXCHANGE</Text>
                        <Text style={styles.text2}>
                            Enjoy the ease of currency exchange
                        </Text>
                    </View>
                </ImageBackground>
            </View>
            <View style={styles.instruction}>
                <Text style={styles.instTxt}>Step by step process</Text>
                <Animatable.View animation="bounceInRight" easing="ease-in-out" style={styles.steps}>
                    <Text style={styles.stepTxt}>International money transfer</Text>
                </Animatable.View>

                <Animatable.View animation="bounceInRight" easing="ease-in-out" style={styles.steps}>
                    <Text style={styles.stepTxt}>Quick and straight forward</Text>
                </Animatable.View>

                <Animatable.View animation="bounceInRight" easing="ease-in-out" style={styles.steps}>
                    <Text style={styles.stepTxt}>Very easy service to use</Text>
                </Animatable.View>
            </View>
            <View>
                <Carousel data={data}/>
            </View>
            <MenuBar/>
        </SafeAreaView>
    )
}

export default Home;

const styles = StyleSheet.create({
    home:{
        paddingVertical:50,
        paddingHorizontal:8,
    },
    content:{
        paddingVertical:60,
    },
    text1:{
        color:"white",
        textAlign:"center",
        fontSize:30,
        fontWeight:900,
    },
    text2:{
        color:"white",
        textAlign:"center",
        fontWeight:600,
        paddingHorizontal:50,
    },
    instruction:{
        backgroundColor:"white",
        marginTop:8,
        paddingVertical:10,
        paddingHorizontal:8,
    },
    instTxt:{
        fontSize:20,
        fontWeight:800,
    },
    steps:{
        marginTop:10,
        paddingVertical:16,
        shadowColor: "black",
        shadowOffset: {width: 2, height: 4},
        elevation: 6,
        backgroundColor:"skyblue",
        paddingLeft:15,
    },
    stepTxt:{
        fontSize:17,
        fontWeight:600,
    }
})