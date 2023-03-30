import React, { useEffect, useState, useContext } from "react";
import { View, Text, Button, StyleSheet, AppRegistry, Modal, FlatList, TouchableOpacity, TouchableWithoutFeedback, Keyboard, TextInput, ScrollView, Image } from "react-native";
import ListenForms from "./ListenForms";
import ListenCard from "../components/ListenCard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { globalStyles } from "../styles/global";
import { storeContext } from "../App";
import { generateId } from "../util/generateId";

export default function ListenScreen({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);
  const { tasksContext, backgroundContext } = useContext(storeContext);
  const [backgroundImageNumber, setBackgroundImageNumber] = backgroundContext;

  const [tasks, setTasks] = tasksContext;

  const completeTask = async (taskListId) => {
    setTasks((currentTasks) => currentTasks.filter((item) => item.taskListId !== taskListId));
    await AsyncStorage.setItem("tasks", JSON.stringify(tasks.filter((item) => item.taskListId !== taskListId)));
  };

  const addTask = async (task) => {
    task.taskListId = generateId(10);
    setTasks((currentTasks) => [task, ...currentTasks]);
    await AsyncStorage.setItem("tasks", JSON.stringify([task, ...tasks]));
    setModalOpen(false);
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
      <ScrollView style={{ width: "100%" }} contentContainerStyle={{ width: "100%" }}>
        <Modal visible={modalOpen} animationType="slide">
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.modalContent}>
              <ListenForms addTask={addTask} setModalOpen={setModalOpen} />
            </View>
          </TouchableWithoutFeedback>
        </Modal>
        <TouchableOpacity onPress={() => setModalOpen(true)}>
          <Image source={require("../images/neu.png")} style={globalStyles.neu} />
        </TouchableOpacity>
        <Text style={globalStyles.headline}>Meine Listen</Text>
        <View style={styles.fllexContainer}>
          {tasks?.map((taskList) => {
            return (
              <TouchableOpacity key={taskList.taskListId} onPress={() => navigation.navigate("ListeNeu", { taskListId: taskList.taskListId })}>
                <ListenCard>
                  <View style={styles.wrapper}>
                    <Text style={{ fontFamily: "Regular", marginRight: 30, marginLeft: 10 }}>{taskList.taskListTitle}</Text>
                    <TouchableOpacity onPress={() => completeTask(taskList.taskListId)}>
                      <Image source={require("../images/delete.png")} style={styles.icon}></Image>
                    </TouchableOpacity>
                  </View>
                </ListenCard>
              </TouchableOpacity>
            );
          })}
          <View style={globalStyles.addListe}>
            <TouchableOpacity onPress={() => setModalOpen(true)}>
              <Text style={styles.addText}>Neue Liste hinzufügen</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <View style={globalStyles.Footer}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          {/*Home*/}
          <Image source={require("../images/home.png")} style={globalStyles.iconNavigator} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Reisen")}>
          {/*Reisen*/}
          <Image source={require("../images/eintrag.png")} style={globalStyles.iconNavigator} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Listen")}>
          {/*Listen*/}
          <Image source={require("../images/listenwhite.png")} style={globalStyles.iconNavigator} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("settings")}>
          {/*Settings*/}
          <Image source={require("../images/profil.png")} style={globalStyles.iconNavigator} />
        </TouchableOpacity>
      </View>
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

  wrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  text: { fontSize: 20 },
  addText: {
    color: "white",
    fontSize: 16,
    fontFamily: "Medium",
    textAlign: "center",
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
  },

  fllexContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    flexDirection: "row",
  },

  listenn: {
    marginTop: 20,
  },

  icon: {
    width: 30,
    height: 30,
    marginBottom: 10,
    alignItems: "center",
    alignSelf: "center",
    alignContent: "center",
    justifyContent: "center",
  },
  Listen: {
    color: "lightgrey",
  },

  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
    backgroundColor: "white",
    marginTop: 20,
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
