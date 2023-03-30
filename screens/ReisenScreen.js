import React, { useState, useContext } from "react";
import { View, Text, Button, StyleSheet, Modal, TouchableOpacity, TouchableWithoutFeedback, Keyboard, TextInput, ScrollView, Image } from "react-native";
import RevieForm from "./BeitragForms";
import { globalStyles } from "../styles/global";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { storeContext } from "../App";
import AlleReisen from "../components/AlleReisen";
import { generateId } from "../util/generateId";

const ReisenScreen = ({ navigation }) => {
  const { reisenContext, backgroundContext } = useContext(storeContext);
  const [reisen, setReisen] = reisenContext;
  const [backgroundImageNumber, setBackgroundImageNumber] = backgroundContext;

  const [modalOpen, setModalOpen] = useState(false);

  function addDays(date, days) {
    date.setDate(date.getDate() + days);
    return date;
  }

  const addJourney = async (journey) => {
    journey.reiseId = generateId(10);

    let dayCount = Math.ceil((new Date(journey.endDate).getTime() - new Date(journey.startDate).getTime()) / (1000 * 3600 * 24)) + 1;

    journey.reiseTage = [];

    for (let i = 0; i < dayCount; i++) {
      journey.reiseTage.push({
        reiseTagId: generateId(10),
        reiseTagDate: addDays(new Date(journey.startDate), i),
        reiseEntries: [],
      });
    }

    await AsyncStorage.setItem("reisen", JSON.stringify([...reisen, journey]));

    setReisen((currentEintraeg) => {
      return [journey, ...currentEintraeg];
    });
    setModalOpen(false);
  };

  return (
    <View style={styles.container}>
      <Image
        style={{ position: "absolute", opacity: 0.25, resizeMode: "cover", top: 0, left: 0, width: "100%", height: "100%", zIndex: -100 }}
        source={
          backgroundImageNumber === 1
            ? require(`../images/Hintergruende/hintergrund_1.png`)
            : backgroundImageNumber === 2
            ? require(`../images/Hintergruende/hintergrund_2.png`)
            : backgroundImageNumber === 3
            ? require(`../images/Hintergruende/hintergrund_3.png`)
            : backgroundImageNumber === 4
            ? require(`../images/Hintergruende/hintergrund_4.png`)
            : backgroundImageNumber === 5
            ? require(`../images/Hintergruende/hintergrund_5.png`)
            : backgroundImageNumber === 6
            ? require(`../images/Hintergruende/hintergrund_6.png`)
            : require(`../images/Hintergruende/hintergrund_1.png`)
        }
      />
      <ScrollView style={{ width: "100%" }} contentContainerStyle={{ width: "100%" }}>
        <Modal visible={modalOpen} animationType="slide">
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.modalContent}>
              <RevieForm setModalOpen={setModalOpen} addJourney={addJourney}></RevieForm>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
        <TouchableOpacity onPress={() => setModalOpen(true)}>
          <Image source={require("../images/neu.png")} style={globalStyles.neu} />
        </TouchableOpacity>
        <Text style={globalStyles.headline}>Meine Tagebücher</Text>

        <AlleReisen navigation={navigation} />
      </ScrollView>
      <View style={globalStyles.Footer}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          {/*Home*/}
          <Image source={require("../images/home.png")} style={globalStyles.iconNavigator} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Reisen")}>
          {/*Reisen*/}
          <Image source={require("../images/reisenWhite.png")} style={globalStyles.iconNavigator} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Listen")}>
          {/*Listen*/}
          <Image source={require("../images/liste.png")} style={globalStyles.iconNavigator} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("settings")}>
          {/*Settings*/}
          <Image source={require("../images/profil.png")} style={globalStyles.iconNavigator} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ReisenScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "white",
  },

  Reisen: {
    color: "lightgrey",
  },

  Footer: {
    backgroundColor: "grey",
    alignSelf: "stretch",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },

  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
    backgroundColor: "lightgrey",
    marginTop: 20,
  },
  modalClose: {
    marginBottom: 0,
    marginClose: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: "black",
    height: 64,
    margin: 32,
    alignSelf: "stretch",
    borderRadius: 6,
    paddingHorizontal: 16,
    fontSize: 24,
    backgroundColor: "white",
  },

  text: {
    marginTop: 32,
  },

  button: {
    marginTop: 32,
    backgroundColor: "white",
    marginHorizontal: 32,
    alignSelf: "stretch",
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 6,
  },
});
