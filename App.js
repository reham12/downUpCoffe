/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import RootRouter from "./src/RootRouter"


const App = () => {
  //Hide Splash screen on app load.
  React.useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <>
      <NavigationContainer>
        <RootRouter />
      </NavigationContainer>
    </>
  );
};

export default App;
