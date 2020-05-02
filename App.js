import React, {useState} from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import {RadioButton, Text } from 'react-native-paper'
import Icon from './Neutral'
import Happy from './Happy'
import Sad from './Sad'
import Angry from './Angry'
import Neutral from './Neutral';

export default function App() {
  const [checked, setChecked] = useState('')

  const [strokeHappy, setStrokeHappy] = useState('#fff')
  const [fillHappy, setFillHappy] = useState('#fff')
  const [fill2Happy, setFill2Happy] = useState('transparent')

  const [strokeNeutral, setStrokedNeutral] = useState('#fff')
  const [fillNeutral, setFillNeutral] = useState('#fff')
  const [fill2Neutral, setFill2Neutral] = useState('transparent')

  const [strokeSad, setStrokedSad] = useState('#fff')
  const [fillSad, setFillSad] = useState('#fff')
  const [fill2Sad, setFill2Sad] = useState('transparent')

  const [strokeAngry, setStrokedAngry] = useState('#fff')
  const [fillAngry, setFillAngry] = useState('#fff')
  const [fill2Angry, setFill2Angry] = useState('transparent')

  const checkHappy = () => {
    console.log('pressed happy')
    setStrokeHappy(strokeHappy === '#fff' ? '#fff' : '#fff')
    setFillHappy(fillHappy === '#fff' ? '#000' : '#fff')
    setFill2Happy(fill2Happy === 'transparent' ? '#fff' : 'transparent')
    setFill2Neutral('transparent')
    setFill2Sad('transparent')
    setFill2Angry('transparent')
    setFillNeutral('#fff')
    setFillSad('#fff')
    setFillAngry('#fff')
  }
  const checkNeutral = () => {
    console.log('pressed neutral')
    setStrokedNeutral(strokeNeutral === '#fff' ? '#fff' : '#fff')
    setFillNeutral(fillNeutral === '#fff' ? '#000' : '#fff')
    setFill2Neutral(fill2Neutral === 'transparent' ? '#fff' : 'transparent') 
    setFill2Happy('transparent')
    setFill2Sad('transparent')
    setFill2Angry('transparent')
    setFillHappy('#fff')
    setFillSad('#fff')
    setFillAngry('#fff') 
  }
  const checkSad = () => {
    console.log('pressed Sad')
    setStrokedSad(strokeSad === '#fff' ? '#fff' : '#fff')
    setFillSad(fillSad === '#fff' ? '#000' : '#fff')
    setFill2Sad(fill2Sad === 'transparent' ? '#fff' : 'transparent')
    setFill2Happy('transparent')
    setFill2Neutral('transparent')
    setFill2Angry('transparent')
    setFillHappy('#fff')
    setFillNeutral('#fff')
    setFillAngry('#fff') 
  }

  const checkAngry = () => {
    console.log('pressed Angry')
    setStrokedAngry(strokeAngry === '#fff' ? '#fff' : '#fff')
    setFillAngry(fillAngry === '#fff' ? '#000' : '#fff')
    setFill2Angry(fill2Angry === 'transparent' ? '#fff' : 'transparent')
    setFill2Happy('transparent')
    setFill2Neutral('transparent')
    setFill2Sad('transparent')
    setFillHappy('#fff')
    setFillNeutral('#fff')
    setFillSad('#fff') 
  }


  return (
    <View style={styles.container}>
      
        <TouchableOpacity onPress={()=> {setChecked('happy'); checkHappy()}}>
          <Happy width={200} fill={strokeHappy} fill={fillHappy} fill2={fill2Happy} />
          <View
            value='happy'
            hideButton={true}
            status={checked === 'happy' ? 'checked':'unchecked'}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> {setChecked('neutral'); checkNeutral()}}>
          <Neutral width={200}  stroke={strokeNeutral} fill={fillNeutral} fill2={fill2Neutral}/>
          <View
            value='neutral'
            status={checked === 'neutral' ? 'checked':'unchecked'}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> {setChecked('sad'); checkSad()}}>
          <Sad width={200} stroke={strokeSad} fill={fillSad} fill2={fill2Sad}/>
          <View
            value='sad'
            status={checked === 'sad' ? 'checked':'unchecked'}
            
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> {setChecked('angry'); checkAngry()}}>
          <Angry width={200}  stroke={strokeAngry} fill={fillAngry} fill2={fill2Angry}/>
          <View
            value='angry'
            status={checked === 'angry' ? 'checked':'unchecked'}
            
          />
        </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white'
  },
});