import React, { createContext, useEffect, useState } from "react";
import Navigator from "./stack/homeStack";
import { useFonts } from "expo-font";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeContext = createContext();

const App = () => {
  const [reisen, setReisen] = useState();
  const [tasks, setTasks] = useState();
  const [backgroundImageNumber, setBackgroundImageNumber] = useState(1);
  const [profile, setProfile] = useState({});

  const [fontsLoaded] = useFonts({
    Bold: require("./assets/fonts/SF-Pro-Rounded-Bold.otf"),
    Medium: require("./assets/fonts/SF-Pro-Rounded-Medium.otf"),
    Light: require("./assets/fonts/SF-Pro-Rounded-Light.otf"),
    Regular: require("./assets/fonts/SF-Pro-Rounded-Regular.otf"),
  });

  useEffect(() => {
    async function getDataFromStorage() {
      let tempReisen = await AsyncStorage.getItem("reisen");
      let tempTasks = await AsyncStorage.getItem("tasks");
      let tempBackgroundImageNumber = await AsyncStorage.getItem("backgroundImageNumber");
      let tempProfile = await AsyncStorage.getItem("profile");

      await AsyncStorage.clear();

      const defaultProfile = { profileName: "Dein Name" };

      const defaultReisen = [
        {
          defaultReise: true,
          startDate: "2023-03-26T17:09:20.187Z",
          endDate: "2023-03-31T17:09:20.187Z",
          reiseTitel: "Barcelona",
          reiseLand: { string: "Barcelona, Spain", countryId: "8774" },
          reiseBeschreibung: "Ende der Sommerferien reisten wir nach Barcelona. Das war unser zweiter Urlaub gemeinsam in Spanien und war voller neuer Überraschungen!",
          reiseId: "Iyxnkg6cLQ",
          reiseTage: [
            {
              reiseTagId: "mKVZUHJTSH",
              reiseTagDate: "2023-03-26T17:09:20.187Z",
              reiseEntries: [
                {
                  tagebuchEintragId: "44HoHtzUlV",
                  tagebuchEintragTime: "2023-03-26T17:13:09.962Z",
                  tagebuchEintragZiel: "",
                  tagebuchEintragImages: [
                    "file:///data/user/0/host.exp.exponent/cache/ImagePicker/e8c3b874-c104-43b7-8655-55d6633e8d31.jpeg",
                    "file:///data/user/0/host.exp.exponent/cache/ImagePicker/7f2028e3-f239-4fe5-a8dc-bd31c8435369.jpeg",
                    "file:///data/user/0/host.exp.exponent/cache/ImagePicker/d91e8a1d-3dcf-4649-b107-46178b1390c8.jpeg",
                  ],
                  tagebucheintragTitle: "Anreise",
                  tagebucheintragBody:
                    "Heute sind wir endlich in Barcelona angekommen! Unser Flug hat um 21:25 am Aeroport de Barcelona-El Prat gelandet und wir haben uns danach sofort auf die Suche nach einem Öffi-Ticket gemacht. Es war gar nicht so einfach, aber wir haben es schlussendlich geschafft. Unser Airbnb-Zimmer ist ziemlich klein, aber wir haben uns trotzdem kurzzeitig niedergelassen und sind dann direkt losgezogen, um die Stadt zu erkunden. Zuallererst haben wir eine Schüssel Ramen gegessen und uns gestärkt, bevor wir uns auf den Weg zum Strand gemacht haben. Wir sind eine Weile am Wasser entlang spaziert und haben dabei drei nette Schweizer kennengelernt. Schließlich sind wir zurück zum Apartment gegangen, um uns auszuruhen und den Tag Revue passieren zu lassen. Ich bin schon gespannt, was uns morgen alles erwartet!",
                  rating: 5,
                },
                {
                  tagebuchEintragId: "duC9h4bveJ",
                  tagebuchEintragTime: "2023-03-26T17:16:29.241Z",
                  tagebuchEintragZiel: "",
                  tagebucheintragTitle: "Shopping",
                  tagebuchEintragImages: ["file:///data/user/0/host.exp.exponent/cache/ImagePicker/3445d76c-666c-4e22-bd44-bb7c440269c3.jpeg"],
                  tagebucheintragBody:
                    "Heute haben wir eine Shopping-Tour auf der La Rambla gemacht und uns den Mercat de la Boqueria angesehen. Es war wirklich interessant, aber auch ein wenig seltsam, da es dort Lebensmittel wie Schafsköpfe gab. Wir haben uns stattdessen für frisches Obst, Gemüse, Smoothies und exotische Gewürze entschieden. Auf dem Markt haben wir auch ein paar nette Leute kennengelernt. Anschließend sind wir noch in einige Kleidungs-Stores gegangen und ich habe mir ein Kleid gekauft. Gegen 19 Uhr sind wir zurück ins Apartment gegangen, um uns auszuruhen. Später haben wir beschlossen, in einen Club zu gehen. Leider wurde Verenas Handy gestohlen, was wirklich ärgerlich war. Trotzdem haben wir auch in diesem Club noch einige nette Leute kennengelernt. Um 8 Uhr morgens waren wir dann endlich zurück im Zimmer und haben uns schlafen gelegt. Was für ein ereignisreicher Tag!",
                  rating: 3,
                },
                {
                  tagebuchEintragId: "bLQxePLuK2",
                  tagebuchEintragTime: "2023-03-26T17:17:30.313Z",
                  tagebuchEintragZiel: "",
                  tagebucheintragTitle: "City Walk",
                  tagebucheintragBody:
                    "Am dritten Tag sind wir sehr spät aufgestanden, da wir die Nacht zuvor so lange unterwegs waren. Wir haben uns sofort auf die Suche nach einem Mittagessen gemacht und sind schließlich um 15 Uhr in einem Strandrestaurant fündig geworden. Der Salat und das Dessert waren wirklich köstlich! Danach haben wir versucht, Verenas gestohlenes Handy zu orten und sind dafür zu Fuß durch die Stadt gelaufen. Das war sehr anstrengend, da es draußen sehr heiß war. Zur Sonnenuntergangszeit haben wir dann die Schweizer vom ersten Tag am Strand getroffen und den Sonnenuntergang gemeinsam genossen.Nach einem kleinen Abendessen sind wir zurück ins Zimmer gegangen, um uns auszuruhen. Später haben wir beschlossen, in einen Club zu gehen, wo großartige Musik gespielt wurde. Wir haben bis 5 Uhr morgens getanzt, bevor wir wieder ins Zimmer zurückgekehrt sind. ",
                  tagebuchEintragImages: ["file:///data/user/0/host.exp.exponent/cache/ImagePicker/3b5d0da3-03cd-469b-b773-8e55abdd8589.jpeg"],
                  rating: 4,
                },
              ],
            },
            {
              reiseTagId: "zSwKCBsZNy",
              reiseTagDate: "2023-03-27T17:09:20.187Z",
              reiseEntries: [
                {
                  tagebuchEintragId: "44HoZtzUlV",
                  tagebuchEintragTime: "2023-03-26T17:13:09.962Z",
                  tagebuchEintragZiel: "",
                  tagebuchEintragImages: [
                    "file:///data/user/0/host.exp.exponent/cache/ImagePicker/e8c3b874-c104-43b7-8655-55d6633e8d31.jpeg",
                    "file:///data/user/0/host.exp.exponent/cache/ImagePicker/7f2028e3-f239-4fe5-a8dc-bd31c8435369.jpeg",
                    "file:///data/user/0/host.exp.exponent/cache/ImagePicker/d91e8a1d-3dcf-4649-b107-46178b1390c8.jpeg",
                  ],
                  tagebucheintragTitle: "Aquarium",
                  tagebucheintragBody:
                    "Heute starteten wir den Tag früh und machten uns auf den Weg zu einer empfohlenen Sandwich-Bar, um unser Mittagessen zu besorgen. Wir stellten fest, dass dieser Ort kein Geheimtipp mehr war, denn eine lange Warteschlange hatte sich bereits gebildet. Trotz einer Wartezeit von 40 Minuten waren die Sandwiches jeden Cent und jede Minute wert. Sie waren köstlich, groß und auch preisgünstig. Wir genossen unser Mittagessen an der Hafenpromenade und besuchten anschließend das Aquarium, obwohl der Eintritt etwas teuer war. Die Zeit war jedoch gut investiert, da wir über 2 Stunden damit verbrachten, alle Arten von bunten Fischen zu beobachten. Zurück in unserem Apartment haben wir uns ausgeruht und für den Abend hergerichtet. Bevor wir zum Club aufbrachen, holten wir uns Sushi für unser Abendessen. Der Club war sehr schön eingerichtet, die Musik war großartig und es gab viele nette Leute. Wir feierten bis in die frühen Morgenstunden.",
                  rating: 5,
                },
                {
                  tagebuchEintragId: "duC9h4bveJ",
                  tagebuchEintragTime: "2023-03-26T17:16:29.241Z",
                  tagebuchEintragZiel: "",
                  tagebucheintragTitle: "Sagrada",
                  tagebuchEintragImages: ["file:///data/user/0/host.exp.exponent/cache/ImagePicker/3445d76c-666c-4e22-bd44-bb7c440269c3.jpeg"],
                  tagebucheintragBody:
                    "Heute war ein aufregender Tag in Barcelona. Ich hatte ein Ticket für die Sagrada Familia gebucht und wir mussten früh aufstehen. Während ich die Kirche besichtigt und eine Führung gemacht habe, hat Verena den Nachmittag am Strand verbracht. Die Kirche war atemberaubend und ich habe viele schöne Fotos gemacht. Nach der Besichtigung haben wir uns am Strand getroffen und sind gemeinsam zum Placa de Espana gefahren. Dort sind wir viele Stufen nach oben auf den Berg gestiegen und haben die wunderschöne Aussicht auf die Stadt genossen. Es war ein unvergesslicher Moment, als wir mit vielen anderen Leuten den Sonnenuntergang genossen haben und einem Straßenmusiker zugehört haben.Als wir zurück im Zimmer waren, haben wir uns für den Clubabend fertig gemacht und sind dann losgezogen. Es war ein aufregender Abend mit toller Musik und wir sind spät zurück ins Zimmer gekommen.",
                  rating: 3,
                },
              ],
            },
            {
              reiseTagId: "UkH7vq8mEW",
              reiseTagDate: "2023-03-28T17:09:20.187Z",
              reiseEntries: [
                {
                  tagebuchEintragId: "44HoZtzUlV",
                  tagebuchEintragTime: "2023-03-26T17:13:09.962Z",
                  tagebuchEintragZiel: "",
                  tagebuchEintragImages: [
                    "file:///data/user/0/host.exp.exponent/cache/ImagePicker/e8c3b874-c104-43b7-8655-55d6633e8d31.jpeg",
                    "file:///data/user/0/host.exp.exponent/cache/ImagePicker/7f2028e3-f239-4fe5-a8dc-bd31c8435369.jpeg",
                    "file:///data/user/0/host.exp.exponent/cache/ImagePicker/d91e8a1d-3dcf-4649-b107-46178b1390c8.jpeg",
                  ],
                  tagebucheintragTitle: "Strand",
                  tagebucheintragBody:
                    "Am vorletzten Tag unseres Aufenthalts haben wir uns eine köstliche Pizza gegönnt und ein Picknick an der Strandpromenade gemacht. Währenddessen bemerkten wir, dass der katalanische Nationalfeiertag begangen wurde. Die ganze Stadt war geschmückt und es fand ein großer Umzug statt. Wir beschlossen spontan, daran teilzunehmen und uns ein Stück des Zuges anzuschließen. Schließlich kamen wir in der Nähe des Strandes an und beschlossen, eine erfrischende Schwimmrunde zu drehen und den Rest des Tages am Strand zu verbringen. Am Abend unternahmen wir noch einen letzten Ausflug in einen Club und ließen den Abend anschließend beim Schwimmen am Strand ausklingen. Danach fuhren wir zurück zur Unterkunft und begannen damit, unsere Sachen für die Abreise zu packen.",
                  rating: 5,
                },
                {
                  tagebuchEintragId: "duC9h4bveJ",
                  tagebuchEintragTime: "2023-03-26T17:16:29.241Z",
                  tagebuchEintragZiel: "",
                  tagebucheintragTitle: "Abreise",
                  tagebuchEintragImages: ["file:///data/user/0/host.exp.exponent/cache/ImagePicker/3445d76c-666c-4e22-bd44-bb7c440269c3.jpeg"],
                  tagebucheintragBody:
                    "Heute Morgen waren wir richtig in Eile, um pünktlich den Bus zum Flughafen zu erwischen. Es war wirklich stressig! Als wir endlich am Flughafen ankamen, gönnten wir uns ein schnelles Frühstück, durchliefen die Sicherheitskontrolle und warteten dann auf unseren Abflug. Der Flug war etwas turbulent, aber schließlich landeten wir glücklich am Wiener Flughafen.",
                  rating: 3,
                },
              ],
            },
            { reiseTagId: "erPSV9wNwZ", reiseTagDate: "2023-03-29T17:09:20.187Z", reiseEntries: [] },
            { reiseTagId: "TmOnaxvTor", reiseTagDate: "2023-03-30T17:09:20.187Z", reiseEntries: [] },
            { reiseTagId: "pUCwhoNMWN", reiseTagDate: "2023-03-31T17:09:20.187Z", reiseEntries: [] },
          ],
        },
      ];

      if (tempReisen !== null) {
        setReisen(JSON.parse(tempReisen));
      } else {
        setReisen(defaultReisen);
        await AsyncStorage.setItem("reisen", JSON.stringify(defaultReisen));
      }

      if (tempTasks !== null) {
        setTasks(JSON.parse(tempTasks));
      } else {
        setTasks([]);
      }

      if (tempBackgroundImageNumber !== null) {
        setBackgroundImageNumber(JSON.parse(tempBackgroundImageNumber));
      } else {
        setBackgroundImageNumber(1);
      }

      if (tempProfile !== null) {
        setProfile(JSON.parse(tempProfile));
      } else {
        setProfile({});
        setProfile(defaultProfile);
        await AsyncStorage.setItem("profile", JSON.stringify(defaultProfile));
      }
    }

    getDataFromStorage();
  }, []);

  if (!fontsLoaded) return null;

  return (
    <storeContext.Provider value={{ reisenContext: [reisen, setReisen], tasksContext: [tasks, setTasks], backgroundContext: [backgroundImageNumber, setBackgroundImageNumber], profileContext: [profile, setProfile] }}>
      <Navigator />
    </storeContext.Provider>
  );
};

export default App;
