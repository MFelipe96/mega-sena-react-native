import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from '../styles/NumbersGeneratorStyle';

export default NumbersGeneratorButton = (props) => {
    return (
        <>
            <TouchableOpacity
                style={styles.generatorButton}
                onPress={() => props.getNumbers()}>
                <Text style={styles.generatorButtonText}>Sortear</Text>
            </TouchableOpacity>
        </>
    );
};
