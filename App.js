import { useState } from 'react';
import { TextInput, TouchableOpacity, Text, View, StyleSheet, Keyboard } from 'react-native';

const DiaryMemo = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [rating, setRating] = useState(0);

  const changeRating = (newRating) => {
    setRating(newRating);
  };

  const clickSave = () => {
    console.log('내용:', content);
    console.log('별점:', rating);
    // 저장 로직을 구현해야됨. , 서버에 데이터를 보내거나 로컬 스토리지에 저장.
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>diary</Text>
      <TextInput
        style={styles.inputContent}
        onChangeText={setContent}
        value={content}
        multiline={true}
        placeholder="오늘 하루의 일기를 작성해 주세요!"
      />
      <Text style={styles.textCounter}>{content.length}/300</Text>
      <View style={styles.stars}>
        {[1, 2, 3, 4, 5].map((index) => (
          <TouchableOpacity key={index} onPress={() => changeRating(index)}>
            <Text style={index <= rating ? styles.starFilled : styles.starEmpty}>★</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity style={styles.saveButton} onPress={clickSave}>
        <Text style={styles.saveButtonText}>작성 완료</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'space-between', // 컨테이너 내의 요소들을 위, 중간, 아래로 분리
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    marginTop: 20,
    marginBottom: -30, // 헤더와 입력칸 사이의 간격 확대
  },
  inputContent: {
    height: 400,
    width: '100%', // 화면 너비에 맞춰 조정
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 17,
    padding: 10,
    textAlignVertical: 'top',
    marginBottom: -20, // 입력칸과 별점 사이의 간격 확대
  },
  textCounter: {
    color: 'gray',
    marginBottom: -20, // 카운터와 별점 사이의 간격 확대
  },
  stars: {
    flexDirection: 'row',
    marginRight:100,
    justifyContent: 'center',
    marginBottom: -40, // 별점과 버튼 사이의 간격 확대
  },
  starFilled: {
    fontSize: 50,
    color: '#0066FF'
  },
  starEmpty: {
    fontSize: 50,
    color: 'lightgray'
  },
  saveButton: {
    backgroundColor: '#0066FF',
    borderRadius: 20,
    padding: 10,
    width: 150,
    alignItems:'center',
    marginLeft:200,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 16
  }
});


export default DiaryMemo;
