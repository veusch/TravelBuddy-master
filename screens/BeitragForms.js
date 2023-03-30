import React, { useState, useContext } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Image } from "react-native";
import { globalStyles } from "../styles/global.js";
import DateTimePicker from "@react-native-community/datetimepicker";
import * as ImagePicker from "expo-image-picker";
import * as yup from "yup";
import MapboxPlacesAutocomplete from "react-native-mapbox-places-autocomplete";
import { storeContext } from "../App";

export default function RevieForm({ addJourney, setModalOpen }) {
  const { backgroundContext } = useContext(storeContext);
  const [backgroundImageNumber, setBackgroundImageNumber] = backgroundContext;
  const [datePicker, setDatePicker] = useState("");
  const [selected, setSelected] = useState("");
  const [invalidDate, setInvalidDate] = useState(false);
  const [form, setForm] = useState({ reiseTitel: "", reiseLand: { string: "", countryId: "" }, startDate: new Date(), endDate: new Date(), reiseBeschreibung: "", thumbnail: "" });

  const schema = yup.object({
    reiseTitel: yup.string().required().min(3),
  });

  const setStartDate = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDatePicker("");
    setForm((prev) => ({ ...prev, startDate: currentDate }));
  };

  const setEndDate = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDatePicker("");
    setForm((prev) => ({ ...prev, endDate: currentDate }));
  };

  const handleSubmit = () => {
    if (new Date(form.startDate).valueOf() - new Date(form.endDate).valueOf() <= 0 && form.reiseTitel.trim()) {
      addJourney(form);
      setForm({ reiseTitel: "", reiseLand: { string: "", countryId: "" }, startDate: new Date(), endDate: new Date(), reiseBeschreibung: "", thumbnail: "" });
      setInvalidDate(false);
    } else if (new Date(form.startDate).valueOf() - new Date(form.endDate).valueOf() <= 0) {
      alert("Bitte gebe einen Namen an!");
    } else {
      setInvalidDate(true);
    }
  };

  const checkTextInput = () => {
    //Check for the Name TextInput
    if (!form.reiseTitel.trim()) {
      alert("Please Enter Name");
      return;
    }
  };

  return (
    <ScrollView>
      <View style={globalStyles.container}>
        <Image
          style={{ position: "absolute", opacity: 0.2, resizeMode: "cover", top: 0, left: 0, width: "110%", height: "110%", zIndex: -100 }}
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
        <Text style={styles.headline2}>Neues Tagebuch{"\n"}erstellen</Text>
        {datePicker === "start" ? (
          <DateTimePicker toLocaleDateString="de-DE" testID="dateTimePicker" value={form.startDate} mode="date" is24Hour={true} onChange={setStartDate} />
        ) : datePicker === "end" ? (
          <DateTimePicker testID="dateTimePicker" value={form.endDate} mode="date" is24Hour={true} onChange={setEndDate} />
        ) : null}
        <View style={styles.WRapperR}>
          <View style={globalStyles.WrapperForms}>
            <View style={globalStyles.InputForms}>
              <TextInput
                style={globalStyles.InputForms}
                placeholder="Name"
                multiline
                maxLength={30}
                onChangeText={(e) => {
                  setForm((prev) => ({ ...prev, reiseTitel: e }));
                }}
                value={form.reiseTitel}
              />
            </View>

            <View style={globalStyles.InputForms}>
              <TouchableOpacity
                onPress={async () => {
                  let _image = await ImagePicker.launchImageLibraryAsync({
                    mediaTypes: ImagePicker.MediaTypeOptions.Images,
                    allowsEditing: true,
                    aspect: [4, 3],
                    quality: 1,
                  });
                  if (!_image.cancelled) {
                    setForm((prev) => ({ ...prev, thumbnail: _image.uri }));
                  }
                }}
              >
                {form.thumbnail ? <Image source={{ uri: form.thumbnail }} style={{ height: 200 }} /> : <Text style={globalStyles.InputForms}>Titelbild</Text>}
              </TouchableOpacity>
            </View>

            <View style={[globalStyles.InputForms, styles.obenDrauf]}>
              <MapboxPlacesAutocomplete
                id="origin"
                placeholder="Reiseziel"
                accessToken={"sk.eyJ1IjoidmV1c2NoIiwiYSI6ImNsZXI1bTBjMzB0MTEzcW83aW1xNjVoNjgifQ._FF_oDaMCx4TCKvzw33LbQ"}
                onPlaceSelect={(data) => {
                  let temp = JSON.stringify(data)?.split("country.")[1]?.split(`"`)[0];
                  setForm((prev) => ({ ...prev, reiseLand: { string: data["place_name"], countryId: temp } }));
                  console.log(data);
                }}
                onClearInput={({ id }) => {
                  id === "origin";
                }}
                countryId=""
                containerStyle={{
                  marginBottom: 12,
                }}
                inputStyle={{ backgroundColor: "#C7DEF0", fontFamily: "Medium", fontSize: 14 }}
              />
              {/* <TextInput
                style={globalStyles.input}
                placeholder="Reiseziel"
                onChangeText={(e) => {
                  setForm((prev) => ({ ...prev, reiseLand: e }));
                }}
                value={form.reiseLand}
              /> */}
            </View>

            <View style={globalStyles.InputForms}>
              <TouchableOpacity onPress={() => setDatePicker("start")} style={styles.reset}>
                <Text style={globalStyles.InputForms}>
                  <Text style={{ color: "orange" }}>Von </Text>
                  {form.startDate.toLocaleDateString("en-GB")}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={[globalStyles.InputForms, invalidDate && styles.invalid]}>
              <TouchableOpacity onPress={() => setDatePicker("end")} style={styles.reset}>
                <Text style={[globalStyles.InputForms, invalidDate && styles.invalid]}>
                  <Text style={{ color: "orange" }}>Bis </Text>
                  {form.endDate.toLocaleDateString("de-DE").toString()}
                </Text>
              </TouchableOpacity>
            </View>

            <View style={globalStyles.InputForms}>
              <TextInput
                style={globalStyles.InputForms}
                placeholder="Reisebeschreibung"
                multiline
                onChangeText={(e) => {
                  setForm((prev) => ({ ...prev, reiseBeschreibung: e }));
                }}
                value={form.reiseBeschreibung}
              />
            </View>
          </View>
          <View style={globalStyles.ButtonFlex}>
            <TouchableOpacity
              onPress={() => {
                setModalOpen(false);
              }}
              style={globalStyles.Opac}
            >
              <Text style={globalStyles.OpacText}>Abbrechen</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSubmit} style={globalStyles.Opac}>
              <Text style={globalStyles.OpacText}>Erstellen</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  reset: {
    margin: 0,
    padding: 0,
  },
  headline2: {
    fontSize: 20,
    fontFamily: "Medium",
    textAlign: "center",
    padding: "5%",
    color: "#1F314A",
  },

  invalid: {
    backgroundColor: "#D51111",
  },
  obenDrauf: {
    position: "relative",
    zIndex: 100,
  },
  input: {
    borderWidth: 1,
    borderColor: "#C7DEF0",
    fontSize: 14,
    borderRadius: 8,
    padding: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    height: 100,
    fontFamily: "Medium",
  },
});
