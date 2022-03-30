import React from "react";
import { Text, View,Linking } from 'react-native';

import {styles} from "./Home.styles";

import ButtonComponent from "../../components/Button";

export default function HomeScreen({ onPress }){

    return (
      <View style={styles.container}>
        <Text style={{color:'red'}}
        onPress={()=>Linking.openURL("https://github.com/KevinMacias181667/181667dmi")}>
        GitHub

        </Text>
      </View>
    )
  }