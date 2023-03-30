import React, { useContext } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { globalStyles } from "../styles/global";
import { storeContext } from "../App";

export default function Accounteinstellungen() {
  const { backgroundContext } = useContext(storeContext);
  const [backgroundImageNumber, setBackgroundImageNumber] = backgroundContext;

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
      <Text style={globalStyles.impHeadline}>Accounteinstellungen</Text>
      <View style={styles.Bgd}>
        <Text style={styles.text}>Nutzername</Text>
      </View>

      <View style={styles.Bgd}>
        <Text style={styles.text}>Profilbild ädern</Text>
      </View>

      <View style={styles.Bgd}>
        <Text style={styles.text}>Nutzer-ID:23467398980</Text>
      </View>

      <View style={styles.Bgd}>
        <Text style={styles.text}>Newsletter</Text>
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
