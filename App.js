import { TouchableOpacity, Image, StyleSheet, View, Text } from 'react-native';

// 이미지를 직접 require로 가져옵니다.
const check = require('./icons/check.png');

const Diary = ({navigation}) => {
  return (
    <View style={styles5.container}>
      <View style={styles5.header}></View>
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
      <View style={styles5.centeredTextContainer}>
        <Text style={styles5.MainText}>클릭 시 그날의 일기가 확인 됩니다!</Text>
      </View>
    </View>
  );
};

const styles5 = StyleSheet.create({
  header:{
    borderBottomColor:'black',
    marginTop: 20,
  },
  container: {
    alignItems: 'center',
    flex: 1,
  },
  MainText: {
    fontSize: 21,
    textAlign: 'center',
    fontWeight: '900',
    color: '#CCCCCC',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  checkBox: {
    width: 79,
    height: 80,
    marginTop: 70,
    backgroundColor: '#0066FF',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 6,
  },
  check1: {
    width: 65,
    height: 55,
  },
  centeredTextContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});

export default Diary;
