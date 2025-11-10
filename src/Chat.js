// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import Video from 'react-native-video';

// const Chat = () => {
//   const [paused, setPaused] = useState(false);
//   const [muted, setMuted] = useState(false);
//   const [rate, setRate] = useState(1.0);
//   const [volume, setVolume] = useState(1.0);

//   const handleEnd = () => {
//     console.log('Video ended');
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}> React Native Video Player</Text>

//       <Video
//         source={{ uri: 'https://www.w3schools.com/html/mov_bbb.mp4' }} 
//         paused={paused}
//         muted={muted}
//         repeat={false}
//         controls={true}
//         resizeMode="cover"
//         volume={volume}
//         rate={rate} 
//         playInBackground={false}
//         playWhenInactive={false}
//         ignoreSilentSwitch="ignore"
//         audioOnly={false}
//         disableFocus={false}

//         poster="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"
//         fullscreen={false}
//         fullscreenOrientation="landscape"

      
//         onLoadStart={() => console.log('Loading video...')}
//         onLoad={(data) => console.log('Video loaded:', data.duration, 'seconds')}
//         onBuffer={({ isBuffering }) =>
//           console.log('Buffering:', isBuffering)
//         }
//         onError={(err) => console.error('Video error:', err)}
//         onProgress={(progress) =>
//           console.log('Current time:', progress.currentTime)
//         }
//         onEnd={handleEnd}
//         onSeek={(seek) => console.log('Seek complete:', seek)}
//         onPlaybackStalled={() => console.log('Playback stalled')}
//         onPlaybackResume={() => console.log('Playback resumed')}
//         onReadyForDisplay={() => console.log('Ready to display')}
//         onTimedMetadata={(meta) => console.log('Timed metadata:', meta)}
//         onExternalPlaybackChange={(event) =>
//           console.log('External playback:', event)
//         }
//         style={styles.video}
//       />

//     </View>
//   );
// };

// export default Chat;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#111',
//     paddingTop: 50,
//   },
//   title: {
//     color: 'white',
//     fontSize: 20,
//     marginBottom: 20,
//   },
//   video: {
//     width: 320,
//     height: 200,
//     backgroundColor: '#000',
//   },
//   controls: {
//     marginTop: 20,
//   },
//   btn: {
//     backgroundColor: '#333',
//     padding: 10,
//     marginVertical: 5,
//     borderRadius: 8,
//   },
//   btnText: {
//     color: 'white',
//     fontSize: 16,
//   },
// });
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
  Platform,
  Alert,
  ActivityIndicator,
  KeyboardAvoidingView,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import { launchImageLibrary } from 'react-native-image-picker';
import { useNavigation } from '@react-navigation/native';

