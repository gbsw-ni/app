import {useState} from 'react';
import {
  View,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

import {logo} from '../img/logo1.png';

const LoginPage = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeTextEmail = text => {
    setEmail(text);
  };

  const onChangeTextPassword = text => {
    setPassword(text);
  };
  const clickLogin = () => {};
  return (
    <View style={styles3.container}>
      <Image style={{height: 230, width: 220}} source={logo} />
      <TextInput
        onChangeText={onChangeTextEmail}
        value={email}
        placeholder="  ex)securite@gmail.com"
        style={styles3.input}
      />
      <TextInput
        onChangeText={onChangeTextPassword}
        value={password}
        placeholder="  Password"
        style={styles3.input}
        secureTextEntry={true}
      />
      <TouchableOpacity onPress={clickLogin} style={styles3.button}>
        <Text style={styles3.buttonText}>Log in</Text>
      </TouchableOpacity>
    </View>
  );
};
//로그인 페이지 css
const styles3 = StyleSheet.create({
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
});
export default LoginPage;
