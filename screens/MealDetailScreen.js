import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
const MealDetailScreen = ({ route }) => {
  const { mealId } = route.params;
  const selectedMeal = MEALS.find((meal) => mealId == meal.id);
  return (
    <ScrollView>
      <View>
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
        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}>Ingredients</Text>
        </View>
        {selectedMeal.ingredients.map((ingredient) => (
          <Text key={ingredient}>{ingredient}</Text>
        ))}
        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}>Steps</Text>
        </View>
        {selectedMeal.steps.map((step) => (
          <Text>{step}</Text>
        ))}
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;
const { width, height } = Dimensions.get("screen");
const styles = StyleSheet.create({
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
  subTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  subTitleContainer: {
    borderBottomColor: "white",
    borderBottomWidth: 2,
    marginHorizontal: width / 15,
    marginVertical: 4,
    margin: 4,
    padding: 6,
  },
});
