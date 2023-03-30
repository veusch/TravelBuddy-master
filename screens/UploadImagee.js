import React, { useState, useEffect, useContext } from "react";
import { Image, View, Platform, TouchableOpacity, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { storeContext } from "../App";

export default function UploadImage() {
  const { profileContext } = useContext(storeContext);
  const [profile, setProfile] = profileContext;

  useEffect(() => {
    checkForCameraRollPermission();
  }, []);

  const checkForCameraRollPermission = async () => {
    const { status } = await ImagePicker.getMediaLibraryPermissionsAsync();
    // if (status !== "granted") {
    //   alert("Bitte erteilen Sie in den Einstellungen Ihres Systems Kamera-Berechtigungen");
    // }
  };

  const addImage = async () => {
    let _image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 3],
      quality: 1,
    });
    if (!_image.cancelled) {
      setProfile((prev) => ({ ...prev, profilePicture: _image.uri }));
      AsyncStorage.setItem("profile", JSON.stringify({ ...profile, profilePicture: _image.uri }));
    }
  };
  return (
    <View style={imageUploaderStyles.container}>
      {profile?.profilePicture && <Image source={{ uri: profile?.profilePicture }} style={{ width: 200, height: 200 }} />}
      <View style={imageUploaderStyles.uploadBtnContainer}>
        <TouchableOpacity onPress={addImage} style={imageUploaderStyles.uploadBtn}>
          <Text style={{ fontFamily: "Regular" }}>{profile?.profilePicture ? "Ändere dein" : "Upload"} Profilbild</Text>
          <AntDesign name="camera" size={20} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const imageUploaderStyles = StyleSheet.create({
  container: {
    elevation: 2,
    height: 200,
    width: 200,
    backgroundColor: "#213049",
    position: "relative",
    borderRadius: 999,
    overflow: "hidden",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  uploadBtnContainer: {
    opacity: 0.45,
    position: "absolute",
    right: 0,
    bottom: 0,
    backgroundColor: "lightgrey",
    width: "100%",
    height: "25%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  uploadBtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
