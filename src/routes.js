/* eslint-disable react/prop-types */
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


import Home from './pages/Home';
import Cart from './pages/Cart';

const Routes = createAppContainer(
  createBottomTabNavigator({
    Home: {
      screen: Home,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor, focused }) => {
          const iconName = `home${focused ? '' : '-outline'}`;
          return (<Icon name={iconName} color={tintColor} size={30} />);
        },
      }),
    },
    Cart: {
      screen: Cart,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor, focused }) => {
          const iconName = `cart${focused ? '' : '-outline'}`;
          return (<Icon name={iconName} color={tintColor} size={30} />);
        },
      }),
    },
  }, {
    tabBarOptions: {
      activeTintColor: '#F8F8F8',
      inactiveTintColor: '#F8F8F8',
      style: {
        backgroundColor: '#7159c1',
        borderTopColor: '#7159c1',
      },
    },
  }),
);

export default Routes;
