import React from 'react';
import {View, StyleSheet, Modal} from 'react-native';
import {Button, Card, Text} from 'react-native-paper';

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
          <Card style={styles.cardStyle}>
            <Card.Title title={item.title} />
            <Card.Content>
              <Text>{`${item?.content}`}</Text>
            </Card.Content>
            <Card.Actions>
              <Button mode="contained" onPress={onClose}>
                Cerrar
              </Button>
            </Card.Actions>
          </Card>
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
