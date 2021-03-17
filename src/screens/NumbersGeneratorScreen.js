import React, { useState } from 'react'
import { View, Text } from 'react-native'
import styles from '../styles/NumbersGeneratorStyle'
import NumbersGeneratorButton from '../components/NumbersGeneratorButton'
import AnimatedNumbers from 'react-native-animated-numbers'

export default _ => {
  const [values, setValue] = useState([0, 0, 0, 0, 0, 0]);

  function generateRandomNumber(numbersList) {
    let max = 60
    let min = 1
    const randomValue = parseInt(Math.random() * (max - min) + min)
    return numbersList.includes(randomValue) ? generateRandomNumber(numbersList) : randomValue;
  }

  function getRandomNumbers() {
    let list = [];
    for (var i = 0; i < 6; i++) list[i] = generateRandomNumber(list);
    setValue(list.sort((a, b) => a - b))
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.numbersDrawnText}>Números Sorteados</Text>
        <View style={styles.numbersContainer}>
          <View style={{ padding: 8 }}>
            <AnimatedNumbers
              includeComma
              animateToNumber={parseInt(values[0])}
              fontStyle={{ fontSize: 35, fontWeight: 'bold' }}
            />
          </View>
          <View style={{ padding: 8 }}>
            <AnimatedNumbers
              includeComma
              animateToNumber={parseInt(values[1])}
              fontStyle={{ fontSize: 35, fontWeight: 'bold' }}
            />
          </View>
          <View style={{ padding: 8 }}>
            <AnimatedNumbers
              includeComma
              animateToNumber={parseInt(values[2])}
              fontStyle={{ fontSize: 35, fontWeight: 'bold' }}
            />
          </View>
          <View style={{ padding: 8 }}>
            <AnimatedNumbers
              includeComma
              animateToNumber={parseInt(values[3])}
              fontStyle={{ fontSize: 35, fontWeight: 'bold' }}
            />
          </View>
          <View style={{ padding: 8 }}>
            <AnimatedNumbers
              includeComma
              animateToNumber={parseInt(values[4])}
              fontStyle={{ fontSize: 35, fontWeight: 'bold' }}
            />
          </View>
          <View style={{ padding: 8 }}>
            <AnimatedNumbers
              includeComma
              animateToNumber={parseInt(values[5])}
              fontStyle={{ fontSize: 35, fontWeight: 'bold' }}
            />
          </View>
        </View>
      </View>
      <View style={{ alignItems: 'center' }}>
        <NumbersGeneratorButton getNumbers={getRandomNumbers} />
      </View>
    </>
  );
};

