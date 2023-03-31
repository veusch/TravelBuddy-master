import React, { useState, useContext } from "react";
import { StyleSheet, Text, View, TextInput, Button, ScrollView, TouchableOpacity, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { globalStyles } from "../styles/global.js";
import { Formik } from "formik";
import UploadImage from "./UploadImagee.js";
import StarRatingg from "./StarRatingComponent.js";
import * as yup from "yup";
import { storeContext } from "../App";
import { generateId } from "../util/generateId.js";
const schema = yup.object({
  tagebucheintragTitle: yup.string().required().min(3),
  tagebucheintragBody: yup.string().required().min(4),
  tagebuchEintragZiel: yup.string().required(),
});

export default function RevieForm2({ addEntry, navigation, setModalOpen }) {
  const { backgroundContext } = useContext(storeContext);
  const [backgroundImageNumber, setBackgroundImageNumber] = backgroundContext;

  const handleSubmit = () => {
    if (form.tagebucheintragTitle.trim() && form.tagebucheintragBody.trim()) {
      addEntry(form);
    } else {
      alert("Bitte fülle beide Felder aus!");
    }
  };

  const [form, setForm] = useState({ tagebuchEintragId: generateId(10), tagebuchEintragTime: new Date(), tagebucheintragTitle: "", tagebuchEintragZiel: "", tagebucheintragBody: "", tagebuchEintragImages: [] });

  return (
    <ScrollView style={{ height: "100%" }}>
      <View style={[globalStyles.container, { height: "100%" }]}>
        <Text style={styles.headline2}>Neuen Beitrag{"\n"}erstellen</Text>
        <View style={styles.inputWrapper}>
          <View style={globalStyles.WrapperForms}>
            <View style={globalStyles.InputForms}>
              <TextInput
                multiline
                maxLength={25}
                style={globalStyles.input}
                placeholder="Titel"
                onChangeText={(e) => {
                  setForm((prev) => ({ ...prev, tagebucheintragTitle: e }));
                }}
                value={form.tagebucheintragTitle}
              />
            </View>

            <View style={globalStyles.InputForms}>
              <TextInput
                multiline={true}
                style={[globalStyles.input, { height: 150 }]}
                placeholder="Was hast du erlebt?"
                onChangeText={(e) => {
                  setForm((prev) => ({ ...prev, tagebucheintragBody: e }));
                }}
                value={form.tagebucheintragBody}
              />
            </View>

            <View style={{ margin: 10, flexDirection: "row", flexWrap: "wrap", justifyContent: "flex-start", alignItems: "center" }}>
              {form?.tagebuchEintragImages?.map((image) => (
                <TouchableOpacity
                  key={image}
                  onPress={() => {
                    let temp = form.tagebuchEintragImages;
                    temp = temp.filter((uri) => uri !== image);
                    setForm((prev) => ({ ...prev, tagebuchEintragImages: temp }));
                  }}
                >
                  <View style={{ margin: 8, height: 50, width: 50 }}>
                    <Image source={{ uri: image }} style={{ height: "100%", width: "100%", resizeMode: "cover" }} />
                    <View style={{ position: "absolute", zIndex: 100, top: -5, right: -5, height: 20, justifyContent: "center", alignItems: "center", width: 20, backgroundColor: "#213049", borderRadius: 100 }}>
                      <Text style={{ color: "white", width: 8, height: 20 }}>x</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
              <View style={{ margin: 8, justifyContent: "center", alignItems: "center", height: 50, width: 50 }}>
                <TouchableOpacity
                  onPress={async () => {
                    let _image = await ImagePicker.launchImageLibraryAsync({
                      mediaTypes: ImagePicker.MediaTypeOptions.Images,
                      allowsEditing: true,
                      aspect: [3, 5],
                      quality: 1,
                    });
                    if (!_image.cancelled) {
                      setForm((prev) => ({ ...prev, tagebuchEintragImages: [...prev.tagebuchEintragImages, _image.uri] }));
                    }
                  }}
                >
                  <Image source={require("../images/neu.png")} style={{ width: 30, height: 30 }} />
                </TouchableOpacity>
              </View>
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
        {/* <Formik
          initialValues={{ tagebucheintragTitle: "", tagebuchEintragTime: new Date(), tagebuchEintragZiel: "", tagebucheintragBody: "", tagebucheintragImage: "", tagebuchEintragId: generateId(10) }}
          validationSchema={schema}
          onSubmit={(values, actions) => {
            addEntry(values);

            actions.resetForm();
          }}
        >
          {(probs) => (
            
          )}
        </Formik> */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  headline2: {
    fontSize: 20,
    fontFamily: "Medium",
    textAlign: "center",
    padding: "5%",
    color: "#1F314A",
  },
  Buttonv: {
    paddingTop: 60,
  },
  input: {
    padding: 10,
  },
});
