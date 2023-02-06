import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Home';
import Profile from '../Profile';
import {colors} from '../../constants/colors';
import Icon from 'react-native-vector-icons/Feather';
import {styles} from './styles';
import Promotions from '../Promotions';
import Card from '../Card';

const Tab = createBottomTabNavigator();

export const HomeTabNavigator = ({}: any) => {
  return (
    <Tab.Navigator
      // eslint-disable-next-line react-native/no-inline-styles
      sceneContainerStyle={{backgroundColor: 'white'}}
      screenOptions={() => ({
        tabBarStyle: {...styles.tabContainer},
        tabBarLabelStyle: {...styles.text},
        tabBarActiveTintColor: colors.primary.primary100,
        tabBarInactiveTintColor: colors.black,
      })}>
      <Tab.Screen
        name="HomeMP"
        component={Home}
        options={{
          title: 'Inicio',
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused}) =>
            focused ? (
              <Icon
                name="home"
                size={25}
                color={colors.secondary.secondary100}
              />
            ) : (
              <Icon name="home" size={25} color={colors.black} />
            ),
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="ExpenseControl"
        component={Card}
        options={{
          title: 'Carrito',
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused}) =>
            focused ? (
              <Icon
                name="shopping-cart"
                size={25}
                color={colors.secondary.secondary100}
              />
            ) : (
              <Icon name="shopping-cart" size={25} color={colors.black} />
            ),
          header: () => null,
        }}
      />
      <Tab.Screen
        name="Support"
        component={Promotions}
        options={{
          title: 'Promociones',
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused}) =>
            focused ? (
              <Icon
                name="tag"
                size={25}
                color={colors.secondary.secondary100}
              />
            ) : (
              <Icon name="tag" size={25} color={colors.black} />
            ),
          header: () => null,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Perfil',
          headerShown: false,
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused}) =>
            focused ? (
              <Icon
                name="user"
                size={25}
                color={colors.secondary.secondary100}
              />
            ) : (
              <Icon name="user" size={25} color={colors.black} />
            ),
        }}
      />
    </Tab.Navigator>
  );
};
