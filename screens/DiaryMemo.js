/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-unused-vars */
import {useState} from 'react';
import {Text, View} from 'react-native';

const DiaryMemo = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [rating, setRating] = useState(false);

  const clickSave = () => {
    console.log('제목:', title);
    console.log('내용:', content);
    console.log('별점:', rating);
  };
  return (
    <View>
      <Text>ㅁㄴㅇㄹ</Text>
    </View>
  );
};
