import {useEffect, useState, useContext} from 'react';
import {Context as EntryContext} from '../context/EntriesContext';

import NetInfo from '@react-native-community/netinfo';

const useHomeScreen = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [seeEntry, setSeeEntry] = useState({} as any);
  const [searchText, setSearchText] = useState('');
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
    if (title !== '' && author !== '' && content !== '') {
      addEntry(title, content, author);
      cleanForm();
      setIsModalVisible(false);
    } else {
      setIsError(true);
    }
  };

  const searchItem = (text: string) => {
    setSearchText(text);

    const query = searchText.toLowerCase();

    const filterData = entrys.filter((item: any) => {
      const titleSearch = item.title.toLowerCase();
      const contentSearch = item.content.toLowerCase();
      const authorSearch = item.author.toLowerCase();

      return (
        titleSearch.includes(query) ||
        contentSearch.includes(query) ||
        authorSearch.includes(query)
      );
    });

    setFilteredData(filterData);
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
    searchItem,
    searchText,
    filteredData,
  };
};

export default useHomeScreen;
