import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

type Props = {
  action: () => void;
};

const FlaotingButton = (props: Props) => {
  return (
    <Pressable onPress={props.action}>
      <View style={styles.container}>
        <Icon name="plus" size={26} color="#fff" />
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    width: 60,
    height: 60,
    borderRadius: 30,
    position: 'absolute',
    bottom: 10,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default FlaotingButton;
