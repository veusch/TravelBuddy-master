import { StyleSheet, View } from "react-native";
import { globalStyles } from "../styles/global";

export default function ListenCard(probs) {
  return (
    <View style={globalStyles.ListenCard}>
      <View style={globalStyles.ListenCardContent}>{probs.children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  Testi: {
    color: "white",
    fontWeight: "bold",
    padding: 10,
  },
});
