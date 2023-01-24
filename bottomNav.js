import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab } from 'bootstrap';
import Home from './home';
import Cart from './cart';
import Shop from './shop';

const tab = createBottomTabNavigator();

export default function bottomNav() {
  return (
    <tab.Navigator>
        <tab.Screen name="Home" component={Home} />
        <tab.Screen name="Cart" component={Cart} />
        <tab.Screen name="Shop" component={Shop} />
    </tab.Navigator>
  );
}
