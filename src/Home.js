// // // import { View, Text,FlatList, Image, Button, TextInput, TouchableOpacity } from 'react-native'
// // // import React, { useState } from 'react'

// // // const Home = () => {
// // //     const [like,setLike] = useState('false')
// // //     const [showtext,setShowText ] = useState('false')
// // //     const [bg,setBg] = useState('black')

// // //     const data  = [{
// // //         id:1,
// // //         imagePath: require('../src/assets/images/first.png'),
// // //         title:'hello How are you'
// // //     },{
// // //        id:2,
// // //         imagePath: require('../src/assets/images/second.png'),
// // //         title:'hello How are you'
// // //     },{
// // //          id:3,
// // //         imagePath: require('../src/assets/images/third.png'),
// // //         title:'hello How are you'
// // //     }]
// // //     const renderItem = () =>{
// // //         <View>
// // //             <Image source={item.imagePath}/>
// // //             <Text>{item.title}</Text>
// // //         </View>
// // //     }
// // //   return (
// // //     <>
// // //     <View>
// // //       <FlatList
// // //        data={data}
// // //        renderItem={renderItem}
// // //        horizontal
// // //        showsHorizontalScrollIndicator={false}
// // //        snapToAlignment='center'
// // //        decelerationRate='fast'
// // //        pagingEnabled
// // //       />
// // //     </View>
// // //     {
// // //       like ? <View style={{backgroundColor:'red'}}></View> :<View style={{backgroundColor:'black'}}></View>
// // //     }
// // //     <TouchableOpacity onPress={()=> setShowText(!showtext)} />
// // //    {
// // //     setShowText ? 'HideText':'ShowText'
// // //    }
// // //    <Text>{showtext}</Text>

// // //    <TouchableOpacity onPress={()=>setBg('black')}/>

// // // </>

// // //   )
// // // }

// // // export default Home

// // import { View, Text, TouchableOpacity } from 'react-native'
// // import React, { useState } from 'react'

// // const Home = () => {

// //         const [count,setCount] = useState();

// //   return (
// //     <View>
// //       <TouchableOpacity onPress={(count) => count+1}/>
// //       <Text>Counts :{count}</Text>
// //             <TouchableOpacity onPress={(count) => count-1}/>

// //     </View>
// //   )
// // }

// // export default Home

// import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
// import React, { useState } from 'react';

// const Home = () => {
//   const [task, setTask] = useState('');

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.header}>ToDo List</Text>

//       <TextInput
//         value={task}
//         placeholder="Enter your task"
//         onChangeText={(task) => setTask(task)}
//         style={styles.input}
//         placeholderTextColor="#888"
//       />

//       <View style={styles.buttonContainer}>
//         <TouchableOpacity style={styles.editButton}>
//           <Text style={styles.buttonText}>Edit</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.deleteButton}>
//           <Text style={styles.buttonText}>Delete</Text>
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// };

// export default Home;

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     backgroundColor: '#f8f8f8',
//     minHeight: '100%',
//   },
//   header: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 30,
//     color: '#333',
//   },
//   input: {
//     width: '100%',
//     height: 50,
//     borderRadius: 25,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     paddingHorizontal: 20,
//     marginBottom: 20,
//     backgroundColor: '#fff',
//     fontSize: 16,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 30,
//   },
//   editButton: {
//     flex: 1,
//     backgroundColor: '#4CAF50',
//     paddingVertical: 12,
//     borderRadius: 25,
//     marginRight: 10,
//     alignItems: 'center',
//   },
//   deleteButton: {
//     flex: 1,
//     backgroundColor: '#F44336',
//     paddingVertical: 12,
//     borderRadius: 25,
//     marginLeft: 10,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   taskCard: {
//     backgroundColor: '#fff',
//     padding: 15,
//     borderRadius: 15,
//     marginBottom: 15,
//     elevation: 3, // shadow for Android
//     shadowColor: '#000', // shadow for iOS
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//   },
//   taskText: {
//     fontSize: 16,
//     marginBottom: 10,
//     color: '#333',
//   },
//   cardButtons: {
//     flexDirection: 'row',
//     justifyContent: 'flex-end',
//   },
//   editCardButton: {
//     backgroundColor: '#4CAF50',
//     paddingVertical: 6,
//     paddingHorizontal: 15,
//     borderRadius: 20,
//     marginRight: 10,
//   },
//   deleteCardButton: {
//     backgroundColor: '#F44336',
//     paddingVertical: 6,
//     paddingHorizontal: 15,
//     borderRadius: 20,
//   },
//   cardButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
// });

