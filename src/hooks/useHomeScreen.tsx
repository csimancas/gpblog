import NetInfo from '@react-native-community/netinfo';
import {useEffect, useState} from 'react';
import {getEntrys, storeEntry} from '../utils/commons';

const useHomeScreen = () => {
  const [entrys, setEntrys] = useState([]);
  const [isWifiConnected, setIsWifiConnected] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state: any) => {
      setIsWifiConnected(state.isConnected);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    getEntrys().then(data => {
      if (data) {
        setEntrys(data);
      }
    });
  }, []);

  const saveEntry = async () => {
    const newEntry = {
      id: entrys.length + 1,
      title,
      author,
      date: new Date(),
      content,
    };
    const newEntrys: any = [...entrys, newEntry];
    setEntrys(newEntrys);
    await storeEntry(newEntrys);
    setIsModalVisible(false);
    setTitle('');
    setAuthor('');
    setContent('');
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
  };
};

export default useHomeScreen;
