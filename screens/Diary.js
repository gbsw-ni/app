/* eslint-disable react/react-in-jsx-scope */
import {TouchableOpacity, Image, StyleSheet, View, Text} from 'react-native';

import {check} from '../icons/check';

const Diary = ({navigation}) => {
  return (
    <View style={styles5.container}>
      <View style={styles5.buttonContainer}>
        <TouchableOpacity style={styles5.checkBox}>
          <Image style={styles5.check1} source={check} />
        </TouchableOpacity>
        <TouchableOpacity style={styles5.checkBox}>
          <Image style={styles5.check1} source={check} />
        </TouchableOpacity>
        <TouchableOpacity style={styles5.checkBox}>
          <Image style={styles5.check1} source={check} />
        </TouchableOpacity>
        <TouchableOpacity style={styles5.checkBox}>
          <Image style={styles5.check1} source={check} />
        </TouchableOpacity>
      </View>
      <Text style={styles5.MainText}>클릭 시 그날의 일기가 확인 됩니다!</Text>
    </View>
  );
};

const styles5 = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
  /*icon:{
        marginTop:25,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"
    },
    left: {
        marginLeft:-1,
        height: 25,
        width: 30,
    },
    right: {
        marginLeft:305,
        height: 25,
        width: 30,
    },*/
  MainText: {
    fontSize: 21,
    textAlign: 'center',
    fontWeight: '900',
    color: '#CCCCCC',
    marginBottom: 20,
  },
  bar: {
    height: 50,
    width: 70,
    backgroundColor: '#0066FF',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  checkBox: {
    width: 79,
    height: 80,
    backgroundColor: '#0066FF',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 6,
  },
  check1: {
    width: 65,
    height: 55,
  },
});
