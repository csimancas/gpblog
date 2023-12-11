import React from 'react';
import {Provider as EntriesContext} from './src/context/EntriesContext';
import HomeScreen from './src/screens/HomeScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <EntriesContext>
      <SafeAreaProvider>
        <HomeScreen />
      </SafeAreaProvider>
    </EntriesContext>
  );
};

export default App;
