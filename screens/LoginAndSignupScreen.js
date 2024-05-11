/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TouchableOpacity, View, Text, Image, StyleSheet} from 'react-native';
import {logo} from '../img/logo1.png';

function LoginAndSignupScreen({}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Image style={{height: 230, width: 220}} source={logo} />
      <Text style={styles2.LoginAndSignuptitle}>Naeil</Text>

      <TouchableOpacity style={styles2.Login}>
        <Text style={styles2.buttonText}>Log in</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles2.Signup}>
        <Text style={styles2.buttonText}>sign up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles2 = StyleSheet.create({
  LoginAndSignuptitle: {
    color: '#000000',
    fontFamily: 'ArialMT',
    fontSize: 35,
  },
  Login: {
    backgroundColor: '#0066ff',
    width: 300,
    height: 55,
    justifyContent: 'center',
    margin: 30,
    borderRadius: 30,
    elevation: 8,
    shadowColor: 'black',
    shadowOpacity: 0.15,
    shadowOffset: {width: 0, height: 5},
    shadowRadius: 5,
  },
  Signup: {
    backgroundColor: '#0066ff',
    width: 300,
    height: 55,
    justifyContent: 'center',
    borderRadius: 30,
    elevation: 8,
    shadowColor: 'black',
    shadowOpacity: 0.15,
    shadowOffset: {width: 0, height: 5},
    shadowRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#ffffff',
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: '900',
  },
});
export default LoginAndSignupScreen;
