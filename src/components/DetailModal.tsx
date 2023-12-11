import React from 'react';
import {View, Text, StyleSheet, Modal, TouchableOpacity} from 'react-native';

type Props = {
  visible: boolean;
  onClose: () => void;
};

const DetailModal = ({visible, onClose}: Props) => {
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.container}>
        <Text>Detalle de la entrada</Text>
        <TouchableOpacity onPress={onClose}>
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
