import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Home';
import Profile from '../Profile';
import UserList from '../UserList';
import AudioCall from '../Component/AudioCall';

const StackNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }} 
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="UserList" component={UserList} />
            <Stack.Screen name="AudioCall" component={AudioCall} />


    </Stack.Navigator>
  );
};

export default StackNavigation;
