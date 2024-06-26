import React, {useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  Text,
  SafeAreaView,
  Pressable,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import image from './images/profile1.png';
import LinearGradient from 'react-native-linear-gradient';

let level = 0;
let progress_gauge = 45 * 5; //max = 64*5;

const PROFILE = [
  {
    name: '홍길동',
    email: 'kimyoujin0821@gmail.com',
  },
];

const RAND_MISSION_IN = [
  {
    RAND_MISSION_IN_id: 1,
    mission_image: require('./images/random_mission1.jpeg'),
    mission_name: '이불 개기',
    mission_expla: '이불을 개며 하루를 다르게 시작해보세요!',
  },
  {
    RAND_MISSION_IN_id: 2,
    mission_image: require('./images/random_mission2.jpeg'),
    mission_name: '스트레칭 하기',
    mission_expla:
      '스트레칭을 통해 긴장된 근육을 풀어 질 좋은 하루를 느껴보세요!',
  },
  {
    RAND_MISSION_IN_id: 3,
    mission_image: require('./images/random_mission3.jpeg'),
    mission_name: '창문 열기',
    mission_expla: '창문을 열어서 상쾌한 공기를 느껴보세요!',
  },
];

const RAND_MISSION_OUT = [
  {
    RAND_MISSION_OUT_id: 1,
    mission_image: require('./images/random_mission4.jpeg'),
    mission_name: '편의점으로 외출하기',
    mission_expla:
      '가까운 편의점으로 가서 상쾌한 공기와 맛있는 음식들을 맛보세요!',
  },
  {
    RAND_MISSION_OUT_id: 2,
    mission_image: require('./images/random_mission5.jpeg'),
    mission_name: '0km 걷기',
    mission_expla: '0km를 걸어보며 건강이 좋아지는 기분과 상쾌함을 느껴보세요!',
  },
];

function Main_Screen() {
  const [scrolling, setScrolling] = useState(false);
  const [selectedMission, setSelectedMission] = useState(null);

  const handleScroll = event => {
    setScrolling(event.nativeEvent.contentOffset.y !== 0);
  };

  const handlePress = index => {
    if (!scrolling) {
      console.log('pressed');
      setSelectedMission(index);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{flexDirection: 'row', marginBottom: hp(2.5)}}>
          <Image
            style={{
              width: wp(27),
              height: wp(27),
              overflow: 'hidden',
              borderRadius: 100 / 2,
              marginTop: hp(5),
              marginLeft: wp(10),
              marginRight: wp(5),
            }}
            source={image}
          />
          <Text
            style={{
              color: 'black',
              fontWeight: '900',
              fontSize: hp(3),
              marginTop: hp(6.5),
              letterSpacing: wp(2),
            }}>
            {PROFILE[0].name}
            {'\n'}
            <Text
              style={{
                fontSize: hp(2),
                color: '#CACACA',
                paddingTop: hp(100),
                letterSpacing: wp(0),
              }}>
              {PROFILE[0].email}
            </Text>
          </Text>
        </View>
        <View style={styles.progress_view}>
          <Text
            style={{
              backgroundColor: '#0029FF',
              width: progress_gauge,
              marginTop: wp(1.5),
              marginLeft: wp(1.5),
              borderRadius: wp(3),
            }}>
            게이지
          </Text>  
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: wp(10),
          }}>
          <Text style={styles.level}>Lv.{level}</Text>
          <Text style={styles.level}>Lv.{level + 1}</Text>
        </View>
        <Text
          style={{
            marginLeft: wp(7),
            marginTop: hp(1),
            fontSize: hp(3.5),
            color: '#black',
            fontWeight:'900',
          }}>
          inside
        </Text>
        <ScrollView
          horizontal
          style={{height: wp(57)}}
          scrollEnabled={!scrolling}
          onScroll={handleScroll}>
          {RAND_MISSION_IN.map(inside_item => (
            <Pressable style={{height: wp(53)}} onPress={handlePress}>
              <View
                key={inside_item.RAND_MISSION_IN_id}
                style={styles.mission_list}>
                <Image
                  source={inside_item.mission_image}
                  style={styles.mission_image}
                />
                <Text style={styles.mission_name}>
                  {inside_item.mission_name}
                </Text>
              </View>
            </Pressable>
          ))}
        </ScrollView>
        <Text
          style={{
            fontWeight:'900',
            marginLeft: wp(7),
            marginTop: hp(1),
            fontSize: hp(3.5),
            color: 'black',
          }}>
          outside
        </Text>
        <ScrollView
          horizontal
          style={{height: wp(57)}}
          scrollEnabled={handlePress}
          onScroll={handleScroll}>
          {RAND_MISSION_OUT.map(outside_item => (
            <Pressable style={{height: wp(53)}} onPress={handlePress}>
              <View
                key={outside_item.RAND_MISSION_OUT_id}
                style={styles.mission_list}>
                <Image
                  source={outside_item.mission_image}
                  style={styles.mission_image}
                />
                <Text style={styles.mission_name}>
                  {outside_item.mission_name}
                </Text>
              </View>
            </Pressable>
          ))}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  progress_view: {
    backgroundColor: 'white',
    width: wp(85),
    height: wp(8),
    marginHorizontal: wp(7.5),
    borderRadius: wp(3),
    elevation: 8,
    shadowColor: 'black',
    shadowOpacity: 0.15,
    shadowOffset: {width: 0, height: 5},
    shadowRadius: wp(5),
  },
  level: {
    color: '#0029FF',
    fontSize: hp(2),
    fontWeight: '900',
  },
  mission_list: {
    backgroundColor: 'white',
    flex: 1,
    marginHorizontal: wp(3),
    marginTop: wp(2),
    shadowColor: 'black',
    shadowOpacity: 0.15,
    padding: wp(3),
    borderRadius: wp(4),
    elevation: 8,
    // eslint-disable-next-line no-dupe-keys
    shadowColor: 'black',
    // eslint-disable-next-line no-dupe-keys
    shadowOpacity: 0.15,
    shadowOffset: {width: 0, height: 5},
    shadowRadius: wp(5),
  },
  mission_name: {
    flex: 1,
    fontSize: hp(2.3),
    color: 'black',
  },
  mission_image: {
    width: wp(52),
    height: wp(35),
    objectFit: 'cover',
    marginBottom: wp(2),
    borderRadius: wp(5),
  },
});

export default Main_Screen;
