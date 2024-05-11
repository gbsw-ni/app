/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-undef */
import React from 'react';
import {View, Text} from 'react-native';
import {StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native';
import {useState} from 'react';
import api from '../api/api';

function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [Repassword, setRePassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  function validateForm() {
    return email.length > 0 && password.length > 0 && name.length > 0;
  }

  async function ClickSignup() {
    if (!validateForm()) {
      setErrorMessage('모든 칸을 입력 해주세요.');
      return false;
    }

    if (password !== Repassword) {
      setErrorMessage('올바른 비밀번호를 입력해주세요.');
      return false;
    }

    try {
      //이거는 백엔드 에서 가지고 와야되는거
      let response = await api.post('/user/signup', {
        username: name,
        email: email,
        password: password,
      });
      if (response.data.success) {
        navigation.navigate('Login');
      } else {
        setErrorMessage(
          response.data.message
            ? response.data.message
            : '서버에서 제대로 불러와지지않음',
        );
      }
    } catch (err) {
      console.log(err);
      setErrorMessage('서버연결안됬을 시');
    }
  }

  return (
    <View style={styles4.container}>
      <Image style={{height: 230, width: 220}} source={logo} />
      <TextInput
        onChangeText={text => setName(text)}
        value={name}
        placeholder="  name"
        style={styles4.input}
      />
      <TextInput
        onChangeText={text => setEmail(text)}
        value={email}
        placeholder="  ex)securite@gmail.com"
        style={styles4.input}
      />
      <TextInput
        onChangeText={text => setPassword(text)}
        value={password}
        placeholder="  Password"
        style={styles4.input}
        secureTextEntry={true}
      />
      <TextInput
        onChangeText={text => setRePassword(text)}
        value={Repassword}
        placeholder="  re-Password"
        style={styles4.input}
        secureTextEntry={true}
      />
      <TouchableOpacity onPress={ClickSignup} style={styles4.button}>
        <Text style={styles4.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      {errorMessage ? <Text style={styles4.error}>{errorMessage}</Text> : null}
    </View>
  );
}

const styles4 = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 45,
    paddingLeft: 10,
    marginBottom: 10,
    flexDirection: 'row',
    width: '80%',
    borderWidth: 1.4,
    borderRadius: 40,
    borderStyle: 'solid',
    borderColor: '#A5B1CF',
    margin: 20,
  },
  button: {
    backgroundColor: '#0066ff',
    width: 300,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    margin: 30,
    elevation: 8,
    shadowColor: 'black',
    shadowOpacity: 0.15,
    shadowOffset: {width: 0, height: 5},
    shadowRadius: 5,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 19,
    lineHeight: 19 + 9 / 16,
    fontWeight: '900',
  },
  error: {
    color: 'red',
    marginTop: 10,
  },
});

export default SignupPage;
