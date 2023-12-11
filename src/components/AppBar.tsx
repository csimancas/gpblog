import React from 'react';
import {Appbar, Text} from 'react-native-paper';
import {StyleSheet} from 'react-native';

type Props = {
  entrysNumber: number;
};
const AppBar = ({entrysNumber}: Props) => {
  return (
    <Appbar.Header style={styles.container}>
      <Text
        variant="headlineSmall"
        style={styles.text}>{`Entradas del blog: ${entrysNumber}`}</Text>
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  text: {
    color: 'gray',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default AppBar;
