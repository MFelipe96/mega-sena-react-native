import React, {useState} from 'react';
import {View, Text} from 'react-native';
import styles from '../styles/NumbersGeneratorStyle';
import NumbersGeneratorButton from '../components/NumbersGeneratorButton'

export default _ => {
  const [values, setValue] = useState(['* ', '* ', '* ', '* ', '* ', '* ']);

  function generateRandomNumber(numbersList) {
    let max = 60
    let min = 1
    const randomValue = parseInt(Math.random() * (max - min) + min)
    return numbersList.includes(randomValue) ? generateRandomNumber(numbersList) : randomValue;
  }

  function getRandomNumbers(){
    let list = [];
    for (var i = 0; i < 6; i++) list[i] = generateRandomNumber(list);
    setValue(list.sort((a, b) => a - b))
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.numbersDrawnText}>Números Sorteados</Text>
        <View style={styles.numbersContainer}>
          <Text style={styles.numbersDrawn}>{values.join(' ')}</Text>
        </View>

        <NumbersGeneratorButton getNumbers = {getRandomNumbers}/>
      </View>
    </>
  );
};