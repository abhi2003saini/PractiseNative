import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { resetUserData } from './features/counter/counterSlice';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const dispatch = useDispatch();
  const storedUser = useSelector((state) => state.counter); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const handleLogin = () => {
    // if (email === storedUser.email && password === storedUser.password) {
    //   Alert.alert('Success', `Welcome back, ${storedUser.name || 'User'}!`);
    // } else {
    //   Alert.alert('Error', 'Invalid email or password!');
    // }

    navigation.navigate('Home');
  };

  const handleReset = () => {
    dispatch(resetUserData());
    setEmail('');
    setPassword('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
        <Text style={styles.resetText}>Reset Stored Data</Text>
      </TouchableOpacity>

      {storedUser.email ? (
        <View style={styles.userBox}>
          <Text style={styles.userTitle}> Stored User Data (for reference)</Text>
          <Text>Name: {storedUser.name}</Text>
          <Text>Email: {storedUser.email}</Text>
        </View>
      ) : (
        <Text style={styles.noDataText}>No user data stored. Please signup first.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  resetButton: {
    alignItems: 'center',
    marginBottom: 20,
  },
  resetText: {
    color: '#FF0000',
    fontSize: 16,
  },
  userBox: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginTop: 20,
  },
  userTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  noDataText: {
    textAlign: 'center',
    color: '#666',
    marginTop: 20,
  },
});

export default Login;
