import React, { useContext, useState, useEffect, Switch } from "react";
import { View, Text, StatusBar, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image } from "react-native";
import UploadImage from "./UploadImagee";
import { globalStyles } from "../styles/global";
import { storeContext } from "../App";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { copilot, walkthroughable, CopilotStep } from "react-native-copilot";

const SettingScreen = (props) => {
  const WalkthroughableImage = walkthroughable(Text);
  const InputWalk = walkthroughable(View);

  useEffect(() => {
    props.copilotEvents.on("stepChange", handleStepChange);
    props.start();
  }, []);

  const handleStepChange = (step) => {
    console.log(`Current step is: ${step.name}`);
  };
  const [secondStepActive, setSecondStepActive] = useState(true);

  const { backgroundContext, profileContext } = useContext(storeContext);
  const [backgroundImageNumber, setBackgroundImageNumber] = backgroundContext;
  const [profile, setProfile] = profileContext;

  return (
    <View style={styles.container}>
      <StatusBar translucent={true} />
      <Image
        style={{ position: "absolute", opacity: 0.2, resizeMode: "cover", top: 0, left: 0, width: "100%", height: "100%", zIndex: -100 }}
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

      <ScrollView style={{ width: "100%" }} contentContainerStyle={{ width: "100%", justifyContent: "center", alignItems: "center" }}>
        <View style={{ margin: 40 }}></View>
        <CopilotStep active={secondStepActive} text="Das ist dein Profilbild. Lade gerne ein Bild aus deiner Galerie hierauf!" order={2} name="SecondUniqueKey">
          <WalkthroughableImage>
            <UploadImage />
          </WalkthroughableImage>
        </CopilotStep>

        <View style={styles.name}>
          <TextInput
            onChangeText={async (e) => {
              setProfile((prev) => ({ ...prev, profileName: e }));
              await AsyncStorage.setItem("profile", JSON.stringify({ ...profile, profileName: e }));
            }}
            editable
            multiline
            numberOfLines={4}
            value={profile.profileName}
            defaultValue={"Dein Name"}
            maxLength={30}
            fontSize={26}
            textAlign={"center"}
          />

          <TouchableOpacity onPress={() => props.navigation.navigate("Hintergrund")}>
            <View style={styles.Settings}>
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={styles.textSettings}> Hintergrund</Text>
                <Image source={require("../images/right.png")} style={styles.right} />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => props.navigation.navigate("tipp")}>
            <View style={styles.Settings}>
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={styles.textSettings}> Privatsphäre</Text>
                <Image source={require("../images/right.png")} style={styles.right} />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => props.navigation.navigate("Impressum")}>
            <View style={styles.Settings}>
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={styles.textSettings}> Impressum</Text>
                <Image source={require("../images/right.png")} style={styles.right} />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => props.navigation.navigate("Datenschutzerklärung")}>
            <View style={styles.Settings}>
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={styles.textSettings}>Datenschutzerklärung</Text>
                <Image source={require("../images/right.png")} style={styles.right} />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => props.navigation.navigate("Nutzungsbedingungen")}>
            <View style={styles.Settings}>
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={styles.textSettings} onPress={() => props.navigation.navigate("Nutzungsbedingungen")}>
                  Nutzungbedingungen
                </Text>
                <Image source={require("../images/right.png")} style={styles.right} />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => props.navigation.navigate("Accounteinstellungen")}>
            <View style={styles.Settings}>
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={styles.textSettings}> Accounteinstellungen</Text>
                <Image source={require("../images/right.png")} style={styles.right} />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => props.navigation.navigate("HelpCenter")}>
            <View style={styles.Settings}>
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={styles.textSettings}> Helpcenter</Text>
                <Image source={require("../images/right.png")} style={styles.right} />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={globalStyles.Footer}>
        <TouchableOpacity onPress={() => props.navigation.navigate("Home")}>
          {/*Home*/}
          <Image source={require("../images/home.png")} style={globalStyles.iconNavigator} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate("Reisen")}>
          {/*Reisen*/}
          <Image source={require("../images/eintrag.png")} style={globalStyles.iconNavigator} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate("Listen")}>
          {/*Listen*/}
          <Image source={require("../images/liste.png")} style={globalStyles.iconNavigator} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.navigation.navigate("settings")}>
          {/*Settings*/}
          <Image source={require("../images/profil-white.png")} style={globalStyles.iconNavigator} />
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
})(SettingScreen);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    width: "100%",
  },

  sv: {
    width: "100%",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontSize: 16,
  },

  pic: {
    padding: 20,
  },

  right: {
    height: 18.5,
    width: 11,
  },

  textSettings: {
    fontFamily: "Regular",
  },
  Settings: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "#DFF1FF",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowRadius: 6,
    shadowOpacity: 0.3,
    marginVertical: 8,
    width: 300,
    heigh: 280,
    padding: 15,
    fontFamily: "Regular",
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
    justifyContent: "center",
    alignItems: "center",
  },

  picture: {
    backgroundColor: "grey",
    height: 100,
    width: 100,
    borderRadius: 60,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
    marginTop: 10,
  },
  name: { alignContent: "center", justifyContent: "center" },

  button: {
    marginTop: 10,
    backgroundColor: "white",
    marginHorizontal: 10,
    alignSelf: "stretch",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
  },
});
