import React, { useContext } from "react";
import { Text, StyleSheet, View, ScrollView, Image } from "react-native";
import { globalStyles } from "../styles/global";
import { storeContext } from "../App";

export default function Nutzungsbedingungen() {
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
      <Text style={globalStyles.impHeadline}>Nutzungsbedingungen</Text>

      <View style={styles.Bgd}>
        <ScrollView>
          <Text style={styles.fliestext}>
            <Text style={globalStyles.impBold}> § 1 Geltungsbereich </Text>
            {"\n"}
            (1) Die nachfolgenden Bedingungen gelten für die Nutzung des Name Ihrer Domain – im folgenden “Unsere Webseite” genannt – Forums. Für die Nutzung des Forums ist wichtig, dass Sie als Nutzer/Nutzerin die nachfolgenden Forenregeln bzw. –bedingungen akzeptieren. Die Registrierung und
            Benutzung unseres Forums ist kostenlos. {"\n"}(2) Mit der Registrierung sind Sie mit den Nutzungsbedingungen unserer Webseite einverstanden. Durch Ihr Einverständnis garantieren Sie uns, dass Sie keine Beiträge erstellen werden, die gegen die Nutzungsbedingung verstoßen. {"\n"}(3) Durch
            das Benutzen von unserer Webseite kommt kein Vertrag zwischen den Nutzern/Nutzerinnen und uns zustande. {"\n"}
            {"\n"}
            <Text style={globalStyles.impBold}>§ 2 Pflichten als Forum-Nutzer/Forum-Nutzerinnen </Text>
            {"\n"}
            (1) Einer Ihrer Pflichten als Nutzer/Nutzerin ist es, dass Sie keine Beiträge veröffentlichen, die gegen diese Forenregeln, gegen die guten Sitten oder sonst gegen geltendes deutsches Recht verstoßen. Folgende Punkte sind Ihnen nicht genehmigt: 1. Inhalte zu veröffentlichen, die unwahr
            sind und deren Veröffentlichung einen Straftatbestand oder eine Ordnungswidrigkeit erfüllt, 2. Versendung von Spam über das Forum an andere Forum-Nutzer/Form-Nutzerin, 3. Verwendung von gesetzlich durch Urheber- und Markenrecht geschützte Inhalte ohne rechtmäßige Berechtigung (z.B.
            Pressemitteilungen etc.), 4. Handlungen, die wettbewerbswidrig sind, 5. mehrfache Einstellung von Themen ins Forum (sogenannte Doppelpostings), 6. eigene Werbung, folglich Schleichwerbung, zu betreiben und 7. Inhalte zu veröffentlichen, die beleidigend, rassistisch, diskriminierend oder
            pornographische Elemente aufweisen gegenüber anderen Nutzern/Nutzerinnen und der Allgemeinheit. Ihre Pflicht als Forum-Nutzer/ Forum-Nutzerin ist es, auf § 2 Abs. 1 Nr. 1-7 dieser Nutzungsbedingung, vor der Veröffentlichung Ihres Beitrages im Forum zu beachten und zu überprüfen, ob Sie
            sich an diese Punkte gehalten haben. {"\n"}
            (2) Sollten Sie gegen § 2 Abs. 1 Nr. 1-7 dieser Nutzungsbedingung verstoßen, behalten wir uns das Recht vor, gegen Sie folgende Schritte vorzunehmen: 1. Ihre eingestellten Beiträge zu löschen und diese abzuändern, 2. Verbot weiterhin im Forum Beiträge zu verfassen und 3. Sperrung des
            Zugangs als Nutzer/Nutzerin. {"\n"}
            (3) Haben Sie als Forum-Nutzer/Forum-Nutzerin nicht die Forenregeln beachtet und sind hierdurch mögliche Rechtsverstöße entstanden, die durch Ihre eingestellten Inhalte in unserem Forum entstanden sind (Pflichtverletzung), verpflichten Sie sich als Nutzer/Nutzerin, uns von jeglichen
            Ansprüchen, auch den Schadenersatzansprüchen, freizustellen und diesen die Kosten zu ersetzen. Zudem ist der Nutzer/die Nutzerin verpflichtet uns, bei Schadenersatzansprüchen hinsichtlich der Abwehr des durch ihn entstandenen Rechtsverstoßes (Pflichtverletzung s.o.), zu unterstützen und
            die Kosten einer angemessenen Rechtsverteidigung für uns zu tragen. {"\n"}
            (4) Durch Ihr Einverständnis garantieren Sie uns, dass Sie keine Beträge erstellen werden, die gegen die Nutzungsbedingung verstoßen. Entsprechendes gilt auch für das Setzen von externen Links und die Signaturen. {"\n"}
            {"\n"}
            <Text style={globalStyles.impBold}>§ 3 Übertragung von Nutzungsrechten </Text>
            {"\n"}
            Sie, als Forum-Nutzer/Forum-Nutzerin haben die alleinige Verantwortung des Urheberrechts i.S.d. Urhebergesetzes bei Veröffentlichung von Beiträgen und Themen im Forum zu beachten. Als Nutzer/Nutzerin räumen Sie lediglich uns mit Veröffentlichung Ihres Beitrages auf deren Homepage das
            Recht ein, den Beitrag dauerhaft zum Abruf bereitzustellen. Ferner hat unser Team das Recht, Ihre Themen und Beiträge zu löschen, zu bearbeiten und innerhalb seiner Homepage zu verschieben, um diese mit anderen Inhalten zu verknüpfen oder zu schließen. {"\n"}
            {"\n"}
            <Text style={globalStyles.impBold}>§ 4 Haftungsbeschränkung </Text>
            {"\n"}
            (1) Wir übernehmen keinerlei Gewähr für die im Forum veröffentlichten und eingestellten Beiträge, Themen, externen Links und die daraus resultierenden Inhalte, insbesondere nicht für deren Richtigkeit, Vollständigkeit und Aktualität. Wir sind auch nicht verpflichtet, permanent die
            übermittelten und gespeicherten Beiträge der Nutzer/Nutzerinnen zu überwachen oder nach den Umständen zu erforschen, ob sie auf einen rechtswidrigen Inhalt hinweisen. Wir haften grundsätzlich nur im Falle einer vorsätzlichen oder grob fahrlässigen Pflichtverletzung. {"\n"}
            (2) Wir weisen ausdrücklich darauf hin, dass die juristischen Beiträge und Diskussionen im Forum vollkommen unverbindlich sind. Die Nutzung der Beiträge und deren Verwertung erfolgt auf Ihre eigene Gefahr. (3) Bei Werbeschaltungen übernehmen wir keine Haftung für den Inhalt und die
            Richtigkeit. Für den Inhalt der Werbeanzeigen ist der jeweilige Autor einzig und allein verantwortlich; gleiches gilt für den Inhalt der beworbenen Webseite. Bei Darstellung der Werbeanzeige auf unserer Webseite , sind wir nicht gleichzeitig mit dem rechtswidrigen Inhalt einverstanden.
            Daher liegt die Haftung ausschließlich bei dem Werbekunden. {"\n"}
            (4) Es ist wird nicht für einen ständigen unterbrechungsfreien Abruf der Webseite garantiert. Einer Haftung diesbezüglich wird hiermit ausdrücklich widersprochen. Auch bei großer Sorgfalt können Ausfallzeiten leider nicht ausgeschlossen werden. {"\n"}
            {"\n"}
            <Text style={globalStyles.impBold}>§ 5 Urheberrecht </Text>
            {"\n"}
            Sämtliche Texte, Bilder und andere auf unserer Webseite veröffentlichten Informationen und Daten unterliegen – sofern nicht anders gekennzeichnet – dem Copyright unserer Seite. Jede Form von Wiedergabe und/oder Modifikation darf nur mit der schriftlichen Genehmigung durch uns erfolgen.
            Andersfalls behalten wir uns das Recht vor gerichtlich gegen diese Rechtsverletzung vorzugehen. Alle Kosten, die durch eine Rechtsverletzung seitens eines Benutzers verursacht werden, werden diesem in Rechnung gestellt. {"\n"}
            {"\n"}
            <Text style={globalStyles.impBold}>§ 6 Änderungsvorbehalt </Text>
            {"\n"}
            Wir haben jederzeit das Recht die Nutzungsbedingungen zu ändern. Die Änderung wird dann per Forum-Eintrag auf der Webseite veröffentlicht. {"\n"}
            {"\n"}
            <Text style={globalStyles.impBold}>§ 7 Kündigung und Laufzeit der Mitgliedschaft bei unserer Webseite </Text>
            {"\n"}
            Die Laufzeit der Mitgliedschaft beginnt mit der Registrierung und mit dem Einverständnis unseren Nutzungsbedingungen und besteht auf eine unbestimmte Zeit. Die Mitgliedschaft kann jederzeit ohne Angabe von Kündigen fristlos gekündigt werden.
            {"\n"}
            {"\n"}
            <Text style={globalStyles.impBold}>§ 8 Salvatorische Klausel </Text>
            {"\n"}
            Diese Forum-Nutzungsbedingung ist als Teil unserer Webseite zu betrachten, von dem aus auf diese Seite verwiesen wird. Sind einzelne Formulierungen dieser Forum-Nutzungsbedingung nicht mehr ganz oder nicht mehr vollständig konform mit der geltenden Rechtslage, so ist davon auszugehen,
            dass die übrigen Regelungen der Forum-Nutzungsbedingungen bestehen bleiben. Diese Nutzungsbedingungen wurden freundlicherweise von jurarat.de zur Verfügung gestellt.
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
