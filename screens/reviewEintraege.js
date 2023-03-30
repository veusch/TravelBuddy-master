import React, { useState, useContext } from "react";
import { StyleSheet, View, Text, Button, ScrollView, TouchableOpacity, Image } from "react-native";
import TagCard from "../components/TagCard";
//import { ImagePicker, launchImageLibrary, launchCamera } from "react-native-image-picker";
import { storeContext } from "../App";
import { globalStyles } from "../styles/global";

export default function ReviewEintraege(props) {
  const { reisenContext } = useContext(storeContext);
  const [reisen, setReisen] = reisenContext;
  const { backgroundContext } = useContext(storeContext);
  const [backgroundImageNumber, setBackgroundImageNumber] = backgroundContext;

  const presshandler = (id) => {
    navigation.navigate("reviewDay", { reiseTagId: id, reiseId: reiseId });
  };

  const {
    navigation,
    navigation: {
      state: {
        params: { reiseId },
      },
    },
  } = props;

  return (
    <View style={styles.Wrapper}>
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
      <ScrollView>
        <View style={styles.container}>
          <Text style={globalStyles.headline2}>{reisen.find((reise) => reise.reiseId === reiseId)?.reiseTitel}</Text>
          <Text style={globalStyles.headline3}>{reisen.find((reise) => reise.reiseId === reiseId)?.reiseLand.string}📍</Text>

          <View style={styles.kontext}>
            <Text style={styles.title}>{reisen.find((reise) => reise.reiseId === reiseId)?.reiseBeschreibung}</Text>
          </View>
          {reisen
            .find((reise) => reise.reiseId === reiseId)
            .reiseTage.map((reiseTag) => (
              <TouchableOpacity key={reiseTag.reiseTagId} onPress={() => presshandler(reiseTag.reiseTagId)}>
                <TagCard>
                  <Text style={{ color: "white", fontFamily: "Medium", fontSize: 20 }}>{new Date(reiseTag.reiseTagDate).toLocaleDateString("de-DE")}</Text>
                </TagCard>
              </TouchableOpacity>
            ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
  },
  Wrapper: {
    flex: 1,
    backgroundColor: "white",
  },

  title: {
    color: "#213049",
    fontFamily: "Regular",
    fontSize: 16,
  },

  kontext: {
    backgroundColor: "#EFF8FF",
    borderRadius: 20,
    padding: 20,
    margin: 10,
    width: "100%",
  },
});
