import {useEffect, useState, useContext} from 'react';
import {Context as EntryContext} from '../context/EntriesContext';

import NetInfo from '@react-native-community/netinfo';

const useHomeScreen = () => {
  const [seeEntry, setSeeEntry] = useState({} as any);
  const [isEntryVisible, setIsEntryVisible] = useState(false);
  const [isWifiConnected, setIsWifiConnected] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isError, setIsError] = useState(false);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  const {
    state: {data: entrys, isLoaded},
    getEntries,
    addEntry,
  } = useContext(EntryContext);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state: any) => {
      setIsWifiConnected(state.isConnected);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    getEntries();
  }, []);

  const cleanForm = () => {
    setTitle('');
    setAuthor('');
    setContent('');
  };

  const saveEntry = async () => {
    addEntry(title, content, author);
    cleanForm();
    setIsModalVisible(false);
  };

  return {
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
    isLoaded,
  };
};

export default useHomeScreen;
