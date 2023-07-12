import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, SafeAreaView, TextInput, Image, KeyboardAvoidingView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Logo from "../assets/logo.png";
import { FIREBASE_AUTH } from "../firebase/" 
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
    const navigation = useNavigation();

    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const auth = FIREBASE_AUTH;


    const signIn =  async () => {
      try{
        const response = await signInWithEmailAndPassword(auth, email, password);
        alert("LogIn Successful")
        navigation.navigate("Home")
      }catch(error){
        alert("Sign in failed: " + error.message);
      }
    }



    return(
        <SafeAreaView style={styles.login}>
            <KeyboardAvoidingView>
            <View>
                <View style={styles.loginImg}>
                    <Image source={Logo} style={styles.img}/>
                </View>
                <View >
                    <Text style={styles.inputTxt}>Email Address</Text>
                    <TextInput type="email" value={email} placeholder="acha@gmail.com" style={styles.input} onChangeText={(text) => setEmail(text)}/>
                </View>
                <View style={styles.loginInput}>
                    <Text style={styles.inputTxt}>Password</Text>
                    <TextInput type="text" value={password} placeholder="password" secureTextEntry style={styles.input} onChangeText={(text) => setPassword(text)}/>
                </View>
                <TouchableOpacity style={styles.loginBtn} onPress={signIn}>
                    <Text style={styles.btnTxt}>Login</Text>
                </TouchableOpacity>
                <View style={styles.signUp}>
                    <Text style={styles.signUpTxt}>Don't  have an acount? </Text>
                    <Text style={styles.upTxt} onPress={() => navigation.navigate("Sign Up")}>Sign Up</Text>
                </View>
            </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default Login;

const styles = StyleSheet.create({
    login:{
        flex:1,
        backgroundColor:"white",
        paddingVertical:20,
        paddingHorizontal:10
    },
    inputTxt:{
        fontSize:20,
        fontWeight:500,
        marginBottom:5,
    },
    loginInput:{
        marginTop:30,
    },
    input:{
        paddingVertical:15,
        paddingLeft:10,
        backgroundColor:"white",
        shadowColor: "black",
        shadowOffset: {width: -2, height: 4},
        elevation: 4,
        borderRadius:10,
    },
    loginBtn:{
        marginTop:30,
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
    signUp:{
        marginTop:10,
        flexDirection:"row",
        justifyContent:"flex-end",
    },
    signUpTxt:{
        fontSize:20,
        fontWeight:500,
        marginRight:10,
    },
    upTxt:{
        fontSize:20,
        fontWeight:500,
        color:"blue",
        marginRight:5,
    },
    loginImg:{
        justifyContent:"center",
        alignItems:"center",
        height:150,
    },
    img:{
        width:200,
        height:200,
    }
})