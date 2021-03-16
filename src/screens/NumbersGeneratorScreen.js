import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../styles/NumbersGeneratorStyle';

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
        <Text style={styles.numbersSortedText}>Números Sorteados</Text>
        <View style={styles.numbersContainer}>
          <Text style={styles.numbersSorted}>{values.join(' ')}</Text>
        </View>

        <TouchableOpacity
          style={styles.sortButton}
          onPress={() => getRandomNumbers()}>
          <Text style={styles.sortButtonText}>Sortear</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};