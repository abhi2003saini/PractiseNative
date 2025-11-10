// import { View, Text } from 'react-native'
// import React from 'react'

// const DrawerNav = () => {
//   return (
//     <View>
//       <Text>DrawerNav</Text>
//     </View>
//   )
// }

import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import BottomTab from './Bootomtab'
import Profile from '../Profile'
import CustomDrawer from '../Component/CustomDrawer'

const Drawer = createDrawerNavigator()

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#6200EE',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
          marginLeft: 20,
          fontSize: 15,
        },
      }}
    >
      <Drawer.Screen 
        name="MainTabs" 
        component={BottomTab}
        options={{
          title: 'Home',
          headerShown: false                          
        }}
      />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigation
