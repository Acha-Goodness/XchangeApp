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
                        <Text style={styles.text1}>Bull & Bear Exchange</Text>
                        <Text style={styles.text2}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto velit voluptatum.
                        </Text>
                    </View>
                </ImageBackground>
            </View>
            <View style={styles.instruction}>
                <Text style={styles.instTxt}>Step by step process</Text>
                <Animatable.View animation="bounceInRight" easing="ease-in-out" style={styles.steps}>
                    <Text style={styles.stepTxt}>Stop by a local bank</Text>
                </Animatable.View>

                <Animatable.View animation="bounceInRight" easing="ease-in-out" style={styles.steps}>
                    <Text style={styles.stepTxt}>Consider Getting Traveler's Checks.</Text>
                </Animatable.View>

                <Animatable.View animation="bounceInRight" easing="ease-in-out" style={styles.steps}>
                    <Text style={styles.stepTxt}>Order Currency Online.</Text>
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