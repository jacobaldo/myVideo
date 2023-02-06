import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import HomeStack from './src/pages/App';
import {navigationRef} from './src/utils/navigationref/RootNavigation';

const App = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <HomeStack />
    </NavigationContainer>
  );
};

export default App;
