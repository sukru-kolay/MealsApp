import { StyleSheet, FlatList, View, Text } from "react-native";
import { MEALS } from "../data/dummy-data";
import { useEffect } from "react";
import MealItem from "../components/MealItem";

const MealsOverviewScreen = ({ route }) => {
  console.log(MEALS);
  const { categoryId } = route.params;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  });
  const renderMealItem = ({ item }) => {
    return <MealItem data={item} />;
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
