import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import { useContext } from "react";
import { storeContext } from "../App";
import { MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { globalStyles } from "../styles/global";

export default function AlleReisen({ children, navigation, setModalOpen }) {
  const { reisenContext } = useContext(storeContext);
  const [reisen, setReisen] = reisenContext;

  const deleteReise = async (item) => {
    setReisen((prev) => prev.filter((reise) => reise.reiseId !== item.reiseId));
    await AsyncStorage.setItem("reisen", JSON.stringify(reisen.filter((reise) => reise.reiseId !== item.reiseId)));
  };

  return (
    <View style={{ flexDirection: "row", flexWrap: "wrap", flex: 1 }}>
      {reisen?.map((item) => (
        <TouchableOpacity
          style={{
            justifyContent: "space-around",
            flexDirection: "row",
            borderRadius: 20,
            margin: 5,
            width: navigation.state.routeName === "Home" ? "47%" : "97%",
            height: navigation.state.routeName === "Home" ? 80 : 150,
            alignItems: navigation.state.routeName === "Home" ? "center" : "flex-end",
            justifyContent: navigation.state.routeName === "Home" ? "space-around" : "flex-start",

            backgroundColor: "#213049",
          }}
          key={item.reiseId}
          onPress={() => navigation.navigate("reviewEintraege", { reiseId: item.reiseId })}
        >
          {item.thumbnail ? (
            <Image style={{ borderRadius: 20, left: 0, opacity: 0.75, height: "100%", width: "100%", position: "absolute", resizeMode: "cover" }} source={{ uri: item.thumbnail }} />
          ) : item.defaultReise ? (
            <Image style={{ borderRadius: 20, left: 0, opacity: 0.75, height: "100%", width: "100%", position: "absolute", resizeMode: "cover" }} source={require("./images/demo/nr2.png")} />
          ) : null}
          {/* {item.thumbnail && <View style={{ height: 100, width: 100, backgroundColor: "red" }} />} */}
          <Text style={{ fontSize: navigation.state.routeName === "Home" ? 16 : 20, color: "white", paddingLeft: 20, paddingRight: 30, paddingBottom: 10 }}>{item.reiseTitel}</Text>
          <TouchableOpacity onPress={() => deleteReise(item)} style={{ paddingRight: 10 }}>
            <Image source={require("../images/delete.png")} style={styles.icon}></Image>
          </TouchableOpacity>
        </TouchableOpacity>
      ))}
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
    marginBottom: 10,
  },
});
