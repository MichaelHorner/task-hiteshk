
import React, {useState, useEffect} from 'react';
import { useSessionData } from "../component/SessionContext";
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Image
} from 'react-native';
import {User} from '../model/User';
import {Settings} from '../model/Settings';

const SplashScreen = ({navigation}) => {
  //State for ActivityIndicator animation
  const [animating, setAnimating] = useState(true);
  const { sessionData, updateSessionData,clearSessionData  } = useSessionData();
  useEffect(() => {

 
    setTimeout(() => {
      setAnimating(false);
      //clearSessionData();
      let userToRegister = new User("", "", "", "");
      let settingsToUser = new Settings("",sessionData, updateSessionData );
      userToRegister.setting = settingsToUser;
      let stringifyUser = JSON.stringify(userToRegister);
      updateSessionData({ pageContext: "Start", currentLanguage:"en", userToRegister:stringifyUser, userOriginal:userToRegister,favorites:"", testUserArray:[] });
    navigation.navigate("Start");
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
   

      <Image
        source={require('../assets/Logo.png')}
        style={{width: '90%', resizeMode: 'contain', margin: 30}}
      />
      <ActivityIndicator
        animating={animating}
        color="#F7F7F7"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1E1E1E',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
});