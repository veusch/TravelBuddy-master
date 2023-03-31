import React, { useState, useContext, useEffect } from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback, Animated } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function StarRatingg(props) {
  const [starRating, setStarRating] = useState(props.defaultRating);

  const animatedButtonScale = new Animated.Value(1);

  useEffect(() => {
    props.setRating(props.tagebuchEintragId, starRating);
    props.forceUpdate();
  }, [starRating]);

  const handlePressIn = () => {
    Animated.spring(animatedButtonScale, {
      toValue: 1.5,
      useNativeDriver: true,
      speed: 50,
      bounciness: 4,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(animatedButtonScale, {
      toValue: 1,
      useNativeDriver: true,
      speed: 50,
      bounciness: 4,
    }).start();
    props.setRating(props.tagebuchEintragId, starRating);
  };

  const animatedScaleStyle = {
    transform: [{ scale: animatedButtonScale }],
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.stars}>
          <TouchableWithoutFeedback onPressIn={handlePressIn} onPressOut={handlePressOut} onPress={() => setStarRating(1)}>
            <Animated.View style={animatedScaleStyle}>
              <MaterialIcons name={starRating >= 1 ? "star" : "star-border"} size={25} style={starRating >= 1 ? styles.starSelected : styles.starUnselected} />
            </Animated.View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPressIn={handlePressIn} onPressOut={handlePressOut} onPress={() => setStarRating(2)}>
            <Animated.View style={animatedScaleStyle}>
              <MaterialIcons name={starRating >= 2 ? "star" : "star-border"} size={25} style={starRating >= 2 ? styles.starSelected : styles.starUnselected} />
            </Animated.View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPressIn={handlePressIn} onPressOut={handlePressOut} onPress={() => setStarRating(3)}>
            <Animated.View style={animatedScaleStyle}>
              <MaterialIcons name={starRating >= 3 ? "star" : "star-border"} size={25} style={starRating >= 3 ? styles.starSelected : styles.starUnselected} />
            </Animated.View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPressIn={handlePressIn} onPressOut={handlePressOut} onPress={() => setStarRating(4)}>
            <Animated.View style={animatedScaleStyle}>
              <MaterialIcons name={starRating >= 4 ? "star" : "star-border"} size={25} style={starRating >= 4 ? styles.starSelected : styles.starUnselected} />
            </Animated.View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPressIn={handlePressIn} onPressOut={handlePressOut} onPress={() => setStarRating(5)}>
            <Animated.View style={animatedScaleStyle}>
              <MaterialIcons name={starRating >= 5 ? "star" : "star-border"} size={25} style={starRating >= 5 ? styles.starSelected : styles.starUnselected} />
            </Animated.View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  heading: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 20,
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  },
  starUnselected: {
    color: "#aaa",
  },
  starSelected: {
    color: "#ffb300",
  },
});