// import { View, Text } from 'react-native';
// import React, { useState, useEffect } from 'react';
// import { GiftedChat } from 'react-native-gifted-chat';

// const Home = () => {
//   const [messages, setMessages] = useState([]);

//   useEffect(() => {
//     setMessages([
//       {
//         _id: 1,
//         text: 'Hello developer',
//         createdAt: new Date(),
//         user: {
//           _id: 2,
//           name: 'React Native',
//           // avatar: 'https://placeimg.com/140/140/any',  // Uncomment if needed
//         },
//       },
//     ]);
//   }, []);

//   const onSend = (messageArray) => {
//     setMessages((previousMessages) =>
//       GiftedChat.append(previousMessages, messageArray)
//     );
//   };

//   return (
//     <View style={{ flex: 1 }}>
//       <GiftedChat
//         messages={messages}
//         onSend={onSend}  // Simplified
//         user={{
//           _id: 1,
//         }}
//       />
//     </View>
//   );
// };

// export default Home;
// import { View, Text, TouchableOpacity, Alert, Image, StyleSheet } from 'react-native';
// import React, { useEffect } from 'react';
// import { useNavigation } from '@react-navigation/native';
// import TestApi from '../src/Screens/TestApi';
// import { GoogleSignin } from '@react-native-google-signin/google-signin';
// import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

// const Home = () => {
//   const navigation = useNavigation();

//   useEffect(() => {
//     GoogleSignin.configure({
//       webClientId: '636256082403-ac7tsr5apdkdo4rbtb3ir4fdr4u0h87p.apps.googleusercontent.com',
//     });
//     console.log('Google Sign-In configured');
//   }, []);

//   const signInWithGoogle = async () => {
//     try {
//       await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });

//       console.log('Trying Google Sign-In...');
//       const userInfo = await GoogleSignin.signIn();

//       console.log(' GOOGLE SIGN-IN SUCCESSFUL');
//       console.log(' Full User Info:', JSON.stringify(userInfo, null, 2));

//       console.log(' ID:', userInfo.user.id);
//       console.log(' Email:', userInfo.user.email);

//       Alert.alert('Success', `Welcome ${userInfo.user.name}`);
//     } catch (error) {
//       console.log('GOOGLE SIGN-IN ERROR:', error);
//       Alert.alert('Error', 'Google Sign-In failed');
//     }
//   };

//   return (
//     <>
//     <View style={{ flexDirection: 'column', gap: 10, padding: 20 }}>
// <View style={{flexDirection:'row',gap:10}}>
// <TouchableOpacity onPress={() => navigation.openDrawer()}>
//   <Image source={require('../src/assets/images/header.png')} style={{width:30,height:25}}/>
//   </TouchableOpacity>
//   <Text style={{fontSize:20}}>Home</Text>
// </View>

//       {/* <TouchableOpacity
//         style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5, marginTop: 20 }}
//         onPress={signInWithGoogle}
//       >
//         <Text style={{ color: '#fff', textAlign: 'center' }}>Sign In With Google</Text>
//       </TouchableOpacity> */}

//     </View>
//     <MapView
//        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
//        style={styles.map}
//        region={{
//          latitude: 37.78825,
//          longitude: -122.4324,
//          latitudeDelta: 0.015,
//          longitudeDelta: 0.0121,
//        }}
//      ></MapView>
//      </>
//   );
// };

