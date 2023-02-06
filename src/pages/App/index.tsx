import React from 'react';

import {MyAppPros} from './types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeTabNavigator} from './HomeTabNavigator';
import Category from '../Category';
const Stack = createNativeStackNavigator<MyAppPros>();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeTabNavigator}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="Category"
        component={Category}
        options={{header: () => null}}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