const ChatScreen = ({ route }) => {
  const [message, setMessage] = useState('');
  const [messagesList, setMessagesList] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const { currentUser, receiverUser } = route?.params || {};
  const navigation = useNavigation();

  if (!currentUser || !receiverUser) {
    return (
      <View style={styles.centered}>
        <Text style={{ color: 'red' }}>Missing user data! Please navigate correctly.</Text>
      </View>
    );
  }

  // ✅ Unique Chat ID
  const chatId =
    currentUser.id > receiverUser.id
      ? `${currentUser.id}_${receiverUser.id}`
      : `${receiverUser.id}_${currentUser.id}`;

  // 🔄 Real-time listener
  useEffect(() => {
    const unsubscribe = firestore()
      .collection('chats')
      .doc(chatId)
      .collection('messages')
      .orderBy('createdAt', 'asc')
      .onSnapshot(snapshot => {
        const allMessages = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setMessagesList(allMessages);
      });

    return () => unsubscribe();
  }, []);

  // 📸 Pick Image
  const pickImage = () => {
    const options = {
      mediaType: 'photo',
      quality: 0.8,
      maxWidth: 1500,
      maxHeight: 1500,
      selectionLimit: 1,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) return;
      if (response.errorMessage) {
        Alert.alert('Error', response.errorMessage);
        return;
      }
      setSelectedImage(response.assets[0]);
    });
  };

  // ☁️ Upload Image to Firebase Storage
  const uploadImage = async uri => {
    if (!uri) return null;

    setUploading(true);
    const filename = uri.substring(uri.lastIndexOf('/') + 1);
    const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
    const storageRef = storage().ref(`chat_images/${chatId}/${filename}`);

    try {
      await storageRef.putFile(uploadUri);
      const downloadURL = await storageRef.getDownloadURL();
      return downloadURL;
    } catch (error) {
      console.error('Upload failed:', error);
      Alert.alert('Upload Error', 'Image upload failed.');
      return null;
    } finally {
      setUploading(false);
    }
  };

  // ✉️ Send Message
  const sendMessage = async () => {
    if (!message.trim() && !selectedImage) return;

    let imageUrl = null;
    if (selectedImage) {
      imageUrl = await uploadImage(selectedImage.uri);
      if (!imageUrl) return;
    }

    await firestore()
      .collection('chats')
      .doc(chatId)
      .collection('messages')
      .add({
        text: message.trim(),
        senderId: currentUser.id,
        receiverId: receiverUser.id,
        imageUrl: imageUrl || '',
        createdAt: firestore.FieldValue.serverTimestamp(),
      });

    setMessage('');
    setSelectedImage(null);
  };

  const handlePhoneCall = () => {
    navigation.navigate('AudioCall');
  };

  const handleVideoCall = () => {
    navigation.navigate('VideoCall', {
      userID: currentUser.id,
      userName: currentUser.name,
      callID: `${currentUser.id}_${receiverUser.id}`,
    });
  };

  // 💬 Render each message
  const renderMessage = ({ item }) => {
    const isSender = item.senderId === currentUser.id;

    return (
      <View
        style={[
          styles.messageBubble,
          isSender ? styles.rightBubble : styles.leftBubble,
        ]}
      >
        {item.imageUrl ? (
          <Image source={{ uri: item.imageUrl }} style={styles.chatImage} />
        ) : null}
        {item.text ? (
          <Text style={[styles.messageText, isSender && { color: '#fff' }]}>
            {item.text}
          </Text>
        ) : null}
      </View>
    );
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.container}
    >
      {/* Header Bar */}
      <View
        style={{
          backgroundColor: 'yellow',
          width: '100%',
          height: 50,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: '600', color: 'black' }}>Chat</Text>

        <TouchableOpacity style={{ left: 130 }} onPress={handleVideoCall}>
          <Image
            source={require('../src/assets/images/VideoCall.png')}
            style={{ width: 24, height: 28 }}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={handlePhoneCall}>
          <Image
            source={require('../src/assets/images/phonecall.png')}
            style={{ width: 24, height: 24 }}
          />
        </TouchableOpacity>
      </View>

      {/* Chat Messages */}
      <FlatList
        data={messagesList}
        renderItem={renderMessage}
        keyExtractor={item => item.id}
        contentContainerStyle={{ padding: 10, backgroundColor: 'white', flexGrow: 1 }}
      />

      {/* Image Preview */}
      {selectedImage && (
        <View style={styles.previewContainer}>
          <Image source={{ uri: selectedImage.uri }} style={styles.previewImage} />
          {uploading && <ActivityIndicator size="small" color="#0B93F6" />}
          <TouchableOpacity onPress={() => setSelectedImage(null)}>
            <Text style={{ color: 'red', marginTop: 4 }}>Remove</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Message Input */}
      <View style={styles.inputContainer}>
        <TouchableOpacity onPress={pickImage} style={styles.attachButton}>
          <Image
            source={require('../src/assets/images/attach.png')}
            style={{ width: 22, height: 22, tintColor: '#4e4e4eff' }}
          />
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          placeholder="Message"
          placeholderTextColor="#999"
          value={message}
          onChangeText={setMessage}
        />

        <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
          <Image
            source={require('../src/assets/images/send.png')}
            style={{ width: 24, height: 24, tintColor: '#4e4e4eff' }}
          />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
  centered: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  messageBubble: {
    marginVertical: 4,
    padding: 10,
    borderRadius: 8,
    maxWidth: '80%',
  },
  rightBubble: {
    backgroundColor: '#0B93F6',
    alignSelf: 'flex-end',
  },
  leftBubble: {
    backgroundColor: '#E5E5EA',
    alignSelf: 'flex-start',
  },
  messageText: { fontSize: 16, color: '#000' },
  chatImage: { width: 150, height: 150, borderRadius: 8 },
  previewContainer: {
    alignItems: 'center',
    marginBottom: 8,
  },
  previewImage: { width: 100, height: 100, borderRadius: 8 },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    backgroundColor: '#f2f2f2',
  },
  attachButton: { marginHorizontal: 8 },
  input: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 15,
    height: 40,
    fontSize: 16,
  },
  sendButton: { marginHorizontal: 8 },
});
