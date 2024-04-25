/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  Text,
  SafeAreaView,
  Pressable,
  TextInput,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const FRIENDS_LIST = [
  {
    user_image: require('../images/profile1.png'),
    user_name: '손보석',
    user_code: '#02BS12',
  },
  {
    user_image: require('../images/profile1.png'),
    user_name: '김유진',
    user_code: '#14YJ04',
  },
  {
    user_image: require('../images/profile1.png'),
    user_name: '구본윤',
    user_code: '#07BY24',
  },
  {
    user_image: require('../images/profile1.png'),
    user_name: '박민서',
    user_code: '#71MS88',
  },
  {
    user_image: require('../images/profile1.png'),
    user_name: '김용진',
    user_code: '#02YJ16',
  },
  {
    user_image: require('../images/profile1.png'),
    user_name: '김용진',
    user_code: '#02YJ16',
  },
  {
    user_image: require('../images/profile1.png'),
    user_name: '김용진',
    user_code: '#02YJ16',
  },
  {
    user_image: require('../images/profile1.png'),
    user_name: '김용진',
    user_code: '#02YJ16',
  },
];

function Share_Goal_Screen_Friends() {
  const [searchInputValue, setSearchInputValue] = useState('');
  const [pressedButtons, setPressedButtons] = useState({});

  const handleSearchInputValue = text => {
    setSearchInputValue(text); // 텍스트 입력값을 변경
  };

  const handlePressAdd = index => {
    console.log('pressed add friend to share goal');
    setPressedButtons(prevState => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flexDirection: 'row', marginTop: hp(4)}}>
        <Pressable
          onPressIn={() => {
            console.log('pressed back');
          }}
          style={{
            backgroundColor: 'white',
            width: wp(5),
            marginLeft: wp(8),
          }}>
          <Image source={require('../icons/back_icon.png')} />
        </Pressable>
        <Text
          style={{
            color: 'black',
            fontWeight: 'bold',
            fontSize: hp(2.3),
            marginLeft: wp(18),
            marginTop: wp(2),
          }}>
          함께할 친구 리스트
        </Text>
        <Pressable
          onPressIn={() => {
            console.log('pressed success');
          }}
          style={{
            backgroundColor: 'white',
            width: wp(10),
            marginLeft: wp(15),
            marginTop: wp(2),
          }}>
          <Text style={{color: 'black'}}>완료</Text>
        </Pressable>
      </View>
      <View style={{marginTop: hp(4)}}>
        <TextInput
          style={styles.search_box}
          value={searchInputValue}
          onChangeText={handleSearchInputValue}
          placeholder="검색"
        />
        <Pressable
          onPressIn={() => {
            console.log('pressed success');
          }}
          style={{
            backgroundColor: 'white',
            width: wp(10),
            position: 'absolute',
            marginTop: hp(1.4),
            marginLeft: wp(84),
          }}>
          <Image source={require('../icons/search_icon.png')} />
        </Pressable>
      </View>
      <ScrollView style={{marginBottom: hp(10)}}>
        {FRIENDS_LIST.map((user_item, index) => (
          <View key={index} style={{marginVertical: wp(1)}}>
            <View style={styles.friends_list}>
              <Image source={user_item.user_image} style={styles.user_image} />
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={{
                  width: wp(17),
                  color: 'black',
                  fontWeight: 'bold',
                  fontSize: hp(1.8),
                  paddingVertical: wp(4),
                  marginLeft: wp(6),
                  marginRight: wp(2),
                }}>
                {user_item.user_name}
              </Text>
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={{
                  width: wp(15),
                  color: 'black',
                  fontSize: hp(1.8),
                  paddingVertical: wp(4),
                }}>
                {user_item.user_code}
              </Text>
              <Pressable
                style={[
                  styles.add_button,
                  {backgroundColor: pressedButtons[index] ? 'red' : '#0066FF'},
                ]}
                onPress={() => handlePressAdd(index)}>
                <Text
                  style={{
                    color: 'white',
                    fontWeight: 'bold',
                    alignSelf: 'center',
                    marginTop: hp(0.3),
                  }}>
                  {pressedButtons[index] ? '취소' : '추가'}
                </Text>
              </Pressable>
            </View>
          </View>
        ))}
      </ScrollView>
      <Text
        style={{
          height: wp(10),
          fontSize: hp(1.3),
          marginBottom: hp(15),
          marginLeft: wp(16),
        }}>
        가이드 위반이 되는 목표 작성 시 별도의 제재를 받을 수 있습니다.
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: hp(100),
  },
  search_box: {
    alignSelf: 'center',
    width: wp(90),
    height: wp(12),
    backgroundColor: 'white',
    borderRadius: wp(5),
    elevation: 11,
    shadowColor: '#585A58',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 5},
    shadowRadius: wp(5),
    paddingHorizontal: wp(5),
    paddingRight: wp(14),
    marginBottom: hp(3),
  },
  friends_list: {
    height: hp(8),
    width: wp(80),
    alignSelf: 'center',
    flexDirection: 'row',
    marginBottom: wp(2.5),
  },
  user_image: {
    width: wp(15),
    height: wp(15),
    borderRadius: wp(7),
  },
  add_button: {
    width: wp(16),
    height: wp(7),
    borderRadius: wp(9),
    backgroundColor: '#0066FF',
    marginVertical: wp(3.5),
    marginLeft: wp(4),
    elevation: 7,
    shadowColor: '#0066FF',
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 5},
    shadowRadius: wp(5),
  },
});

export default Share_Goal_Screen_Friends;
