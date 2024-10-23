import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity,Alert, ImageBackground } from "react-native";
import styles from '../screensStyles/loginStyles';
import { TextInput } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';


const Login = () => {
    const navigation = useNavigation();
    const handleButtonPress = () => {
        Alert.alert(
            "Forgot Password",
            "Password recovery instructions have been sent to your email.",
            [{ text: "OK", onPress: () => console.log("OK Pressed") }]
        );
    };
    const handleButtonPress1 = () => {
        Alert.alert(
            "Alert!",
            "We don't have your account in our database. Please sign up to create account.",
            [{ text: "OK", onPress: () => console.log("OK Pressed") }]
        );
    };

    return (
        <ImageBackground
            source={require('../assets/images/wall_2.jpg')}  // Replace with your background image path
            style={styles.container}  // Apply the existing container style
        >
            <Text style={styles.text}>Log In</Text>
            <Text style={styles.sign}>Please sign in to your existing account</Text>
        <View style={styles.box}>
            <View style={styles.mail}>
                <Text style={styles.email}>Email</Text>
                <TextInput style={styles.example} placeholder="Enter Your Email" autoCapitalize="none" autoCorrect={false}></TextInput>
                <Text style={styles.email}>Pasword</Text>
                <TextInput style={styles.example} placeholder="Enter Your Password" keyboardType="email-address" secureTextEntry={true}></TextInput>
                <TouchableOpacity onPress={handleButtonPress} style={styles.button}>
                <Text style={styles.forgot} >Forgot Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleButtonPress1} style={styles.button1}>
                    <Text style={{ color: "white", fontSize: 15, fontWeight: "700" }}>
                        Log In
                    </Text>
                </TouchableOpacity>
                <Text style={styles.signup}>Don't have an account?</Text>
                <TouchableOpacity onPress={ ()=> navigation.navigate("signup") } style={styles.button}>
                <Text style={styles.up} >Sign Up</Text>
                </TouchableOpacity>
            </View>
            
        </View>
        </ImageBackground>
    )
};

export default Login;
