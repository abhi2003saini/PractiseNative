import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  ZegoUIKitPrebuiltCall,
  ONE_ON_ONE_VIDEO_CALL_CONFIG,
} from '@zegocloud/zego-uikit-prebuilt-call-rn';


const VideoCall = ({ route, navigation }) => {
  const randomUserID = String(Math.floor(Math.random() * 100000));

  const { userID, userName, callID } = route.params || {};

  const appID = 271832574;
  const appSign = '0b2f637922b685e0f519480f8cdb9e8c56a4a715';

  return (
    <View style={styles.container}>
      <ZegoUIKitPrebuiltCall
        appID={appID}
        appSign={appSign}
        userID={String(userID || randomUserID)} 
        userName={userName || 'User'}
        callID={callID || 'defaultCallID'}
        config={{
          ...ONE_ON_ONE_VIDEO_CALL_CONFIG,
          onCallEnd: () => {
            navigation.goBack();
          },
        }}
      />
    </View>
  );
};

export default VideoCall;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
