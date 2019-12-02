import React, { useState } from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    TouchableWithoutFeedback,
    Keyboard,
    Alert,
} from 'react-native';

import Card from '../components/Card';
import Input from '../components/Input';
import colors from '../constants/colors';
import NumberContainer from '../components/NumberContainer';
import TitleText from '../components/TitleText';
import BodyText from '../components/BodyText';
import MainButton from '../components/MainButton';

const StartGameScreen = props => {

    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();

    const NumberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    }

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false)
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue)
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('invalid number', 'Number has to be a number between 1 and 99', [{text: 'ok', style: 'destructive', onPress: resetInputHandler}])
            return;
        }
        setConfirmed(true)
        setSelectedNumber(chosenNumber)
        setEnteredValue('')
        Keyboard.dismiss();
    }

    let confirmedOutput;

    if (confirmed) {
        confirmedOutput = (
            <Card style={styles.summaryContainer}>
                <BodyText>You Selected</BodyText>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <MainButton onPress={() => props.startGameHandler(selectedNumber)}>START GAME</MainButton>
            </Card>
        )
    }

    console.log('entered value ' + enteredValue)
    console.log('selected number ' + selectedNumber)

    return (
        <TouchableWithoutFeedback
            onPress={() => {
                Keyboard.dismiss();
            }}>
            <View style={styles.screen}>
                <TitleText style={styles.title}>Start a New Game!</TitleText>
                <Card style={styles.inputContainer}>
                    <BodyText>Select a Number</BodyText>
                    <Input
                        style={styles.input}
                        blurOnSubmit
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="number-pad"
                        maxLength={2}
                        onChangeText={NumberInputHandler}
                        value={enteredValue}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button title="reset" color={colors.secondary} onPress={resetInputHandler} />
                        </View>
                        <View style={styles.button}>
                            <Button title="confirm" color={colors.primary} onPress={confirmInputHandler} />
                        </View>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    title: {
        marginVertical: 10,
        fontFamily: 'open-sans-bold'
    },
    input: {
        width: 50,
        textAlign: 'center',

    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    button: {
        width: '40%',
    },
    summaryContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
});

export default StartGameScreen;