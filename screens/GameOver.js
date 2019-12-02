import React from 'react';
import { StyleSheet, View, Image, Button, Text } from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import MainButton from '../components/MainButton';
import colors from '../constants/colors';

const GameOver = props => {
  return (
    <View style={styles.screen}>
        <TitleText>Game Over!</TitleText>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('../assets/success.png')}
            resizeMode="cover"
          />
        </View>
        <View style={styles.resultText}>
          <BodyText style={styles.resultCopy}>
            Your phone needed{' '}
            <Text style={styles.highlight}>{props.roundsNumber}</Text>
            {' '}rounds to guess the number{' '}
            <Text style={styles.highlight}>{props.userNumber}</Text>
          </BodyText>
        </View>
        <MainButton onPress={props.configureNewGameHandler}>NEW GAME</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    borderRadius: 150,
    width: 300,
    height: 300,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: 30,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  resultText: {
    width: '80%',
    marginVertical: 15,
    marginHorizontal: 30,
  },
  highlight: {
    color: colors.primary,
    fontFamily: 'open-sans-bold',
    margin: 30,
  },
  resultCopy: {
    textAlign: 'center',
  },
});

export default GameOver;
