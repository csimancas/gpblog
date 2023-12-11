import React from 'react';

import {Snackbar, Text} from 'react-native-paper';
import {StyleSheet} from 'react-native';

type Props = {
  visible: boolean;
  text: string;
  onCancel: () => void;
};
const ErrorSnackBar = ({visible, text, onCancel}: Props) => {
  return (
    <Snackbar visible={visible} onDismiss={onCancel}>
      <Text style={styles.text}>{text}</Text>
    </Snackbar>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'red',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ErrorSnackBar;
