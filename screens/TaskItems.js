import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, Platform, TextInput, TouchableOpacity, KeyboardAvoidingView, Image, ScrollView } from "react-native";
import { storeContext } from "../App";
import { generateId } from "../util/generateId";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MaterialIcons } from "@expo/vector-icons";
import { globalStyles } from "../styles/global";

export default function TaskItems(props) {
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);
  const { reisenContext, backgroundContext } = useContext(storeContext);
  const [reisen, setReisen] = reisenContext;
  const [backgroundImageNumber, setBackgroundImageNumber] = backgroundContext;

  const {
    navigation,
    navigation: {
      state: {
        params: { taskListId },
      },
    },
  } = props;

  // Das ist Object Destructuring
  // const test = { name: "Peter", age: 20 };
  // const { name } = test;

  // Das ist Array Destructuring
  // const test = ["Peter", 20];
  // const [name] = test;

  const { tasksContext } = useContext(storeContext);
  const [tasks, setTasks] = tasksContext;

  const [taskInput, setTaskInput] = useState();

  const addTaskItem = async () => {
    if (taskInput.trim()) {
      let temp = tasks;
      temp.find((task) => task.taskListId === taskListId).taskListItems = temp.find((task) => task.taskListId === taskListId).taskListItems || [];
      temp.find((taskList) => taskList.taskListId === taskListId).taskListItems.push({ taskId: generateId(10), taskTitle: taskInput, done: false });
      setTasks(temp);
      await AsyncStorage.setItem("tasks", JSON.stringify(temp));
      setTaskInput("");
      forceUpdate();
    }
  };

  const completeTaskItem = async (taskId) => {
    let temp = tasks;
    temp.find((task) => task.taskListId === taskListId).taskListItems.find((taskListItem) => taskListItem.taskId === taskId).done = !temp.find((task) => task.taskListId === taskListId).taskListItems.find((taskListItem) => taskListItem.taskId === taskId).done;
    setTasks(temp);
    await AsyncStorage.setItem("tasks", JSON.stringify(temp));
    forceUpdate();
  };

  return (
    <View style={{ flex: 1 }}>
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
        <ScrollView>
          <View style={styles.tasksWrapper}>
            <Text style={styles.sectionTitle}>{tasks.find((taskList) => taskList.taskListId === taskListId)?.Name}</Text>

            <View style={styles.items}>
              {tasks
                ?.find((taskList) => taskList.taskListId === taskListId)
                ?.taskListItems?.sort((taskListItem) => taskListItem.done)
                .map((taskListItem) => {
                  return (
                    <TouchableOpacity key={taskListItem.taskId} onPress={() => completeTaskItem(taskListItem.taskId)}>
                      <View style={styles.item}>
                        <View style={styles.itemLeft}>
                          {taskListItem.done ? <MaterialIcons size={24} name="check" /> : <View style={styles.square}></View>}
                          <Text style={styles.itemText}>{taskListItem.taskTitle}</Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  );
                })}
            </View>
          </View>
        </ScrollView>
      </View>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder={"Schreibe etwas"} onChangeText={(text) => setTaskInput(text)} value={taskInput} />
        <TouchableOpacity onPress={addTaskItem}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
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
    backgroundColor: "white",
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: "25%",
    textAlign: "center",
  },

  Listen: {
    color: "lightgrey",
  },

  items: {
    marginTop: 30,
    backgroundColor: "#DFF1FF",
    padding: "7%",
    borderRadius: 15,
  },
  tasksWrapper: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  Footer: {
    backgroundColor: "grey",
    alignSelf: "stretch",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 100,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    maxWidth: 250,
    backgroundColor: "#DFF1FF",
    borderRadius: 20,

    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#DFF1FF",

    borderRadius: 60,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
  },
  addText: {
    backgroundColor: "#DFF1FF",
    fontSize: 26,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
  },
  item: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    flexDirection: "row",
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#BCF6",
    opacity: 0.7,
    borderRadius: 5,
  },
  itemText: {
    maxWidth: "80%",
    marginLeft: 15,
  },
  circular: {
    width: 12,
    height: 12,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#55BCF6",
  },
});
