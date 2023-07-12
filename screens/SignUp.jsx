import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Text, SafeAreaView, TextInput, Image, KeyboardAvoidingView, TouchableOpacity} from "react-native";
import Logo from "../assets/logo.png";
import { FIREBASE_AUTH } from "../firebase/" 
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
    const navigation = useNavigation();
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const auth = FIREBASE_AUTH;

    const signUp =  async () => {
      try{
        const response = await createUserWithEmailAndPassword(auth, email, password);
        // alert("Registation Successful")
        navigation.navigate("Login")
      }catch(error){
        console.log(error);
        alert("Sign up failed: " + error.message);
      }
    }

    return(
        <SafeAreaView style={styles.login}>
                <View>
                    <View style={styles.loginImg}>
                        <Image source={Logo} style={styles.img}/>
                    </View>
                    <KeyboardAvoidingView>
                    <View >
                        <Text style={styles.inputTxt}>User Name</Text>
                        <TextInput type="text" value={name} placeholder="Ben Carson" style={styles.input} onChangeText={(text) => setName(text)}/>
                    </View>
                    <View style={styles.loginInput}>
                        <Text style={styles.inputTxt}>Email Address</Text>
                        <TextInput type="text" value={email} placeholder="ben@gmail.com" style={styles.input} onChangeText={(text) => setEmail(text)}/>
                    </View>
                    <View style={styles.loginInput}>
                        <Text style={styles.inputTxt}>Password</Text>
                        <TextInput type="text" value={password} placeholder="password" secureTextEntry style={styles.input} onChangeText={(text) => setPassword(text)}/>
                    </View>
                    <TouchableOpacity style={styles.loginBtn} onPress={signUp}>
                        <Text style={styles.btnTxt}>Sign Up</Text>
                    </TouchableOpacity>
                    <View style={styles.signUp}>
                        <Text style={styles.signUpTxt}>Already have an account? </Text>
                        <Text style={styles.upTxt} onPress={() => navigation.navigate("Login")}>Login</Text>
                    </View>
                    </KeyboardAvoidingView>
                </View>
        </SafeAreaView>
    )
}

export default SignUp;

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
        borderColor:"black",
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
        height:120,
    },
    img:{
        width:200,
        height:200,
    }
})