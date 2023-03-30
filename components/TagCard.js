import React from "react";
import { StyleSheet, View } from "react-native";

export default function TagCard(probs, { navigation }) {
  return (
    <View style={styles.ReiseCard}>
      <View style={styles.ReiseCardContent}>{probs.children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  ReiseCard: {
    borderRadius: 20,
    elevation: 3,
    backgroundColor: "#213049",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowRadius: 6,
    shadowOpacity: 0.3,
    marginHorizontal: 4,
    marginVertical: 6,
    width: 300,
    heigh: 170,
  },

  ReiseCardContent: {
    marginHorizontal: 18,
    marginVertical: 10,
  },
});
