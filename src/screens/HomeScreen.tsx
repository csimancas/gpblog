import React from 'react';

import useHomeScreen from '../hooks/useHomeScreen';

import AppBar from '../components/AppBar';
import CardEntry from '../components/CardEntry';
import AddEntryModal from '../components/AddEntryModal';
import DetailModal from '../components/DetailModal';
import FlaotingButton from '../components/FlaotingButton';

import {FlatList, StyleSheet, View} from 'react-native';
import {ActivityIndicator, Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SearchBar from '../components/SearchBar';

type Props = {
  item: {
    _id: string;
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
    isError,
    setIsError,
    filteredData,
    searchText,
    searchItem,
  } = useHomeScreen();

  const renderItem = ({item}: Props) => {
    return (
      <CardEntry
        isList={true}
        isShowDetail={false}
        item={item}
        cardAction={() => {
          setSeeEntry(item);
          setIsEntryVisible(true);
        }}
      />
    );
  };

  return (
    <>
      <AppBar entrysNumber={entrys.length} />
      <View style={styles.container}>
        <SearchBar
          searchQuery={searchText}
          onChangeSearch={text => searchItem(text)}
        />
        {entrys.length !== 0 ? (
          <>
            <FlatList
              style={styles.list}
              data={searchText.length > 0 ? filteredData : entrys}
              renderItem={renderItem}
              keyExtractor={item => item._id}
              showsVerticalScrollIndicator={false}
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
          errorForm={isError}
          setErrorForm={() => setIsError(false)}
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
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: '#E8EAED',
    paddingHorizontal: 20,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    marginTop: 20,
  },
  textnoEntry: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  noEntrysText: {
    textAlign: 'center',
    marginTop: 10,
    fontWeight: '600',
    color: 'black',
  },
});

export default HomeScreen;
