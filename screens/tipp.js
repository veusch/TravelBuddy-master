import React, { useContext, useState } from "react";
import { Text, StyleSheet, View, Image, Switch } from "react-native";
import { globalStyles } from "../styles/global";
import { storeContext } from "../App";

export default function tipp() {
  const { backgroundContext } = useContext(storeContext);
  const [backgroundImageNumber, setBackgroundImageNumber] = backgroundContext;
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const [isEnabled2, setIsEnabled2] = useState(true);
  const toggleSwitch2 = () => setIsEnabled2((previousState) => !previousState);

  const [isEnabled3, setIsEnabled3] = useState(true);
  const toggleSwitch3 = () => setIsEnabled3((previousState) => !previousState);

  const [isEnabled4, setIsEnabled4] = useState(true);
  const toggleSwitch4 = () => setIsEnabled4((previousState) => !previousState);

  return (
    <View style={styles.container}>
      <View style={{ margin: 30 }}></View>

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
      <Text style={globalStyles.impHeadline}>Privatsphäre</Text>
      <View style={styles.Bgd}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <Text style={styles.text}>Mitteilungen erlauben</Text>
          <Switch trackColor={{ false: "lightgrey", true: "#213049" }} thumbColor={isEnabled2 ? "white" : "White"} ios_backgroundColor="#3e3e3e" onValueChange={toggleSwitch2} value={isEnabled2} />
        </View>
      </View>

      <View style={styles.Bgd}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <Text style={styles.text}>Zugriff auf Standort</Text>
          <Switch trackColor={{ false: "lightgrey", true: "#213049" }} thumbColor={isEnabled3 ? "white" : "White"} ios_backgroundColor="#3e3e3e" onValueChange={toggleSwitch3} value={isEnabled3} />
        </View>
      </View>

      <View style={styles.Bgd}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <Text style={styles.text}>Zugriff auf Galerie</Text>
          <Switch trackColor={{ false: "lightgrey", true: "#213049" }} thumbColor={isEnabled4 ? "white" : "White"} ios_backgroundColor="#3e3e3e" onValueChange={toggleSwitch4} value={isEnabled4} />
        </View>
      </View>

      <View style={styles.Bgd}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <Text style={styles.text}>Zugriff auf Kontakte</Text>
          <Switch trackColor={{ false: "lightgrey", true: "#213049" }} thumbColor={isEnabled ? "white" : "White"} ios_backgroundColor="#3e3e3e" onValueChange={toggleSwitch} value={isEnabled} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Bgd: {
    backgroundColor: "#DFF1FF",
    width: "80%",
    height: "7%",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 10,
    marginTop: 10,
  },
  container: { backgroundColor: "white", flex: 1 },

  text: {
    paddingLeft: 10,
    fontFamily: "Regular",
  },
});
