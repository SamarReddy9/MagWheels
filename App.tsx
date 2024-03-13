import React from 'react';
import Routes from './app/navigation/Routes';
import 'react-native-gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Routes />
    </GestureHandlerRootView>
  );
};

export default App;
