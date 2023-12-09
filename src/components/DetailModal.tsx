import React from 'react';
import {View, Text, StyleSheet, Modal, TouchableOpacity} from 'react-native';

const DetailModal = (props: any) => {
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.container}>
        <Text>Detalle de la entrada</Text>
        <TouchableOpacity onPress={props.close}>
          <Text>Cerrar</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DetailModal;
