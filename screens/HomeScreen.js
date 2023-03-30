import React, { useState, useContext, useEffect, Component } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text, StyleSheet, Modal, Button, TouchableOpacity, TouchableWithoutFeedback, Keyboard, ScrollView, Image } from "react-native";
import RevieForm from "./BeitragForms";
import { globalStyles } from "../styles/global";
import { storeContext } from "../App";
import AlleReisen from "../components/AlleReisen";
import { generateId } from "../util/generateId";
import PieChart from "react-native-expo-pie-chart";
import { copilot, walkthroughable, CopilotStep } from "react-native-copilot";

const HomeScreen = (props) => {
  const [secondStepActive, setSecondStepActive] = useState(true);
  const WalkthrouableText = walkthroughable(Text);
  const WalkthroughableImage = walkthroughable(Image);
  const defaultName = "Dein Name";

  const { reisenContext, backgroundContext, profileContext } = useContext(storeContext);
  const [reisen, setReisen] = reisenContext;
  const [profile, setProfile] = profileContext;
  const [backgroundImageNumber, setBackgroundImageNumber] = backgroundContext;
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    props.copilotEvents.on("stepChange", handleStepChange);
    props.start();
  }, []);

  const handleStepChange = (step) => {
    console.log(`Current step is: ${step.name}`);
  };

  function getTotalDays() {
    let count = 0;
    reisen?.forEach((reise) => {
      count += reise.reiseTage.length;
    });
    return count;
  }

  function getTotalCountries() {
    let countyIds = [];

    reisen?.forEach((reise) => {
      // console.log(reise.reiseLand.countryId);
      if (!countyIds.includes(reise.reiseLand.countryId)) {
        countyIds.push(reise.reiseLand.countryId);
      }
    });

    return countyIds.length;
  }

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

  function handleStartButtonPress() {
    this.props.start();
  }

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
          <CopilotStep active={secondStepActive} text="Hier kannst du eine neue Reise erstellen!" order={2} name="SecondUniqueKey">
            <WalkthroughableImage source={require("../images/neu.png")} style={globalStyles.neu} />
          </CopilotStep>
        </TouchableOpacity>
        <CopilotStep text="Das ist dein Benutzername. Ändere diesen in dem bei den Einstellungen du auf dein Name klickst" order={1} name="firstUniqueKey">
          <WalkthrouableText default={"Dein Name"} style={styles.name}>
            <Text defaultValue={"Dein Name"}>{profile.profileName}</Text>
          </WalkthrouableText>
        </CopilotStep>
        <Text style={styles.wasErlebt}>Was hast du heute erlebt?</Text>
        <View style={styles.statistik}>
          <PieChart
            data={[
              {
                key: "First Data",
                count: 50,
                color: "#3B5875",
              },
              {
                key: "Second Data",
                count: 50,
                color: "#5B82A3",
              },
              {
                key: "Third Data",
                count: 50,
                color: "#80AAC1",
              },
              {
                key: "Forth Data",
                count: 50,
                color: "orange",
              },
            ]}
            length={200}
          />
        </View>

        <View style={styles.flex2}>
          <View style={styles.besucht}>
            <Text style={{ textAlign: "center", alignItems: "center", padding: 15, fontSize: 16 }}>
              Du hast insgesamt <Text style={{ color: "orange", fontWeight: "bold" }}>{getTotalCountries()}/195 Länder </Text> bereist!
            </Text>
          </View>
          <View style={styles.besucht}>
            <Text style={{ textAlign: "center", alignItems: "center", padding: 15, fontSize: 16 }}>
              Du warst insgesamt <Text style={{ color: "orange", fontWeight: "bold" }}>{getTotalDays()} Tage lang </Text> unterwegs!
            </Text>
          </View>
        </View>
        <Text style={globalStyles.headline}>Meine Tagebücher</Text>
        <View style={styles.flex}>
          <AlleReisen setModalOpen={setModalOpen} navigation={props.navigation}>
            <TouchableOpacity onPress={() => setModalOpen(true)} style={{ justifyContent: "space-around", alignItems: "center", flexDirection: "row", borderRadius: 20, margin: 5, width: "47%", height: props.navigation.state.routeName === "Home" ? 80 : 150, backgroundColor: "#213049" }}>
              <Text style={styles.addText}>Neues Tagebuch erstellen</Text>
            </TouchableOpacity>
          </AlleReisen>
        </View>
      </ScrollView>

      <View style={globalStyles.Footer}>
        <TouchableOpacity onPress={() => props.navigation.navigate("Home")}>
          {/*Home*/}
          <Image source={require("../images/home-white.png")} style={globalStyles.iconNavigator} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate("Reisen")}>
          {/*Reisen*/}
          <CopilotStep text="Schaue hier vorbei um deine Reisen zu verwalten" order={3} name="ThirdUniqueKey">
            <WalkthroughableImage source={require("../images/eintrag.png")} style={globalStyles.iconNavigator} />
          </CopilotStep>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate("Listen")}>
          {/*Listen*/}
          <CopilotStep text="Schaue hier vorbei um Reiselisten zu erstellen" order={4} name="FourthUniqueKey">
            <WalkthroughableImage source={require("../images/liste.png")} style={globalStyles.iconNavigator} />
          </CopilotStep>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.navigation.navigate("settings")}>
          {/*Settings*/}
          <CopilotStep text="Schaue hier vorbei um dein Profil zu verwalten" order={5} name="FithUniqueKey">
            <WalkthroughableImage source={require("../images/profil.png")} style={globalStyles.iconNavigator} />
          </CopilotStep>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default copilot({
  animated: true, // Can be true or false
  overlay: "svg", // Can be either view or svg

  labels: {
    previous: "Vorheriger",
    next: "Nächster",
    skip: "Überspringen",
    finish: "Beenden",
  },
})(HomeScreen);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },

  neu: {
    width: "47%",
    // flex: 1,
    backgroundColor: "#213049",
    margin: 5,
    borderRadius: 20,
  },

  addText: {
    color: "white",
    fontSize: 16,
    fontFamily: "Medium",
    textAlign: "center",
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    margin: 10,
  },

  statistik: {
    marginTop: 20,

    width: 340,
    height: 210,
    backgroundColor: "#EFF8FF",
    alignSelf: "center",
    borderRadius: 10,
  },

  besucht: {
    marginTop: 20,
    marginBottom: 20,
    margin: 5,

    width: 150,
    height: 130,
    backgroundColor: "#EFF8FF",
    alignSelf: "center",
    borderRadius: 10,
  },

  flex: {
    justifyContent: "space-around",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  flex2: {
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },

  Home: {
    color: "lightgrey",
  },
  name: {
    fontFamily: "Medium",
    fontSize: 26,
    paddingLeft: 15,
  },
  wasErlebt: {
    fontSize: 20,
    fontFamily: "Light",
    paddingLeft: 15,
  },

  modalContent: {},

  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 30,
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
