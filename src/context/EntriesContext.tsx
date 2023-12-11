import CreateDataContext from './createDataContext';
import {fetch} from '@react-native-community/netinfo';
import axios from 'axios';
import {GET_ENTRIES, CREATE_ENTRY} from '../utils/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'get_entries':
      return {
        data: action.payload,
        isLoaded: false,
      };
    case 'add_entry':
      return {
        data: [...state.data, action.payload],
      };
    default:
      return state;
  }
};

const getEntries = (dispatch: any) => {
  return async () => {
    try {
      fetch().then(async state => {
        console.log(state);
        if (state.isInternetReachable) {
          const response = await axios.get(GET_ENTRIES);
          const isLoaded = true;
          dispatch({
            type: 'get_entries',
            payload: response.data.entries,
            isLoaded,
          });
        } else {
          const jsonValue: any = await AsyncStorage.getItem('@entrys');
          const data = jsonValue != null ? JSON.parse(jsonValue) : null;
          dispatch({type: 'get_entries', payload: data});
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
};

const addEntry = (dispatch: any) => {
  return async (title: string, content: string, author: string) => {
    const entryObj = {
      title,
      content,
      author,
      date: new Date(),
    };

    try {
      axios
        .post(CREATE_ENTRY, {
          title: title,
          author: author,
          content: content,
          date: new Date(),
        })
        .then(async () => {
          const jsonValue = await AsyncStorage.getItem('@entrys').then(res => {
            if (res !== null) {
              return res;
            } else {
              return '[]';
            }
          });
          const oldArray = JSON.parse(jsonValue);
          const newEntrys: any = [...oldArray, entryObj];
          const newArray = JSON.stringify(newEntrys);
          await AsyncStorage.setItem('@entrys', newArray);
        })
        .catch(error => {
          console.log(error);
        });
      dispatch({type: 'add_entry', payload: entryObj});
    } catch (error) {
      console.log(error);
    }
  };
};

export const {Context, Provider} = CreateDataContext(
  reducer,
  {
    getEntries,
    addEntry,
  },
  {
    data: [],
    isLoaded: false,
  },
);
