// // import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
// // import React, { useState } from 'react'
// // import { useDispatch, useSelector } from 'react-redux'
// // import { decrement, increment, reset } from './features/counter/counterSlice'

// // const Profile = () => {
// //   const [amount,setAmount] = useState()
// //   const count = useSelector((state) => state.counter.value)
// //   const dispatch = useDispatch()

// //   const handleIncrementClik = () => {
// //     dispatch(increment())
// //   }

// //   const handleDecrementClik = () => {
// //     dispatch(decrement())
// //   }

// //   const handleResetClik = () => {
// //     dispatch(reset())
// //   }

// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.title}>Redux Counter Example</Text>

// //       <View style={styles.counterBox}>
// //         <TouchableOpacity style={styles.button} onPress={handleDecrementClik}>
// //           <Text style={styles.buttonText}>-</Text>
// //         </TouchableOpacity>

// //         <Text style={styles.countText}>{count}</Text>

// //         <TouchableOpacity style={styles.button} onPress={handleIncrementClik}>
// //           <Text style={styles.buttonText}>+</Text>
// //         </TouchableOpacity>
// //       </View>

// //       <TouchableOpacity style={styles.resetButton} onPress={handleResetClik}>
// //         <Text style={styles.resetText}>Reset</Text>
// //       </TouchableOpacity>
// //     </View>
// //   )
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#f2f2f2',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     padding: 20,
// //   },
// //   title: {
// //     fontSize: 22,
// //     fontWeight: '700',
// //     color: '#333',
// //     marginBottom: 20,
// //   },
// //   counterBox: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     backgroundColor: '#fff',
// //     borderRadius: 12,
// //     padding: 20,
// //     shadowColor: '#000',
// //     shadowOffset: { width: 0, height: 2 },
// //     shadowOpacity: 0.2,
// //     shadowRadius: 4,
// //     elevation: 5,
// //   },
// //   button: {
// //     backgroundColor: '#007BFF',
// //     padding: 10,
// //     borderRadius: 8,
// //     marginHorizontal: 15,
// //   },
// //   buttonText: {
// //     fontSize: 22,
// //     color: '#fff',
// //     fontWeight: 'bold',
// //   },
// //   countText: {
// //     fontSize: 28,
// //     fontWeight: '700',
// //     color: '#333',
// //   },
// //   resetButton: {
// //     marginTop: 25,
// //     backgroundColor: '#FF3B30',
// //     paddingVertical: 10,
// //     paddingHorizontal: 20,
// //     borderRadius: 8,
// //   },
// //   resetText: {
// //     color: '#fff',
// //     fontSize: 18,
// //     fontWeight: '600',
// //   },
// // })

// // export default Profile


// import { View, Text, TouchableOpacity } from 'react-native';
// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { resetUserData, setLoggedIn } from '../src/features/counter/counterSlice'; 

// const Profile = () => {
//   const dispatch = useDispatch();

//   const handleLogout = () => {
//     dispatch(resetUserData()); 
//     dispatch(setLoggedIn(false));
//     console.log(handleLogout)
//   };

//   return (
//     <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
//     <View>
      
//     </View>
//       <TouchableOpacity
//         onPress={handleLogout}
//         style={{
//           backgroundColor:'lightblue',
//           width:100,
//           height:50,
//           alignItems:'center',
//           justifyContent:'center',
//           borderRadius:10,
//           marginTop:20
//         }}
//       >
//         <Text>Logout</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default Profile;

import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { resetUserData } from '../src/features/counter/counterSlice';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const { user, loggedIn } = useSelector((state) => state.counter);
  console.log('User Data:', user);

  const handleLogout = () => {
    dispatch(resetUserData());
    navigation.navigate('Login');
  };


  return (
    <View style={styles.container}>
      {loggedIn && user ? (
        <>
          <Text style={styles.title}>Profile</Text>
          <Text style={styles.text}>Username: {user?.username}</Text>
          <Text style={styles.text}>First Name: {user?.firstName}</Text>
          <Text style={styles.text}>Last Name: {user?.lastName}</Text>
          <Text style={styles.text}>
            Token: {user?.token ? user.token.substring(0, 20) + '...' : 'N/A'}
          </Text>

          <TouchableOpacity style={styles.button} onPress={handleLogout}>
            <Text style={styles.buttonText}>Logout</Text>
          </TouchableOpacity>
        </>
      ) : (
        <Text style={styles.text}>Please login first</Text>
      )}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
  },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: '#fff' },
  text: { fontSize: 16, color: '#fff', marginBottom: 10 },
  button: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: { color: '#fff', fontSize: 16 },
});



