import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Card, Button, Text} from 'react-native-paper';

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
    content: 'Contenido 1',
  },
];

const HomeScreen = () => {
  const renderItem = ({item}) => {
    return (
      <Card style={{}}>
        <Card.Title title={item.title} />

        <View>
          <Text>{item.title}</Text>
        </View>
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
      <Button style={styles.button} mode="contained">
        AGREGAR ENTRADA
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: '#E8EAED',
    paddingHorizontal: 20,
    alignItems: 'center',
    // justifyContent: 'center',
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
