import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  ScrollView,
  Pressable,
  Image,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const RAND_MISSION_IN = [
  {
    RAND_MISSION_IN_id: 1,
    mission_image: require('./images/random_mission1.jpeg'),
    mission_name: '이불 개기',
    mission_expla: '이불을 개며 하루를 다르게 시작해보세요!',
  },
  // 다른 랜덤 미션들...
];

const RAND_MISSION_OUT = [
  {
    RAND_MISSION_OUT_id: 1,
    mission_image: require('./images/random_mission4.jpeg'),
    mission_name: '편의점으로 외출하기',
    mission_expla:
      '가까운 편의점으로 가서 상쾌한 공기와 맛있는 음식들을 맛보세요!',
  },
  // 다른 랜덤 미션들...
];

const USER_MISSION = [
  {
    USER_MISSION_id: 1,
    mission_image: RAND_MISSION_IN[0].mission_image,
    mission_name: RAND_MISSION_IN[0].mission_name,
    mission_success: 0,
  },
  // 다른 유저 미션들...
];

const graph_status = -1;

const chartConfig = {
  backgroundGradientFrom: '#ffffff',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: '#ffffff',
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(0, 102, 255, ${opacity})`,
  strokeWidth: 2,
  barPercentage: 0.5,
  useShadowColorFromDataset: false,
  decimalPlaces: 0,
};

function Chart_Goal_Screen() {
  const [dimensions, setDimensions] = useState({
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  });

  return (
    <SafeAreaView>
      <Text
        style={{
          fontSize: hp(2.9),
          color: 'black',
          fontWeight: 'bold',
          marginTop: wp(20),
          alignSelf: 'center',
        }}>
        차트로 보는 나의 목표성과 그래프
      </Text>
      <LineChart
        data={{
          labels: ['Jan', 'Feb', 'Mar', 'April', 'May', 'June'],
          datasets: [
            {
              data: [Math.random()],
            },
          ],
        }}
        width={dimensions.width}
        height={220}
        chartConfig={chartConfig}
      />
      <Text
        style={{
          fontSize: hp(2.4),
          color: 'black',
          fontWeight: 'bold',
          marginTop: wp(70),
          marginLeft: wp(35),
        }}>
        그래프가{' '}
        {graph_status < 0 ? (
          <Text style={{ color: '#0066ff' }}>하락</Text>
        ) : (
          <Text style={{ color: '#0066ff' }}>상승</Text>
        )}
        하고 있어요!
      </Text>
      <Text
        style={{
          fontSize: hp(2.4),
          color: 'black',
          fontWeight: 'bold',
          marginLeft: wp(53.2),
        }}>
        조금만 더 열심히!
      </Text>
      <Text
        style={{
          fontSize: hp(1.8),
          color: 'black',
          marginLeft: wp(6),
          marginTop: wp(8),
          marginBottom: wp(2),
          fontWeight: 'bold',
        }}>
        <Text style={{ color: '#0066ff' }}>
          그래프 {graph_status < 0 ? <Text>상승</Text> : <Text>하락</Text>}
        </Text>
        을 위한 솔루션을 추천해드릴게요!
      </Text>
      <ScrollView horizontal style={{ height: wp(57) }}>
        {USER_MISSION.map((inside_item, index) => (
          <Pressable key={index} style={{ height: wp(53) }}>
            <View style={styles.mission_list}>
              <Image
                source={inside_item.mission_image}
                style={styles.mission_image}
              />
              <Text
                style={[styles.mission_name, { width: wp(45) }]}
                numberOfLines={1}
                ellipsizeMode="tail">
                {inside_item.mission_name}
              </Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
    shadowOffset: { width: 0, height: 5 },
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
    marginBottom: wp(2),
    borderRadius: wp(5),
  },
});

export default Chart_Goal_Screen;
