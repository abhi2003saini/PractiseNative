import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const AudioCall = ({ route, navigation }) => {
  const { receiverUser } = route?.params || {
    receiverUser: {
      name: 'Amit Sharma',
      image: require('../assets/images/contact.png'),
    },
  };

  const [callStatus, setCallStatus] = useState('Ringing...');

  useEffect(() => {
    // Simulate connecting and ongoing call
    const timer1 = setTimeout(() => setCallStatus('Connecting...'), 2000);
    const timer2 = setTimeout(() => setCallStatus('Ongoing Call'), 4000);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const endCall = () => {
    setCallStatus('Call Ended');
    setTimeout(() => navigation.goBack(), 1000);
  };

  return (
    <View style={styles.container}>
      {/* User Image */}
      <Image
        source={receiverUser.image}
        style={styles.userImage}
        resizeMode="cover"
      />

      {/* Name & Status */}
      <Text style={styles.userName}>{receiverUser.name}</Text>
      <Text style={styles.statusText}>{callStatus}</Text>

      {/* Call Control Buttons */}
      <View style={styles.controls}>
        {/* Speaker */}
        <TouchableOpacity style={styles.controlButton}>
          <Image
            source={require('../assets/images/mic.png')}
            style={styles.icon}
          />
          <Text style={styles.controlText}>Speaker</Text>
        </TouchableOpacity>

        {/* End Call */}
        <TouchableOpacity style={styles.endCallButton} onPress={endCall}>
          <Image
            source={require('../assets/images/endcall.png')}
            style={styles.endIcon}
          />
        </TouchableOpacity>

        {/* Mic */}
        <TouchableOpacity style={styles.controlButton}>
          <Image
            source={require('../assets/images/mic.png')}
            style={styles.icon}
          />
          <Text style={styles.controlText}>Mute</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AudioCall;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
  },
  userImage: {
    width: 150,
    height: 150,
    borderRadius: 100,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: '#00FF6A',
  },
  userName: {
    color: 'white',
    fontSize: 22,
    fontWeight: '600',
  },
  statusText: {
    color: '#ccc',
    fontSize: 16,
    marginTop: 5,
    marginBottom: 60,
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '90%',
  },
  controlButton: {
    alignItems: 'center',
  },
  controlText: {
    color: 'white',
    fontSize: 14,
    marginTop: 5,
  },
  icon: {
    width: 50,
    height: 50,
    tintColor: 'white',
  },
  endCallButton: {
    backgroundColor: 'red',
    borderRadius: 50,
    padding: 20,
  },
  endIcon: {
    width: 30,
    height: 30,
    tintColor: 'white',
  },
});
