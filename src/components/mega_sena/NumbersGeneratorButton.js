import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from '../../styles/';

export default props => {

    return(
        <>
            <TouchableOpacity style={styles.button} onPress={props.increaseFunc}>
                <Text style={styles.buttonText}>+</Text>
             </TouchableOpacity>
        </>
    )
}


