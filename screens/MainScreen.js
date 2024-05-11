import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// 이미지 import에 중괄호 제거
import home from './icons/home-Icon';

function MainScreen({navigation}) {
  // handleStartButtonPress 함수 정의
  const handleStartButtonPress = () => {
    // 버튼 클릭 시 수행할 작업
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.MainTextColor, styles.textMargin]}>
        더 나은 삶을 위한
      </Text>
      <Text style={[styles.capstonName, styles.textCapstonName]}>Naeil</Text>
      <TouchableOpacity onPress={handleStartButtonPress} style={styles.button}>
        <Text style={styles.buttonText}>Let's start!</Text>
      </TouchableOpacity>
      {/* IconButton 컴포넌트 추가 */}
      {/*<IconButton />*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0066FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  MainTextColor: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
  },
  textMargin: {
    marginTop: -450,
    alignSelf: 'flex-end',
    margin: 60,
  },
  textCapstonName: {
    marginRight: 60,
    marginTop: -55,
    alignSelf: 'flex-end',
  },
  capstonName: {
    fontSize: 40,
    color: '#fff',
    fontWeight: '300',
  },
  button: {
    backgroundColor: '#fff',
    width: 310,
    height: 60,
    borderRadius: 40,
    position: 'absolute',
    bottom: 90,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#0066FF',
    fontSize: 22,
    fontWeight: '800',
  },
  // iconButton 스타일 추가
  iconButton: {
    // 필요한 스타일 정의
  },
});

export default MainScreen;
