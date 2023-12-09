import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Card, Button, Text} from 'react-native-paper';
import FlaotingButton from '../components/FlaotingButton';
import AddEntryModal from '../components/AddEntryModal';
import useEntryModal from '../hooks/useEntryModal';

const Entryes = [
  {
    id: 1,
    title: 'Titulo 1',
    author: 'Autor 1',
    date: new Date(),
    content: 'Contenido 1',
  },
  {
    id: 2,
    title: 'Titulo 1',
    author: 'Autor 1',
    date: new Date(),
    content: 'Contenido 1',
  },
  {
    id: 3,
    title: 'Titulo 1',
    author: 'Autor 1',
    date: new Date(),
    content:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  },
];

type Props = {
  item: {
    id: number;
    title: string;
    author: string;
    date: Date;
    content: string;
  };
};

const HomeScreen = () => {
  const {modalVisible, openModal, closeModal} = useEntryModal();

  const renderItem = ({item}: Props) => {
    return (
      <Card style={styles.cardStyle}>
        <Card.Title title={item.title} />
        <Card.Content>
          <Text>{`${item.content.substring(0, 60)} ...`}</Text>
        </Card.Content>
        <Card.Actions>
          <Button>Ver entrada</Button>
        </Card.Actions>
      </Card>
    );
  };

  return (
    <View style={styles.container}>
      <Text variant="headlineSmall">Entradas del blog:</Text>
      <FlatList
        data={Entryes}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
      <AddEntryModal
        modalVisible={modalVisible}
        setModalVisible={() => closeModal()}
      />
      <FlaotingButton action={() => openModal()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: '#E8EAED',
    paddingHorizontal: 20,
  },
  cardStyle: {
    width: '100%',
    marginBottom: 10,
  },
  ScrollView: {
    flexGrow: 1,
  },
  button: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    borderRadius: 5,
    marginBottom: 10,
  },
});

export default HomeScreen;
