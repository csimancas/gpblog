import React from 'react';

import AddEntryModal from '../components/AddEntryModal';
import DetailModal from '../components/DetailModal';

import {FlatList, StyleSheet, View} from 'react-native';
import {Button, Card, Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FlaotingButton from '../components/FlaotingButton';

import useHomeScreen from '../hooks/useHomeScreen';
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
  const {
    isWifiConnected,
    isModalVisible,
    setIsModalVisible,
    title,
    setTitle,
    author,
    setAuthor,
    content,
    setContent,
    entrys,
    saveEntry,
    seeEntry,
    setSeeEntry,
    isEntryVisible,
    setIsEntryVisible,
  } = useHomeScreen();

  const renderItem = ({item}: Props) => {
    return (
      <Card style={styles.cardStyle}>
        <Card.Title title={item.title} />
        <Card.Content>
          <Text>{`${item.content.substring(0, 60)} ...`}</Text>
        </Card.Content>
        <Card.Actions>
          <Button
            onPress={() => {
              setSeeEntry(item);
              setIsEntryVisible(true);
            }}>
            Ver entrada
          </Button>
        </Card.Actions>
      </Card>
    );
  };

  return (
    <View style={styles.container}>
      {entrys.length !== 0 ? (
        <>
          <Text variant="headlineSmall">{`Entradas del blog: ${entrys.length}`}</Text>
          <FlatList
            data={entrys}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
          />
        </>
      ) : (
        <View style={styles.textnoEntry}>
          <Icon name="bookmark-off" size={120} color={'red'} />
          <Text variant="bodyMedium" style={styles.noEntrysText}>
            Por el momento no hay entradas, ingresa una en el boton de mas
          </Text>
        </View>
      )}
      <AddEntryModal
        modalVisible={isModalVisible}
        setModalVisible={() => setIsModalVisible(false)}
        title={title}
        setTitle={setTitle}
        author={author}
        setAuthor={setAuthor}
        content={content}
        setContent={setContent}
        onCanceled={() => setIsModalVisible(false)}
        onSaved={() => saveEntry()}
      />
      <DetailModal
        visible={isEntryVisible}
        onClose={() => setIsEntryVisible(false)}
        item={seeEntry}
      />
      <FlaotingButton
        action={() => setIsModalVisible(true)}
        disabled={isWifiConnected}
      />
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
  textnoEntry: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  button: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    borderRadius: 5,
    marginBottom: 10,
  },
  noEntrysText: {
    textAlign: 'center',
    marginTop: 10,
    fontWeight: '600',
    color: 'black',
  },
});

export default HomeScreen;
