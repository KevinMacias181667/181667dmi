import React, {useState, useEffect} from "react";
import { Text, View,Linking, Platform, Image } from 'react-native';

import * as ImagePicker from 'expo-image-picker'
import Constants from 'expo-constants';

import {styles} from "./Home.styles";

import ButtonComponent from "../../components/Button";

export default function HomeScreen({ onPress }){

  consts[image,setImage]= useState(null);

  useEffect(async () =>{
    if (Platform.OS !=='web') {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Permisson denied');
      }
    }
  },[])

  const PickImage = async ()=>{
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect:[4,3],
      quality:1
    });
    console.log(result)
    if(!result.cancelled){
      setImage(result.uri)
    }
  }

  const showImagePicker = async () => {
    // Ask the user for the permission to access the media library 
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your photos!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync();

    // Explore the result
    console.log(result);

    if (!result.cancelled) {
      setPickedImagePath(result.uri);
      console.log(result.uri);
    }
  }

  const openCamera = async () => {
    // Ask the user for the permission to access the camera
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your camera!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync();

    // Explore the result
    console.log(result);

    if (!result.cancelled) {
      setPickedImagePath(result.uri);
      console.log(result.uri);
    }
  }

    return (
      <View style={styles.container}>
        <ButtonComponen title = "Choose Image" onPress="PickImage"> 
        {image && <Image source={{uri:image}} style={{
          width:200,
          height:200
        }} ></Image>}
        </ButtonComponent>
        <Text style={{color:'red'}}
        onPress={()=>Linking.openURL("https://github.com/KevinMacias181667/181667dmi")}>
        GitHub

        </Text>
      </View>
    )
  }