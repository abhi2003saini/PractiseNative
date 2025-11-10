import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native'; 
import Home from '../Home';
import Profile from '../Profile';

import homeIcon from '../assets/images/contact.png'; 
import profileIcon from '../assets/images/32.png';

const Bootomtab = () => {
  const Tab = createBottomTabNavigator();
  
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { height: 60 }, 
        tabBarLabelStyle: { fontSize: 12 },
        tabBarActiveTintColor: '#007BFF', 
        tabBarInactiveTintColor: '#8e8e8e', 
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Image
              source={homeIcon}
              style={{
                width: size, 
                height: size,
                tintColor: color, 
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile', 
          tabBarIcon: ({ color, size }) => (
            <Image
              source={profileIcon}
              style={{
                width: size, 
                height: size,
                tintColor: color, 
              }}
            />
          ),
        }}
      />
      
    </Tab.Navigator>
  );
}

export default Bootomtab;
