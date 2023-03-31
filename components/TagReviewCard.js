import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, Modal, Button, TouchableOpacity, TouchableWithoutFeedback, Keyboard, ScrollView, Image } from "react-native";
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import RevieForm2 from "../screens/BeitragFormsDayReview";
import TagNotiz from "./TagNotiz";
import { globalStyles } from "../styles/global";
import StarRatingg from "../screens/StarRatingComponent";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { storeContext } from "../App";

export default function TagReviewCard(props) {
  const [modalOpen, setModalOpen] = useState(false);
  const { backgroundContext, reisenContext } = useContext(storeContext);
  const [reisen, setReisen] = reisenContext;
  const [backgroundImageNumber, setBackgroundImageNumber] = backgroundContext;

  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  const {
    navigation,
    navigation: {
      state: {
        params: { reiseId, reiseTagId },
      },
    },
  } = props;

  const setRating = async (tagebuchEintragId, rating) => {
    let temp = reisen;

    try {
      temp
        .find((reise) => reise.reiseId === reiseId)
        .reiseTage.find((reiseTag) => reiseTag.reiseTagId === reiseTagId)
        .reiseEntries.find((tagebuchEintrag) => tagebuchEintrag.tagebuchEintragId === tagebuchEintragId).rating = rating;

      setReisen(temp);

      await AsyncStorage.setItem("reisen", JSON.stringify(temp));
    } catch (err) {
      console.log(err);
    }
  };

  const addEntry = async (review) => {
    let temp = reisen;

    temp
      ?.find((reise) => reise.reiseId === reiseId)
      ?.reiseTage?.find((reiseTag) => reiseTag.reiseTagId === reiseTagId)
      ?.reiseEntries?.push(review);

    setReisen(temp);

    await AsyncStorage.setItem("reisen", JSON.stringify(temp));
    forceUpdate();
    setModalOpen(false);
  };

  const removeEntry = async (tagebuchEintragId) => {
    let temp = reisen;

    const entryIndex = temp
      ?.find((reise) => reise.reiseId === reiseId)
      ?.reiseTage?.find((reiseTag) => reiseTag.reiseTagId === reiseTagId)
      ?.reiseEntries?.findIndex((entry) => entry.tagebuchEintragId === tagebuchEintragId);

    temp
      ?.find((reise) => reise.reiseId === reiseId)
      ?.reiseTage?.find((reiseTag) => reiseTag.reiseTagId === reiseTagId)
      ?.reiseEntries?.splice(entryIndex, 1);

    setReisen(temp);

    await AsyncStorage.setItem("reisen", JSON.stringify(temp));
    forceUpdate();
  };

  handleImageSize = () => {};

  const defaultReisenImages = (eintragId) => {
    switch (reiseTagId) {
      case "mKVZUHJTSH":
        return eintragId === "44HoHtzUlV" ? (
          // Bilder vom ersten Tag erster Tagebucheintrag
          <>
            <Image style={{ margin: 10, height: 270, width: 200 }} source={require("../images/demo/nr.png")} />
            <Image style={{ margin: 10, height: 270, width: 200 }} source={require("../images/demo/city.jpg")} />
          </>
        ) : eintragId === "duC9h4bveJ" ? (
          // Bilder vom ersten Tag zweiter Tagebucheintrag
          <>
            <Image style={{ margin: 10, height: 270, width: 200 }} source={require("../images/demo/markt.jpg")} />
            <Image style={{ margin: 10, height: 270, width: 200 }} source={require("../images/demo/city2.jpg")} />
            <Image style={{ margin: 10, height: 270, width: 200 }} source={require("../images/demo/schaf.jpg")} />
          </>
        ) : eintragId === "duC9t4bveJ" ? (
          // Bilder vom ersten Tag dritter Tagebucheintrag
          <>
            <Image style={{ margin: 10, height: 270, width: 200 }} source={require("../images/demo/strand.jpg")} />
          </>
        ) : null;
        break;
      case "zSwKCBsZNy":
        return eintragId === "1h5j3d9hcu" ? (
          // Bilder vom zweiten Tag erster Tagebucheintrag
          <>
            <Image style={{ margin: 10, height: 270, width: 200 }} source={require("../images/demo/aqua.jpg")} />
            <Image style={{ margin: 10, height: 270, width: 200 }} source={require("../images/demo/aqua2.jpg")} />
            <Image style={{ margin: 10, height: 270, width: 200 }} source={require("../images/demo/aqua3.jpg")} />
          </>
        ) : eintragId === "J7gU54Fghz" ? (
          // Bilder vom zweiten Tag zweiter Tagebucheintrag
          <>
            <Image style={{ margin: 10, height: 270, width: 200 }} source={require("../images/demo/city.jpg")} />
          </>
        ) : null;
        break;
      case "zSiKCBsZNy":
        return eintragId === "1h5i3d9hcu" ? (
          // Bilder vom dritten Tag erster Tagebucheintrag
          <>
            <Image style={{ margin: 10, height: 270, width: 200 }} source={require("../images/demo/sagra.jpg")} />
            <Image style={{ margin: 10, height: 270, width: 200 }} source={require("../images/demo/sagra2.jpg")} />
          </>
        ) : eintragId === "1h5i3p9hcu" ? (
          // Bilder vom dritten Tag zweiter Tagebucheintrag
          <>
            <Image style={{ margin: 10, height: 270, width: 200 }} source={require("../images/demo/nr2.png")} />
          </>
        ) : null;
        break;
      case "zSiKCBsZPy":
        return eintragId === "1h1i3d9hcu" ? (
          // Bilder vom vorletzten Tag erster Tagebucheintrag
          <>
            <Image style={{ margin: 10, height: 270, width: 200 }} source={require("../images/demo/strand2.jpg")} />
            <Image style={{ margin: 10, height: 270, width: 200 }} source={require("../images/demo/strand3.jpg")} />
          </>
        ) : null;
        break;
      case "URB7vq8mEW":
        return eintragId === "j3hg7PUi4a" ? (
          // Bilder vom letzten Tag erster Tagebucheintrag
          <>
            <Image style={{ margin: 10, height: 270, width: 200 }} source={require("../images/demo/flug.jpg")} />
          </>
        ) : null;
        break;
    }
  };

  return (
    <View style={styles.container}>
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
      <Modal visible={modalOpen} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <RevieForm2 setModalOpen={setModalOpen} addEntry={addEntry}></RevieForm2>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <TouchableOpacity onPress={() => setModalOpen(true)}>
        <Image source={require("../images/neu.png")} style={globalStyles.neu} />
      </TouchableOpacity>
      <ScrollView contentContainerStyle={{ alignContent: "center", alignItems: "center" }}>
        <Text style={globalStyles.headline}>{new Date(reisen?.find((reise) => reise.reiseId === reiseId)?.reiseTage?.find((reiseTag) => reiseTag.reiseTagId === reiseTagId)?.reiseTagDate).toLocaleDateString("de")}</Text>
        {reisen
          ?.find((reise) => reise.reiseId === reiseId)
          ?.reiseTage?.find((reiseTag) => reiseTag.reiseTagId === reiseTagId)
          ?.reiseEntries?.map((reiseEntry) => (
            <TagNotiz removeEntry={removeEntry} tagebuchEintragId={reiseEntry.tagebuchEintragId} key={reiseEntry.tagebuchEintragId}>
              <Collapse
                onPress={() => {
                  console.log("Hier");
                  // forceUpdate();
                }}
              >
                <CollapseHeader>
                  <View>
                    <Text multiline style={styles.titelTagNotiz}>
                      {reiseEntry.tagebucheintragTitle}
                    </Text>
                  </View>
                </CollapseHeader>

                <CollapseBody style={styles.collapse}>
                  <Text style={styles.zusammenfassung2}>{new Date(reiseEntry.tagebuchEintragTime).toLocaleTimeString("en-US")} Uhr</Text>
                  <Text style={styles.zusammenfassung2}>{reiseEntry.tagebucheintragBody}</Text>
                  <View style={{ alignItems: "center" }}>
                    {reiseId === "Iyxnkg6cLQ"
                      ? defaultReisenImages(reiseEntry.tagebuchEintragId)
                      : reiseEntry?.tagebuchEintragImages?.map((image) => (
                          <TouchableOpacity onPress={handleImageSize}>
                            <Image key={image} style={{ margin: 10, height: 270, width: 200 }} source={{ uri: image }} />
                          </TouchableOpacity>
                        ))}
                  </View>
                  <StarRatingg forceUpdate={forceUpdate} defaultRating={reiseEntry.rating ?? 0} tagebuchEintragId={reiseEntry.tagebuchEintragId} setRating={setRating} />
                </CollapseBody>
              </Collapse>
            </TagNotiz>
          ))}

        <View style={globalStyles.addEintrag}>
          <TouchableOpacity onPress={() => setModalOpen(true)}>
            <Text style={styles.addText}>Neuen Eintrag hinzufügen</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },

  addText: {
    color: "white",
    fontSize: 16,
    fontFamily: "Medium",
    alignSelf: "center",
  },

  collapse: {
    backgroundColor: "#DFF1FF",
    width: 310,
  },

  tagebuch: {
    backgroundColor: "lightgrey",
    padding: 20,
    borderRadius: 15,
    marginTop: 20,
  },

  zusammenfassung: {
    padding: 15,
    fontSize: 20,
    fontFamily: "Medium",
  },
  zusammenfassung2: {
    padding: 15,
    fontSize: 16,
    fontFamily: "Medium",
  },

  titelTagNotiz: {
    fontFamily: "Medium",
    fontSize: 20,
    color: "white",
    alignSelf: "center",
    alignContent: "center",
    justifyContent: "center",
  },

  textDay: {
    fontWeight: "bold",
    color: "#556076",
  },

  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
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
