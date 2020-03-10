import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import List from '../pages/List';
import Library from '../pages/Library';
import Mail from '../pages/Mail';
import Trending from '../pages/Trending';
import Subscribe from '../pages/Subscribe';
import Detail from '../pages/Detail';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <NavigationContainer>
      <HomeStack.Navigator headerMode="none">
        <HomeStack.Screen name="Home" component={TabScreen} />
        <HomeStack.Screen name="Detail" component={Detail} />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}

function TabScreen() {
  return (
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
  );
}

export default function Route() {
  return (
    <HomeStackScreen />
  )
}