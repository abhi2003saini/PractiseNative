import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DrawerNavigation from './DrawerNav';
import Auth from './Auth/Auth';
import { useDispatch, useSelector } from 'react-redux';
import { setLoggedIn } from '../features/counter/counterSlice';

const MainNavigation = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.counter.loggedIn);

  useEffect(() => {
    const checkLogin = async () => {
      const token = await AsyncStorage.getItem('userToken');
      dispatch(setLoggedIn(!!token));
    };
    checkLogin();
  }, [dispatch]);

  return (
    <NavigationContainer>
      {isLoggedIn ? <DrawerNavigation /> : <Auth />}
    </NavigationContainer>
  );
};

export default MainNavigation;