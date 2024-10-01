import {Text, View, FlatList} from 'react-native';
import {MEALS} from '../data/dummy-data';
// import {FlatList} from 'react-native-gesture-handler';
import MealItem from '../components/MealItem';
import {useLayoutEffect} from 'react';
import {CATEGORIES} from '../data/dummy-data';

function MealsOverView({route, navigation}) {
  const catId = route.params.categoryId;
  const filteredMeals = MEALS.filter(meal => {
    return meal.categoryIds.indexOf(catId) >= 0;
  });
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(cat => cat.id === catId).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);
  function RenderMealItem(itemData) {
    const item = itemData.item;
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };

    // console.log('mealItemProps',mealItemProps)
    return <MealItem {...mealItemProps} />;
  }
  return (
    <View>
      <FlatList
        data={filteredMeals}
        keyExtractor={item => item.id}
        // renderItem={({item}) => <Text>{item.title}</Text>}
        renderItem={RenderMealItem}
      />
    </View>
  );
}
export default MealsOverView;
