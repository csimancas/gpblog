import AsyncStorage from '@react-native-async-storage/async-storage';

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
    const jsonValue: any = await AsyncStorage.getItem('@entrys');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log(e);
  }
};
