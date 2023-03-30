import React, { useContext } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { globalStyles } from "../styles/global";
import { storeContext } from "../App";

export default function Impressum() {
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
      <Text style={globalStyles.impHeadline}>Impressum</Text>
      <View style={styles.Bgd}>
        <Text>
          Angaben gem. § 5 TMG{"\n"}
          <Text style={globalStyles.impBold}>Vorname, Name:</Text> <Text style={globalStyles.impLight}>Verena Eusch </Text>
          {"\n"}
          <Text style={globalStyles.impBold}>Adresse:</Text> Baumfeldweg 12 {"\n"}
          <Text style={globalStyles.impBold}>PLZ:</Text> 5020 Salzburg {"\n"} {"\n"}
          <Text style={globalStyles.impBold}>Telefon:</Text> +43664/657955 {"\n"}
          <Text style={globalStyles.impBold}>Fax:{"\n"}</Text>
          <Text style={globalStyles.impBold}>Mail:</Text> diplomprojekt@htl-salzburg.ac.at {"\n"}
          {"\n"}
          <Text style={globalStyles.impBold}>Umsatzsteuer-ID {"\n"}</Text> {"\n"}
          <Text style={globalStyles.impBold}>Umsatzsteuer-Identifikationsnummer</Text>
        </Text>
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
  container: { backgroundColor: "white", flex: 1 },
});
