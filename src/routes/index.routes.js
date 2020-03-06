import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import List from '../pages/List';
import Library from '../pages/Library';
import Mail from '../pages/Mail';
import Trending from '../pages/Trending';
import Subscribe from '../pages/Subscribe';

const Tab = createBottomTabNavigator();

export default function routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            const imageRef = {
                Home: require('../assets/home.png'),
                Trending: require('../assets/trend.png'),
                Subscribe: require('../assets/subscription.png'),
                Mail: require('../assets/email.png'),
                Library: require('../assets/library.png'),
            }
            return <Image style={{ width: 25, height: 25, tintColor: color }} source={imageRef[route.name]} />;
          },
        })}
        tabBarOptions={{
            activeTintColor: 'red',
            inactiveTintColor: '#666'
        }}
      >
        <Tab.Screen name="Home" component={List} />
        <Tab.Screen name="Trending" component={Trending} />
        <Tab.Screen name="Subscribe" component={Subscribe} />
        <Tab.Screen name="Mail" component={Mail} />
        <Tab.Screen name="Library" component={Library} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}