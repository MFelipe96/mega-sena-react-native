import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    numbersContainer:{
        borderRadius: 10,
        backgroundColor: '#ffffdd',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 8,
        padding: 8,
        margin: 20
    },
    spaceNumberContainer: {
        padding: 10,
    },
    numbersDrawn:{
        fontSize: 30,
        color: '#000000',
    },
    numbersDrawnText:{
        fontSize:24,
        marginTop: 30,
        fontWeight: 'bold',
    },
    generatorButton: {
        width: '70%',
        backgroundColor: '#fffddd',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    generatorButtonText: {
        padding: 10,
        fontWeight: 'bold',
        fontSize: 20,
    }
    
})

export default styles;