import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackScreenProps } from '@react-navigation/stack';
import { RouteStackParamList } from '..';

import HomeScreen from '../home';
// import DrawerContent from '../../components/drawer';

export type RouteDrawerParamList = RouteStackParamList & {
  HomeScreen: undefined;
};
const HomeDrawerScreen: React.FC<StackScreenProps<RouteStackParamList, 'HomeDrawerScreen'>> = () => {
  const Drawer = createDrawerNavigator<RouteDrawerParamList>();
  return (
    <Drawer.Navigator
      initialRouteName="HomeScreen"
      drawerType="front"
      // drawerContent={(props) => <DrawerContent {...props} />}
      drawerStyle={{ width: '90%' }}
      overlayColor={'rgba(0, 0, 0, 0.5)'}
      screenOptions={{ swipeEnabled: false }}
    >
      <Drawer.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: true }} />
    </Drawer.Navigator>
  );
};

export default HomeDrawerScreen;
