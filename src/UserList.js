// Example: UserList.js

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const UserList = () => {
  const navigation = useNavigation();

  const currentUser = {
    id: 'user_1',
    name: 'Abhishek',
    email: 'abhi@gmail.com',
  };

  const receiverUser = {
    id: 'user_2',
    name: 'Ravi',
    email: 'ravi@gmail.com',
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Chat', {
            currentUser,
            receiverUser,
          })
        }>
        <Text style={{ color: 'blue', fontSize: 20 }}>Open Chat</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserList;
