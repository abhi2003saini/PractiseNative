import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../Screens/Authencation/Login';
import Signup from '../../Screens/Authencation/Signup';


const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}  initialRouteName='Login'>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
};

export default AuthStack;
