export default ({ config }) => {
  return {
    ...config,
    ios: {
      "bundleIdentifier": "com.pixlove.android"
    },
    plugins: [
      [
        '@config-plugins/react-native-webrtc',
        {
          cameraPermission:
            'Camera permission is required to click pictures, (Example: setting a profile picture, or taking a picture and uploading it to a chat and while video calling some one within the app.)',
          microphonePermission:
            'Microphone permission is required to record and use audio, (Example: recording a voice message while chatting with someone within the app or while in video calling or voice calling.)',
        }

      ],
      [
        // 'expo-build-properties',
        // {
        //   android: {
        //     compileSdkVersion: 34,
        //     targetSdkVersion: 34,
        //     buildToolsVersion: '34.0.0',
        //     permissions: [
        //       'ACCESS_COARSE_LOCATION',
        //       'ACCESS_FINE_LOCATION',
        //       'ACCESS_BACKGROUND_LOCATION'
        //     ]
        //   },
        //   ios: {
        //     deploymentTarget: '13.4',
        //     infoPlist: {
        //       NSLocationWhenInUseUsageDescription:
        //         'Location permission is required for providing accurate location-based features.',
        //       NSLocationAlwaysUsageDescription:
        //         'Location permission is required for continuous background location access to enhance your app experience.',
        //       NSLocationAlwaysAndWhenInUseUsageDescription:
        //         'Location permission is required for both foreground and background access to ensure full app functionality.'
        //     }
        //   },
        // },
      ],

    ],
  };
};