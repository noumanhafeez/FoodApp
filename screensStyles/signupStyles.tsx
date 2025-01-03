import {Platform, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dfbdfc',
    alignItems: 'center',
  },
  text: {
    top: Platform.OS === 'ios' ? 170 : 150,
    fontSize: 30,
    fontWeight: '600',
    fontStyle: 'italic',
    color: '#8a13f2',
    fontFamily: 'Times New Roman',
  },
  sign: {
    top: 175,
    fontSize: 18,
    fontWeight: '600',
    fontStyle: 'italic',
    color: '#8a13f2',
    fontFamily: 'Times New Roman',
  },
  box: {
    width: Platform.OS === 'ios' ? 402 : 411,
    borderTopLeftRadius: 40,
    height: 570,
    borderTopEndRadius: 40,
    marginTop: Platform.OS === 'ios' ? 250 : 140,
    backgroundColor: '#a949fc',
  },
  mail: {
    position: 'absolute',
    left: 40,
    top: 30,
    width: 320,
    height: 100,
  },
  email: {
    fontSize: 20,
    left: 7,
    color: '#50098f',
    fontStyle: 'italic',
    fontFamily: 'Times New Roman',
  },
  example: {
    height: 45,
    left: 10,
    top: 10,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    marginBottom: 30,
    backgroundColor: '#d1a9f5',
  },
  check: {
    left: 200,
    color: 'orange',
    fontWeight: '600',
  },
  forgot: {
    left: 200,
    color: '#f58b3b',
  },
  button1: {
    padding: 22,
    borderRadius: 18,
    backgroundColor: '#8a13f2',
    top: 30,
    alignItems: 'center',
  },
  signup: {
    fontSize: 16,
    fontWeight: '400',
    top: 60,
    left: 26,
  },
  up: {
    left: 205,
    top: 40,
    color: '#f58b3b',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default styles;
