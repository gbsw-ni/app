import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  ScrollView,
  Pressable,
  Image,
  Dimensions,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

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
    mission_expla: '스트레칭을 통해 긴장된 근육을 풀어 질 좋은 하루를 느껴보세요!',
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
    mission_expla: '가까운 편의점으로 가서 상쾌한 공기와 맛있는 음식들을 맛보세요!',
  },
  {
    RAND_MISSION_OUT_id: 2,
    mission_image: require('./images/random_mission5.jpeg'),
    mission_name: '0km 걷기',
    mission_expla: '0km를 걸어보며 건강이 좋아지는 기분과 상쾌함을 느껴보세요!',
  },
];

const USER_MISSION = [
  {
    USER_MISSION_id: 1,
    mission_image: RAND_MISSION_IN[0].mission_image,
    mission_name: RAND_MISSION_IN[0].mission_name,
    mission_success: 0,
  },
  {
    USER_MISSION_id: 2,
    mission_image: RAND_MISSION_OUT[0].mission_image,
    mission_name: RAND_MISSION_OUT[0].mission_name,
    mission_success: 0,
  },
  {
    USER_MISSION_id: 3,
    mission_image: RAND_MISSION_IN[0].mission_image,
    mission_name: '특정길이이상이면..',
    mission_success: 0,
  },
  {
    USER_MISSION_id: 4,
    mission_image: RAND_MISSION_IN[0].mission_image,
    mission_name: '특정길이이상이면..',
    mission_success: 0,
  },
  {
    USER_MISSION_id: 5,
    mission_image: RAND_MISSION_IN[0].mission_image,
    mission_name: '특정길이이상이면..',
    mission_success: 0,
  },
  {
    USER_MISSION_id: 6,
    mission_image: RAND_MISSION_IN[0].mission_image,
    mission_name: '특정길이이상이면..',
    mission_success: 0,
  },
  {
    USER_MISSION_id: 7,
    mission_image: RAND_MISSION_IN[0].mission_image,
    mission_name: '특정길이이상이면..',
    mission_success: 0,
  },
];

const data = [20, 45, 28, 80, 99, 43]; // 예시 데이터
const GRAPH_MARGIN = 20;
const GRAPH_HEIGHT = 220;

const Chart_Goal_Screen = () => {
  const [dimensions, setDimensions] = useState(Dimensions.get('window'));

  useEffect(() => {
    const subscription = Dimensions.addEventListener("change", ({ window }) => {
      setDimensions(window);
    });
    return () => subscription.remove();
  }, []);

  const scaleX = (dimensions.width - GRAPH_MARGIN * 2) / (data.length - 1);
  const scaleY = Math.max(...data);

  const points = data.map((point, index) => {
    const x = index * scaleX + GRAPH_MARGIN;
    const y = GRAPH_HEIGHT - (point / scaleY) * GRAPH_HEIGHT;
    return { x, y };
  });

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>차트로 보는 나의 목표성과 그래프</Text>
      <View style={[styles.graphContainer, { width: dimensions.width }]}>
        {points.map((point, index) => (
          <View key={index} style={[styles.point, { left: point.x, top: point.y }]} />
        ))}
        {points.slice(1).map((point, index, arr) => (
          <View key={index} style={{
            position: 'absolute',
            left: arr[index].x,
            width: point.x - arr[index].x,
            top: arr[index].y,
            height: 1,
            backgroundColor: 'blue',
          }} />
        ))}
      </View>
    <Text style={styles.label}>
          그래프가 {data[data.length - 1] < data[data.length - 2] ? 
      <Text style={{color: '#0066FF'}}>하락</Text> : 
      <Text style={{color: '#0066FF'}}>상승</Text>}하고 있어요!
    </Text>
      <Text style={styles.solutionText}>그래프 상승을 위한 솔루션을 추천해드릴게요!</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.missionScroll}>
        {USER_MISSION.map((mission, index) => (
          <View key={index} style={styles.missionCard}>
            <Image source={mission.mission_image} style={styles.missionImage} />
            <Text style={styles.missionText}>{mission.mission_name}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  graphContainer: {
    height: GRAPH_HEIGHT,
    backgroundColor: '#f9f9f9',
    marginVertical: hp(2),
    borderColor: '#0029FF',
    borderWidth: 1,
    marginTop: hp(5),
    borderRadius: 10,
    width:250,
  },
  title: {
    fontSize: hp(2.9),
    color: 'black',
    fontWeight: 'bold',
    marginTop: wp(20),
    alignSelf: 'center',
  },
  label: {
    fontSize: hp(3),
    color: 'black',
    fontWeight: 'bold',
    marginTop: wp(5),
    marginLeft:95,
  },
  point: {
    position: 'absolute',
    width: 5,
    height: 5,
    backgroundColor: 'blue',
    borderRadius: 5 / 2,
  },
  line: {
    position: 'absolute',
    height: 1,
    backgroundColor: 'blue',
  },
  missionScroll: {
    width: '100%',
    height: 100,
    marginTop: 20,
  },
  missionCard: {
    width: 240,
    height: 185,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    marginRight: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  missionImage: {
    width: 220,
    height: 130,
    borderRadius: 20,
  },
  missionText: {
    fontSize: 17,
    color: '#333',
    marginTop:8,
    marginRight:80,
    fontWeight:'900',
  },
  solutionText: {
    fontSize: hp(2),
    color: 'black',
    fontWeight: 'bold',
    marginTop: hp(3),
    marginBottom: hp(1),
    marginLeft:70,
  },
});
export default Chart_Goal_Screen;
