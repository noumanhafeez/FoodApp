import {Platform, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dfbdfc',
    alignItems: 'center',
  },
  imgStyle: {
    marginTop: 110,
    height: 330,
    width: 330,
    left: 17,
  },
  head: {
    top: 20,
    fontSize: 27,
    fontWeight: '700',
    color: '#a949fc',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // Ensures image covers entire screen
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)', // Optional dark overlay with opacity
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleBox: {
    marginTop: 30,
    alignContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 17,
    color: '#a949fc',
  },
  button: {
    padding: 22,
    borderRadius: 18,
    backgroundColor: '#8a13f2',
    top: Platform.OS === 'ios' ? 95 : 60,
    alignItems: 'center',
  },
  button1: {
    padding: 22,
    borderRadius: 18,
    top: Platform.OS === 'ios' ? 95 : 55,
    alignItems: 'center',
  },
  dot: {
    height: 9,
    width: 9,
    borderRadius: 20,
    marginHorizontal: 20,
    alignContent: 'center',
    backgroundColor: '#8a13f2',
  },
  slide: {
    width: '40%', // Full width for each image
    justifyContent: 'center',
    left: 40,
    marginHorizontal: 0,
    //alignItems: 'center',
  },
  imgstyle: {
    width: '100%', // Ensure the image takes full width
    height: 250, // Adjust height as needed
    resizeMode: 'cover', // Keep aspect ratio
  },
});

export default styles;
