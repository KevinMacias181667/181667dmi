import React from "react";
import {StatusBar} from "expo-status-bar";
import { Text, View } from 'react-native';
import {styles} from "./Login.styles";
import ButtonComponent from "../../components/Button";
import i18n from "../../../localization/i18n"

export default function Login({onPress}){
return (
    <View style={styles.container}>
      <StatusBar/>
      <Text>Login
      </Text>
      <ButtonComponent title="Login" onPress={onPress} />
    </View>
  );
}