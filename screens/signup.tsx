import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity,Alert, ImageBackground } from "react-native";
import styles from '../screensStyles/signupStyles';
import { TextInput } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';


const Signup = () => {
    const navigation = useNavigation();
    const handleButtonPress = () => {
        Alert.alert(
            "Successfully Sign up!",
            "The activation link will be sent to your given email.",
            [{ text: "OK", onPress: () => console.log("OK Pressed") }]
        );
    };
    const handleButtonPress1 = () => {
        
            navigation.navigate('signup');
    };

    return (
        <ImageBackground
            source={require('../assets/images/wall_2.jpg')}  // Replace with your background image path
            style={styles.container}  // Apply the existing container style
        >
            <Text style={styles.text}>Sign Up</Text>
            <Text style={styles.sign}>Please sign up to get start</Text>
        <View style={styles.box}>
            <View style={styles.mail}>
                <Text style={styles.email}>Name</Text>
                <TextInput style={styles.example} placeholder="John Doe"  autoCorrect={false} ></TextInput>
                <Text style={styles.email}>Email</Text>
                <TextInput style={styles.example} placeholder="example@gmail.com"  autoCapitalize="none" autoCorrect={false}></TextInput>
                <Text style={styles.email}>Password</Text>
                <TextInput style={styles.example} placeholder="Enter your password" secureTextEntry={true}></TextInput>
                <Text style={styles.email}>Re-Type Password</Text>
                <TextInput style={styles.example} placeholder="Re-type your password" secureTextEntry={true}></TextInput>        
                <TouchableOpacity onPress={handleButtonPress} style={styles.button1}>
                    <Text style={{ color: "white", fontSize: 15, fontWeight: "700" }}>
                        Sign Up
                    </Text>
                </TouchableOpacity>
            </View>
            
            </View>
        </ImageBackground>
    )
};

export default Signup;
