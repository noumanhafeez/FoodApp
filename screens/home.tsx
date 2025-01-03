import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import styles from '../screensStyles/homeStyles';
import {useNavigation} from '@react-navigation/native';

const imagesData = [
  {
    id: '1',
    source: require('../assets/images/pizza.png'),
    text: 'All your favorites!',
  },
  {
    id: '2',
    source: require('../assets/images/pizza1.png'),
    text: 'Order from chosen chef!',
  },
  {
    id: '3',
    source: require('../assets/images/pizza2.png'),
    text: 'Free delivery offers!',
  },
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigation = useNavigation();
  const handleButtonPress = () => {
    if (currentIndex < imagesData.length - 1) {
      // Move to the next image and text
      setCurrentIndex(currentIndex + 1);
    } else {
      navigation.navigate('login');
    }
  };

  return (
    <ImageBackground
      source={require('../assets/images/wall_2.jpg')} // Replace with your background image path
      style={styles.container} // Apply the existing container style
    >
      <Image source={imagesData[currentIndex].source} style={styles.imgStyle} />
      <Text style={styles.head}>{imagesData[currentIndex].text}</Text>
      <View style={styles.titleBox}>
        <Text style={styles.title}>
          Get all your loved foods in one place,{'\n'}
          you just place the order we do the rest!
        </Text>
        <View style={{flexDirection: 'row', top: 30, justifyContent: 'center'}}>
          {imagesData.map((_, index) => (
            <View
              key={index}
              style={[styles.dot, {opacity: index === currentIndex ? 1 : 0.5}]}
            />
          ))}
        </View>
        <TouchableOpacity onPress={handleButtonPress} style={styles.button}>
          <Text style={{color: 'white', fontSize: 15, fontWeight: '700'}}>
            {currentIndex < imagesData.length - 1 ? 'NEXT' : 'GET STARTED'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleButtonPress} style={styles.button1}>
          <Text style={{color: '#8a13f2'}}>Skip</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Home;
