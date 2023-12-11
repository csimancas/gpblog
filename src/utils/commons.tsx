import AsyncStorage from '@react-native-async-storage/async-storage';
import {format} from 'date-fns';
import axios from 'axios';
import {GET_ENTRIES} from './api';
import {fetch} from '@react-native-community/netinfo';

export const storeEntry = async (value: any) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('@entrys', jsonValue);
  } catch (e) {
    console.log(e);
  }
};

export const getEntrys = async () => {
  try {
    fetch().then(async state => {
      if (state.isConnected) {
        axios.get(GET_ENTRIES).then(response => {
          return response.data.entries;
        });
      } else {
        const jsonValue: any = await AsyncStorage.getItem('@entrys');
        return jsonValue != null ? JSON.parse(jsonValue) : null;
      }
    });
  } catch (e) {
    console.log(e);
  }
};

export const formatDate = (date: Date) => {
  return format(date, 'dd/MM/yyyy');
};
