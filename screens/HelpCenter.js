import React, { useContext } from "react";
import { Text, StyleSheet, View, ScrollView, Image } from "react-native";
import { globalStyles } from "../styles/global";
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import { storeContext } from "../App";

export default function HelpCenter() {
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
      <ScrollView>
        <Text style={globalStyles.impHeadline}>Helpcenter</Text>

        <View style={styles.wrapper}>
          <Collapse>
            <CollapseHeader>
              <View>
                <Text style={styles.titelTagNotiz}>Wie erstelle ich ein Tagebuch?</Text>
              </View>
            </CollapseHeader>

            <CollapseBody style={styles.collapse}>
              <Text style={styles.zusammenfassung}>Wenn du am Home-Screen nach unten scrollst findest du den Button „Neues Tagebuch erstellen“. </Text>
            </CollapseBody>
          </Collapse>
        </View>

        <View style={styles.wrapper}>
          <Collapse>
            <CollapseHeader>
              <View>
                <Text style={styles.titelTagNotiz}>Wie erstelle ich einen Eintrag?</Text>
              </View>
            </CollapseHeader>

            <CollapseBody style={styles.collapse}>
              <Text style={styles.zusammenfassung}>Einen neuen Eintrag kannst du entweder auf der Einträge-Seite über dass kleine Plus rechts oben erstellen, oder ganz einfach direkt in einem Tagebuch.</Text>
            </CollapseBody>
          </Collapse>
        </View>

        <View style={styles.wrapper}>
          <Collapse>
            <CollapseHeader>
              <View>
                <Text style={styles.titelTagNotiz}>Wie bearbeite ich einen Beitrag</Text>
              </View>
            </CollapseHeader>

            <CollapseBody style={styles.collapse}>
              <Text style={styles.zusammenfassung}>Wenn du gerade einen Eintrag geöffnet hast, siehst du rechts oben einen kleinen weißen Pfeil — so kannst du deine Einträge im Nachhinein noch bearbeiten.</Text>
            </CollapseBody>
          </Collapse>
        </View>

        <View style={styles.wrapper}>
          <Collapse>
            <CollapseHeader>
              <View>
                <Text style={styles.titelTagNotiz}>Wie lösche ich einen Eintrag?</Text>
              </View>
            </CollapseHeader>

            <CollapseBody style={styles.collapse}>
              <Text style={styles.zusammenfassung}>Wenn du gerade einen Eintrag geöffnet hast, siehst du rechts oben ein weißes Mülleimer-Symbol — so kannst du einen misslungenen Beitrag löschen.</Text>
            </CollapseBody>
          </Collapse>
        </View>
        <View style={styles.wrapper}>
          <Collapse>
            <CollapseHeader>
              <View>
                <Text style={styles.titelTagNotiz}>Wie erstelle ich eine Liste?</Text>
              </View>
            </CollapseHeader>

            <CollapseBody style={styles.collapse}>
              <Text style={styles.zusammenfassung}>Eine neue Liste kannst du dem Listen-Screen über dass kleine Plus rechts oben erstellen.</Text>
            </CollapseBody>
          </Collapse>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },

  wrapper: {
    backgroundColor: "#213049",
    width: 310,
    margin: 10,
    flex: 1,

    borderRadius: 20,
  },
  collapse: {
    backgroundColor: "#DFF1FF",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    width: 310,
  },

  zusammenfassung: {
    padding: 15,
  },
  titelTagNotiz: {
    fontWeight: "bold",
    fontSize: 16,
    color: "white",
    textAlign: "center",
    marginBottom: 10,
    padding: 10,
  },
});
