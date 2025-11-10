import React from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const CustomDrawer = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props} contentContainerStyle={{ flex:1,paddingLeft:10 }}>
        <ImageBackground
          source={require('../assets/images/bg.jpeg')}
          style={{ padding: 20 }}
        >
          <Image
            source={require('../assets/images/contact.png')}
            style={{ height: 80, width: 80, borderRadius: 40, marginBottom: 10 }}
          />
          <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>Abhishek</Text>
          <Text style={{ color: '#fff', fontSize: 14 }}>Profile</Text>
        </ImageBackground>

        <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: 10 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>

        {/* <TouchableOpacity
          onPress={() => alert('Share App')}
          style={{ paddingVertical: 15, flexDirection: 'row', alignItems: 'center' }}
        >
          <Image
            source={require('../assets/images/32.png')}
            style={{ width: 22, height: 22 }}
            resizeMode="contain"
          />
          <Text style={{ fontSize: 15, marginLeft: 10 }}>Share</Text>
        </TouchableOpacity> */}

        {/* <TouchableOpacity
          onPress={() => alert('Logged Out')}
          style={{ paddingVertical: 15, flexDirection: 'row', alignItems: 'center' }}
        >
          <Image
            source={require('../assets/images/contact.png')}
            style={{ width: 22, height: 22 }}
            resizeMode="contain"
          />
          <Text style={{ fontSize: 15, marginLeft: 10, color: 'red' }}>Logout</Text>
        </TouchableOpacity> */}
    </View>
  );
};

export default CustomDrawer;