// export default Home;

// const styles = StyleSheet.create({
//    container: {
//    ...StyleSheet.absoluteFillObject,
//    height: 400,
//    width: 400,
//    justifyContent: 'flex-end',
//    alignItems: 'center',
//  },

//   map:{
//      ...StyleSheet.absoluteFillObject,

//   }

// })

import React, { useEffect, useState, useRef } from 'react';
import {
  View,
  StyleSheet,
  PermissionsAndroid,
  Platform,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
  Text,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import MapView, {
  PROVIDER_GOOGLE,
  Marker,
  Callout,
  Polyline,
  Circle,
} from 'react-native-maps';

const GOOGLE_MAPS_APIKEY = 'YOUR_GOOGLE_API_KEY'; // replace with your own

const Home = () => {
  const [origin, setOrigin] = useState({
    latitude: 28.7041,
    longitude: 77.1025,
  });
  const [destination, setDestination] = useState({
    latitude: 28.5355,
    longitude: 77.391,
  });
  const [fromText, setFromText] = useState('');
  const [toText, setToText] = useState('');
  const [activeField, setActiveField] = useState('from');
  const [suggestions, setSuggestions] = useState([]);
  const mapRef = useRef(null);

  useEffect(() => {
    requestLocationPermission();
  }, []);

  const requestLocationPermission = async () => {
    try {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message: 'This app needs access to your location.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Location permission granted');
        } else {
          console.log('Location permission denied');
        }
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const getSuggestions = async (input) => {
    if (!input) {
      setSuggestions([]);
      return;
    }
    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&key=${GOOGLE_MAPS_APIKEY}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.status === 'OK') {
        setSuggestions(data.predictions);
      } else {
        console.warn('Places Autocomplete not OK:', data.status);
        setSuggestions([]);
      }
    } catch (err) {
      console.error(err);
      setSuggestions([]);
    }
  };

  const selectPlace = async (placeId, field) => {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${GOOGLE_MAPS_APIKEY}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.status === 'OK') {
        const loc = data.result.geometry.location;
        if (field === 'from') {
          setOrigin({
            latitude: loc.lat,
            longitude: loc.lng,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
          });
          setFromText(data.result.formatted_address);
        } else if (field === 'to') {
          setDestination({
            latitude: loc.lat,
            longitude: loc.lng,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
          });
          setToText(data.result.formatted_address);
        }
        setSuggestions([]);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const dismissKeyboardAndSuggestions = () => {
    Keyboard.dismiss();
    setSuggestions([]);
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboardAndSuggestions}>
      <View style={styles.container}>
        {/* ======= INPUT BOXES ======= */}
        <View style={styles.inputContainer}>
          <View style={styles.inputBox}>
            <TextInput
              style={styles.input}
              placeholder="From (Your Location)"
              value={fromText}
              onChangeText={(text) => {
                setActiveField('from');
                setFromText(text);
                getSuggestions(text);
              }}
            />
            <Image
              source={require('../src/assets/images/search.png')}
              style={styles.searchIcon}
            />
          </View>

          <View style={styles.inputBox}>
            <TextInput
              style={styles.input}
              placeholder="To (Destination)"
              value={toText}
              onChangeText={(text) => {
                setActiveField('to');
                setToText(text);
                getSuggestions(text);
              }}
            />
            <Image
              source={require('../src/assets/images/search.png')}
              style={styles.searchIcon}
            />
          </View>
        </View>

        {/* ======= SUGGESTION LIST ======= */}
        {suggestions.length > 0 && (
          <FlatList
            data={suggestions}
            keyExtractor={(item) => item.place_id}
            style={styles.suggestionsList}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.suggestionItem}
                onPress={() => selectPlace(item.place_id, activeField)}
              >
                <Text>{item.description}</Text>
              </TouchableOpacity>
            )}
          />
        )}

        {/* ======= MAP VIEW ======= */}
        <MapView
          ref={mapRef}
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            latitude: origin.latitude,
            longitude: origin.longitude,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
          }}
          // ======= MAPVIEW PROPERTIES =======
          showsUserLocation={true}
          showsMyLocationButton={true}
          followsUserLocation={true}
          showsCompass={true}
          showsIndoors={true}
          showsIndoorLevelPicker={true}
          showsTraffic={false}
          loadingEnabled={true}
          zoomEnabled={true}
          rotateEnabled={true}
          scrollEnabled={true}
          pitchEnabled={true}
          moveOnMarkerPress={true}
          toolbarEnabled={true}
          mapType="standard" // 'standard', 'satellite', 'hybrid', 'terrain', 'none', 'mutedStandard'
          onRegionChange={(region) => console.log('Region changing:', region)}
          onRegionChangeComplete={(region) => console.log('Region changed:', region)}
          onPress={(e) => console.log('Map pressed:', e.nativeEvent.coordinate)}
          onLongPress={(e) => console.log('Map long pressed:', e.nativeEvent.coordinate)}
          onMapReady={() => console.log('Map is ready!')}
          onMarkerPress={(e) => console.log('Marker pressed:', e.nativeEvent)}
        >
          <Marker
            coordinate={origin}
            title="Origin"
            description="This is your starting location"
            identifier="originMarker"
            pinColor="green"
            draggable={true}
            flat={true}
            stopPropagation={true}
            opacity={1.0}
            onDragStart={(e) =>
              console.log('Drag start:', e.nativeEvent.coordinate)
            }
            onDrag={(e) => console.log('Dragging:', e.nativeEvent.coordinate)}
            onDragEnd={(e) => {
              console.log('Drag end:', e.nativeEvent.coordinate);
              setOrigin(e.nativeEvent.coordinate);
            }}
            onPress={() => console.log('Origin Marker Pressed')}
          >
            <Image
              source={require('../src/assets/images/car.png')}
              style={{ width: 45, height: 45 }}
              resizeMode="contain"
            />
            <Callout>
              <Text>📍 Your Starting Point</Text>
            </Callout>
          </Marker>

          {/* ======= DESTINATION MARKER ======= */}
          <Marker
            coordinate={destination}
            title="Destination"
            description="Your target location"
            pinColor="red"
            draggable={true}
            opacity={0.9}
            flat={false}
            onDragEnd={(e) => {
              console.log('Destination drag end:', e.nativeEvent.coordinate);
              setDestination(e.nativeEvent.coordinate);
            }}
          >
            <Callout>
              <Text>🎯 Destination Point</Text>
            </Callout>
          </Marker>

          {/* OPTIONAL EXTRAS (EXAMPLE) */}
          {/* Circle around origin */}
          <Circle
            center={origin}
            radius={500}
            strokeWidth={2}
            strokeColor="rgba(0, 150, 255, 0.5)"
            fillColor="rgba(0,150,255,0.1)"
          />

          {/* Example Polyline (connects two points visually) */}
          <Polyline
            coordinates={[origin, destination]}
            strokeColor="blue"
            strokeWidth={3}
            lineDashPattern={[1]}
          />
        </MapView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { ...StyleSheet.absoluteFillObject },
  inputContainer: {
    position: 'absolute',
    top: 40,
    width: '90%',
    alignSelf: 'center',
    zIndex: 1,
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 5,
    elevation: 3,
  },
  input: {
    flex: 1,
    paddingVertical: 8,
    fontSize: 14,
  },
  searchIcon: {
    width: 20,
    height: 20,
    tintColor: 'gray',
    marginLeft: 8,
  },
  suggestionsList: {
    position: 'absolute',
    top: 120,
    left: 15,
    right: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 10,
    maxHeight: 200,
  },
  suggestionItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
});

export default Home;


