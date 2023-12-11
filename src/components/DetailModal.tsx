import React from 'react';
import {View, StyleSheet, Modal} from 'react-native';
import CardEntry from './CardEntry';

type Props = {
  visible: boolean;
  onClose: () => void;
  item: {
    id: number;
    title: string;
    author: string;
    date: Date;
    content: string;
  };
};

const DetailModal = ({visible, item, onClose}: Props) => {
  return (
    <View style={styles.containerModal}>
      <Modal transparent={true} visible={visible} animationType="slide">
        <View style={styles.container}>
          <CardEntry item={item} cardAction={onClose} isShowDetail={true} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  containerModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardStyle: {
    width: '80%',
    marginBottom: 10,
  },
});

export default DetailModal;
