// screens/Loading.js
import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet, ImageBackground } from 'react-native';

const Loading = () => {
  return (
    <ImageBackground
            source={require('../assets/images/wall_2.jpg')}  // Replace with your background image path
            style={styles.container}  // Apply the existing container style
        >
      <ActivityIndicator size="large" color="#0000ff" />
      <Text style={styles.text}>Loading...</Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '', // background color of the loading screen
  },
  text: {
    marginTop: 20,
    fontSize: 20,
  },
});

export default Loading;
