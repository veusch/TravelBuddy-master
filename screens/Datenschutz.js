import React, { useContext } from "react";
import { Text, StyleSheet, View, ScrollView, Image } from "react-native";
import { globalStyles } from "../styles/global";

import { storeContext } from "../App";

export default function Datenschutzerklärung() {
  const { backgroundContext } = useContext(storeContext);
  const [backgroundImageNumber, setBackgroundImageNumber] = backgroundContext;

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
      <View style={{ margin: 30 }}></View>

      <Text style={globalStyles.impHeadline}>Datenschutzerklärung</Text>

      <View style={styles.Bgd}>
        <ScrollView>
          <Text style={styles.fliestext}>
            Wir verarbeiten Ihre personenbezogenen Daten, die unter folgende Datenkategorien fallen: {"\n"}
            {"\n"}• Name {"\n"}• Geburtsdatum, {"\n"}• Telefonnummer {"\n"}• E-Mail-Adresse {"\n"}• Bestelldaten, {"\n"}• Kundenserviceanfragen, {"\n"}• … {"\n"}
            {"\n"}Sie haben uns Daten über sich freiwillig zur Verfügung gestellt und wir verarbeiten diese Daten auf Grundlage Ihrer Einwilligung zu folgenden Zwecken: {"\n"}
            {"\n"}• Betreuung des Kunden sowie {"\n"}• für eigene Werbezwecke, {"\n"}beispielsweise zur Zusendung von Angeboten, Werbeprospekten und Newsletter, sowie zum Zwecke des Hinweises auf die zum Kunden bestehende oder vormalige Geschäftsbeziehung. {"\n"}
            {"\n"}Sie können diese Einwilligung jederzeit widerrufen. Ein Widerruf hat zur Folge, dass wir Ihre Daten ab diesem Zeitpunkt zu oben genannten Zwecken nicht mehr verarbeiten. Für einen Widerruf wenden Sie sich bitte an: service@travelbuddy.com {"\n"}
            {"\n"}Die von Ihnen bereit gestellten Daten sind weiters zur Vertragserfüllung bzw. zur Durchführung vorvertraglicher Maßnahmen erforderlich. Ohne diese Daten können wir den Vertrag mit Ihnen nicht abschließen.{"\n"}
            {"\n"}Sie erreichen uns unter folgenden Kontaktdaten: service@travelbuddy.com {"\n"}
            {"\n"}Unseren Datenschutzbeauftragten erreichen Sie unter: datenschutz@travelbuddy {"\n"}
            {"\n"}
            {"\n"}
            <Text style={globalStyles.impBold}>Rechtsbehelfsbelehrung</Text> {"\n"}
            Ihnen stehen grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit und Widerspruch zu. Dafür wenden Sie sich an uns. Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt oder Ihre datenschutzrechtlichen
            Ansprüche sonst in einer Weise verletzt worden sind, können Sie sich bei der Aufsichtsbehörde beschweren. In Österreich ist die Datenschutzbehörde zuständig.
          </Text>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Bgd: {
    backgroundColor: "#DFF1FF",
    width: "90%",
    height: "83%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 20,
  },
  container: { backgroundColor: "white", flex: 1 },

  fliestext: {
    padding: 15,
  },
});
