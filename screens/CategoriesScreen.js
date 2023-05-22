import { StyleSheet, Text, View, FlatList, Dimensions } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

const renderCategoryItem = (itemData) => {
  // console.log(itemData.item.title);
  return (
    <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />
  );
};
const CategoriesScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
      />
    </View>
  );
};

export default CategoriesScreen;
const { width, height } = Dimensions.get("screen");
const styles = StyleSheet.create({
  container: {
    marginTop: height / 20,
  },
});
