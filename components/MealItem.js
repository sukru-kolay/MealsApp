import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Pressable,
  Platform,
} from "react-native";
import React from "react";

const MealItem = ({ data }) => {
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image style={styles.mealImage} source={{ uri: data.imageUrl }} />
            <Text style={styles.title}>{data.title}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.detailItem}>{data.duration}m</Text>
            <Text style={styles.detailItem}>
              {data.complexity.toUpperCase()}
            </Text>
            <Text style={styles.detailItem}>
              {data.affordability.toUpperCase()}{" "}
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const { width, height } = Dimensions.get("screen");
const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 16,
  },
  mealImage: {
    width: width,
    height: height / 4,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    justifyContent: "center",
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  buttonPressed: {
    opacity: Platform.OS == "ios" ? 0.5 : 0.75,
  },
});
