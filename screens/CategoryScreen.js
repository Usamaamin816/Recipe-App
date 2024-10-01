import {FlatList, StyleSheet, View} from 'react-native';
// import Category from '../models/category';
import CategoryGridTile from '../components/CategoryGridTile';
import {CATEGORIES} from '../data/dummy-data';

function CategoryScreen({navigation}) {
  function renderItemHelper(itemData) {
    function pressHandler() {
      navigation.navigate('MealsOverView', {
        categoryId: itemData.item.id,
      });
    }
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onpress={pressHandler}
      />
    );
  }
  return (
    <View style={styles.CategoryScreenRootContainer}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={item => item.id}
        renderItem={renderItemHelper}
        numColumns={2}
      />
    </View>
  );
}
export default CategoryScreen;
const styles = StyleSheet.create({
  CategoryScreenRootContainer: {
    flex: 1,
    // backgroundColor: 'white',
    // backgroundColor: '#24180f',
  },
});
