import React, { useState, useEffect, useRef } from "react";
import {
  Text,
  SafeAreaView,
  View,
  TextInput,
  Image,
  Alert,
  TouchableOpacity,
  Keyboard,
  Dimensions
} from "react-native";
import HorizontalContainer from '../component/HorizontalContainer';
import { styles } from "../utils/styles";
import { useSessionData } from '../component/SessionContext';
import languages from "../utils/translations";

let userToRegister = null;

const RegisterBirthday = ({ navigation }) => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const [buttonY, setButtonY] = useState(0);
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  const dayInputRef = useRef(null);
  const monthInputRef = useRef(null);
  const yearInputRef = useRef(null);
  const { sessionData, updateSessionData } = useSessionData();
  const currentLanguage = sessionData.currentLanguage || 'en';
  const t = languages[currentLanguage];

  // useEffect(() => {
  //   try {
  //     userToRegister = JSON.parse(sessionData.userToRegister);
  //   } catch (e) {
  //     console.error("Parsing error:", e);
  //   }

  //   const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', (e) => {
  //     setKeyboardHeight(e.endCoordinates.height);
  //     setIsKeyboardVisible(true);
  //   });
  //   const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
  //     setKeyboardHeight(0);
  //     setIsKeyboardVisible(false);
  //   });

  //   return () => {
  //     keyboardDidShowListener.remove();
  //     keyboardDidHideListener.remove();
  //   };
  // }, []);

  const updateDay = (value) => {
    if (/^\d{0,2}$/.test(value) && (value === '' || parseInt(value, 10) >= 1 && parseInt(value, 10) <= 31 || value === '0')) {
      setDay(value);
      if ((value.startsWith('0') && value.length === 2) || value.length === 2 || (parseInt(value, 10) > 3 && value.length === 1)) {
        monthInputRef.current.focus();
      }
    } else if (value === '') {
      jumpToPreviousInput(dayInputRef, yearInputRef);
    }
  };

  const updateMonth = (value) => {
    if (value === '' || value === '0') {
      setMonth(value);
    } else {
      const intValue = parseInt(value, 10);
      if (/^\d{1,2}$/.test(value) && intValue >= 1 && intValue <= 12) {
        setMonth(value);
        if (value.length === 2 || (['2', '3', '4', '5', '6', '7', '8', '9'].includes(value[0]) && value.length === 1)) {
          yearInputRef.current.focus();
        }
      }
    }
    if (value === '') {
      jumpToPreviousInput(monthInputRef, dayInputRef);
    }
  };

  const updateYear = (value) => {
    if (value === '' || value === '0') {
      jumpToPreviousInput(yearInputRef, monthInputRef);
    }
    const intValue = parseInt(value, 10);
    if (/^\d*$/.test(value)) {
      setYear(value);
    } else if (value === '') {
      jumpToPreviousInput(yearInputRef, monthInputRef);
    }
  };

  const handleYearSubmit = () => {
    yearInputRef.current.blur();
    Keyboard.dismiss();
  };

  const jumpToPreviousInput = (currentInputRef, previousInputRef) => {
    if (!currentInputRef.current.value) {
      previousInputRef.current.focus();
    }
  };

  const registerGender = () => {
    if (day === "" || month === "" || year === "") {
      Alert.alert("Bitte geben Sie ein vollständiges Geburtsdatum ein.");
      return;
    }
    userToRegister.setting.birthday = new Date(`${year}-${month}-${day}`);
    userToRegister.setting.age = calculateAge();
    const stringifyUser = JSON.stringify(userToRegister);
    updateSessionData({ pageContext: "RegisterPhone", userToRegister: stringifyUser });
    navigation.navigate("RegisterGender");
  };

  const calculateAge = () => {
    let age = 0;
    const today = new Date();
    const birthDate = new Date(`${year}-${month}-${day}`);
    age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    if (isNaN(age)) {
      age = "";
    }
    return age;
  };

  const isButtonCovered = () => {
    console.log("Button" + buttonY);
    console.log(Dimensions.get('window').height - keyboardHeight)
    return buttonY < Dimensions.get('window').height - keyboardHeight;
  };

  let isDateValid = day && month && year && year.length === 4;
  let buttonStyle = isDateValid ? styles.roundedButton : styles.roundedButtonWhite;

  return (
    <SafeAreaView style={styles.loginscreen}>
      <View style={styles.fixedHeader}>
        <Image source={require('../assets/Logo.png')} style={styles.logoStyle} />
      </View>
      <View style={styles.contentContainer}>
        {/* <HorizontalContainer navigation={navigation} initValue={28} value={34} /> */}
        <Text style={[styles.textLeftAlign, { marginLeft: 8 }]}>{t.birthdayHeader}</Text>
        <View style={styles.textContainer}>
          <Text style={[styles.textLeftAlignSmall, { marginLeft: 8, marginTop: 15 }]}>
            {t.birthdayDescription}
          </Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginLeft: 20, marginRight: 20, marginTop: isKeyboardVisible ? 110 : 0 }}>
            <TextInput
              ref={dayInputRef}
              style={styles.inputSMSStyle}
              placeholder={t.placeholderDay}
              keyboardType="numeric"
              placeholderTextColor={'#FF8AD2'}
              value={day}
              onChangeText={updateDay}
              maxLength={2}
              selectionColor={'#FF8AD2'}
              returnKeyType="next"
              onSubmitEditing={() => monthInputRef.current.focus()}
            />
            <Text style={{ color: 'white' }}>/</Text>
            <TextInput
              ref={monthInputRef}
              style={styles.inputSMSStyle}
              placeholder={t.placeholderMonth}
              placeholderTextColor={'#FF8AD2'}
              keyboardType="numeric"
              value={month}
              onChangeText={updateMonth}
              maxLength={2}
              selectionColor={'#FF8AD2'}
              returnKeyType="next"
              onSubmitEditing={() => yearInputRef.current.focus()}
            />
            <Text style={{ color: 'white' }}>/</Text>
            <TextInput
              ref={yearInputRef}
              style={styles.inputSMSStyle2}
              placeholder={t.placeholderYear}
              placeholderTextColor={'#FF8AD2'}
              keyboardType="numeric"
              value={year}
              selectionColor={'#FF8AD2'}
              onChangeText={updateYear}
              maxLength={4}
              returnKeyType="done"
              onSubmitEditing={handleYearSubmit}
            />
          </View>

          <View style={[isKeyboardVisible ? styles.iconTextView4 : styles.iconTextView3, { marginTop: isKeyboardVisible ? 50 : 0 }]}>
            <Image source={require('../assets/1_1.png')} style={styles.iconStyle} resizeMode="contain" />
            <View style={{ position: 'relative' }}>
              <Text style={styles.iconText}>{t.abc}</Text>
            </View>
          </View>
          <Text style={{ color: '#FF8AD2', marginTop: 10, fontSize: 32 }}>{t.ageLabel} {calculateAge()}</Text>
          <Text style={{ color: 'white', marginTop: 10, fontSize: 14 }}>{t.cannotChangeLabel}</Text>
          <View
            onLayout={(event) => setButtonY(event.nativeEvent.layout.y)}
            style={{ width: '100%', alignItems: 'center' }}
          >
            {!(isKeyboardVisible && isButtonCovered()) && (
              <TouchableOpacity style={buttonStyle} onPress={registerGender}>
                <Text style={styles.buttonText}>{t.continueButton}</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RegisterBirthday;
