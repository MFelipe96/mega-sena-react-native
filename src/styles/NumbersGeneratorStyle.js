import {StyleSheet} from 'react-native';
import { COLORS } from './colors';

const styles = StyleSheet.create({
    container: {
        flex: 2,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    numbersContainer:{
        borderRadius: 10,
        backgroundColor: '#ffffdd',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 8,
        flexDirection: 'row',
        paddingHorizontal: 16,
        paddingVertical: 12,
        margin: 20
    },
    spaceNumberContainer: {
        padding: 10,
    },
    numbersDrawn:{
        fontSize: 25,
        color: '#000000',
    },
    numbersDrawnText:{
        fontSize:24,
        marginTop: 30,
        fontWeight: 'bold',
    },
    generatorButton: {
        width:150,
        backgroundColor: COLORS.greenDark,
        borderRadius: 5,
        margin:20,
        alignItems: 'center', 
        elevation: 8,
    },
    generatorButtonText: {
        padding: 10,
        fontWeight: 'bold',
        color: COLORS.white,
        fontSize: 22,
    },
    selectedNumbersText: {
        fontSize: 30,
        marginTop: 80
    },
    generatorButtonView: {
        alignItems: 'center', 
        flex: 1, 
        justifyContent: 'center'
    }
    
})

export default styles;