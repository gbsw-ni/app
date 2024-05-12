import { TouchableOpacity, Image, StyleSheet, View, Text } from 'react-native';

const check = require('./icons/check.png');

const Diary = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('PreviousDate')}>
          <Image source={require('./icons/right-arrow.png')} style={styles.navIcon} />
        </TouchableOpacity>
        <Text style={styles.dateText}>4월</Text>
        <TouchableOpacity onPress={() => navigation.navigate('NextDate')}>
          <Image source={require('./icons/left-arrow.png')} style={styles.navIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.checkBox}>
          <Image style={styles.check1} source={check} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.checkBox}>
          <Image style={styles.check1} source={check} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.checkBox}>
          <Image style={styles.check1} source={check} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.checkBox}>
          <Image style={styles.check1} source={check} />
        </TouchableOpacity>
      </View>
      <View style={styles.centeredTextContainer}>
        <Text style={styles.MainText}>클릭 시 그날의 일기가 확인 됩니다!</Text>
      </View>
      <TouchableOpacity style={styles.actionButton}>
        <Image source={require('./icons/pen_icon.png')} style={styles.actionIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingTop: 20,
    paddingBottom: 5,
    marginTop:20,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    paddingHorizontal: 20,
  },
  navIcon: {
    width: 30,
    height: 30,
  },
  dateText: {
    fontSize: 18,
    fontWeight: 'bold',
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
  actionButton: {
    bottom: 20,
    backgroundColor: '#0066FF',
    width: 90,
    height: 90,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:240,
  },
  actionIcon: {
    width: 80,
    height: 80,
  },
});

export default Diary;
