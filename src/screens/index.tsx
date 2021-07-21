import React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeDrawerScreen from './homeDrawer';

export type RouteStackParamList = {
  HomeDrawerScreen: undefined;
};

const Screens: React.FC<React.ReactNode> = () => {
  const { Navigator, Screen } = createStackNavigator<RouteStackParamList>();

  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          animationEnabled: Platform.OS !== 'android',
        }}
        initialRouteName="HomeDrawerScreen"
      >
        <Screen name="HomeDrawerScreen" component={HomeDrawerScreen} options={{ headerShown: false }} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Screens;
