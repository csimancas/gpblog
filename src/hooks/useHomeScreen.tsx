import React, {useState, useEffect} from 'react';
import NetInfo from '@react-native-community/netinfo';

const useHomeScreen = () => {
  const [isWifiConnected, setIsWifiConnected] = useState(false);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state: any) => {
      console.log(state);
      setIsWifiConnected(state.isConnected);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return {
    isWifiConnected,
  };
};

export default useHomeScreen;
