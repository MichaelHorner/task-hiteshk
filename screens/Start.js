import React, { useEffect } from "react";
import {
  Text,
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert
} from "react-native";
// import * as ScreenOrientation from 'expo-screen-orientation';
import { useSessionData } from "../component/SessionContext";
import { User } from '../model/User';
import { Settings } from '../model/Settings';
import { styles } from "../utils/styles";
import languages from "../utils/translations";

const Start = ({ navigation }) => {
  const { sessionData, updateSessionData, clearSessionData } = useSessionData();
  // useEffect(() => {
  //   async function changeScreenOrientation() {
  //     await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
  //   }

  //   changeScreenOrientation();
  // }, []);

  const loginEmail = () => {
    Alert.alert("Not implemented yet");
  };
  console.log("Start" + sessionData.currentLanguage)
  const currentLanguage = sessionData.currentLanguage || 'en';

  const t = languages[currentLanguage];

  const goToRegister = () => {
    let userToRegister = new User("Max Mustermann", "test@test.de", "", "+49123456789");
    let settingsToUser = new Settings("", sessionData, updateSessionData);
    userToRegister.setting = settingsToUser;
    let stringifyUser = JSON.stringify(userToRegister);
    updateSessionData({ pageContext: "RegisterBirthday", userToRegister: stringifyUser, userOriginal: userToRegister, favorites: "", testUserArray: [] });
    navigation.navigate("RegisterBirthday");
  };

  const goToLogin = () => {
    Alert.alert("Not implemented yet");
  };

  return (

    <SafeAreaView style={styles.loginscreen}>
      <View style={styles.fixedHeader}>
        {/* Logo */}
        <Image source={require("../assets/Logo.png")} style={styles.logoStyle} />
      </View>

      <View style={styles.contentContainer}>
        <ScrollView style={{ flexGrow: 1 }}>

          <View style={styles.bigTextContainerNew}>
            <Text style={[styles.bigTextNew, { marginTop: 20 }]}>{t.bigText}</Text>
          </View>

        </ScrollView>
        <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 10 }}>
          <View style={styles.bigTextContainer}>
            <Text style={{ color: 'white', textAlign: 'center' }}>
              {t.termsAndPrivacyText}
            </Text>
          </View>

          <TouchableOpacity style={styles.roundedButtonWhiteStretch} onPress={goToRegister}>
            <Text style={styles.buttonText}>{t.accountBtn}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.roundedButtonNew} onPress={goToLogin}>
            <Text style={styles.buttonPinkText}>{t.LoginBtn}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={loginEmail}>
          <Text style={{ color: 'white', textAlign: 'center' }}>
            {t.loginIssuesText}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>

  );
};

export default Start;
