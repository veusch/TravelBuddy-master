import React, { useEffect, useContext } from "react";
import { Text, StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { globalStyles } from "../styles/global";
import { storeContext } from "../App";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Hintergrund({ navigation }) {
  const [border, setBorder] = useState({ styles });

  const { backgroundContext } = useContext(storeContext);
  const [backgroundImageNumber, setBackgroundImageNumber] = backgroundContext;

  function handlePress(number) {
    setBackgroundImageNumber(number);
    AsyncStorage.setItem("backgroundImageNumber", JSON.stringify(number));
  }

  return (
    <View style={styles.container}>
      <View style={{ margin: 30 }}></View>
      <Text style={globalStyles.impHeadline}>Hintergrund</Text>
      <View style={styles.hintergrundWrapper}>
        <TouchableOpacity
          onPress={() => {
            handlePress(1);
          }}
        >
          <Image source={require("../images/Hintergruende/hintergrund_1.png")} style={[styles.HintergrundCard, backgroundImageNumber === 1 && { borderColor: "#DFF1FF", borderWidth: 5 }]} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            handlePress(2);
          }}
        >
          <Image source={require("../images/Hintergruende/hintergrund_2.png")} style={[styles.HintergrundCard, backgroundImageNumber === 2 && { borderColor: "#DFF1FF", borderWidth: 5 }]} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            handlePress(3);
          }}
        >
          <Image source={require("../images/Hintergruende/hintergrund_3.png")} style={[styles.HintergrundCard, backgroundImageNumber === 3 && { borderColor: "#DFF1FF", borderWidth: 5 }]} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            handlePress(4);
          }}
        >
          <Image source={require("../images/Hintergruende/hintergrund_4.png")} style={[styles.HintergrundCard, backgroundImageNumber === 4 && { borderColor: "#DFF1FF", borderWidth: 5 }]} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            handlePress(5);
          }}
        >
          <Image source={require("../images/Hintergruende/hintergrund_5.png")} style={[styles.HintergrundCard, backgroundImageNumber === 5 && { borderColor: "#DFF1FF", borderWidth: 5 }]} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            handlePress(6);
          }}
        >
          <Image source={require("../images/Hintergruende/hintergrund_6.png")} style={[styles.HintergrundCard, backgroundImageNumber === 6 && { borderColor: "#DFF1FF", borderWidth: 5 }]} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Bgd: {
    backgroundColor: "#DFF1FF",
    width: "90%",
    height: "50%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 20,
  },
  container: {
    backgroundColor: "white",
    flex: 1,
  },

  img: {
    width: "40%",
    height: "20%",
    backgroundColor: "red",
  },

  HintergrundCard: {
    borderRadius: 20,
    backgroundColor: "white",
    marginHorizontal: 7,
    marginVertical: 10,
    width: 150,
    height: 120,
    borderColor: "lightgrey",
    borderWidth: 2,
  },

  hintergrundWrapper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    flexDirection: "row",
  },
});
