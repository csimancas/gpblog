import React from 'react';

import {Modal, View, StyleSheet} from 'react-native';
import {Button, TextInput} from 'react-native-paper';

type Props = {
  modalVisible: boolean;
  setModalVisible: (modalVisible: boolean) => void;
  title: string;
  setTitle: (title: string) => void;
  author: string;
  setAuthor: (author: string) => void;
  content: string;
  setContent: (content: string) => void;
  onCanceled: () => void;
  onSaved: () => void;
};

const AddEntryModal = ({
  modalVisible,
  setModalVisible,
  author,
  setAuthor,
  content,
  setContent,
  title,
  setTitle,
  onCanceled,
  onSaved,
}: Props) => {
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible && setModalVisible(false);
        }}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TextInput
              style={styles.textInput}
              label="Titulo"
              value={title}
              onChangeText={text => setTitle(text)}
            />
            <TextInput
              style={styles.textInput}
              label="Autor"
              value={author}
              onChangeText={text => setAuthor(text)}
            />
            <TextInput
              style={styles.textInput}
              label="Fecha"
              value={new Date().toString()}
            />
            <TextInput
              style={styles.textInput}
              label="Contenido"
              value={content}
              multiline={true}
              onChangeText={text => setContent(text)}
            />
            <View style={styles.buttonSection}>
              <Button onPress={onCanceled}>Cancelar</Button>
              <Button mode="contained" onPress={onSaved}>
                Agregar
              </Button>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  textInput: {
    width: '100%',
    marginBottom: 10,
  },
  buttonSection: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
});

export default AddEntryModal;
