import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  Button,
} from "react-native";
import { useLayoutEffect } from "react";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
const MealDetailScreen = ({ route, navigation }) => {
  const { mealId } = route.params;
  const headerButtonPressHandler = () => {
    console.log("clicked");
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          onPress={headerButtonPressHandler}
          icon="star"
          color="white"
        />
        // <Button onPress={headerButtonPressHandler} title="Tap me" />
      ),
    });
  }, [navigation, headerButtonPressHandler]);
  const selectedMeal = MEALS.find((meal) => mealId == meal.id);
  return (
    <ScrollView style={styles.rootContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: selectedMeal.imageUrl,
          }}
          style={styles.image}
        />
      </View>
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <View>
        <MealDetails data={selectedMeal} textStyle={styles.detailText} />
      </View>
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;
const { width, height } = Dimensions.get("screen");
const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  imageContainer: {
    alignItems: "center",
  },
  image: {
    width: width,
    height: height / 3,
    borderRadius: 12,
  },
  title: {
    margin: 8,
    fontSize: 25,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
  },
  detailText: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
