import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import {CATEGORIES} from '../data/dummy-data';

import {MEALS} from '../data/dummy-data';
import {useLayoutEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {hasteMapCacheDirectory} from '../metro.config';
// import {ScrollView} from 'react-native-gesture-handler';
function MealDetailScreen({route, navigation}) {
  const mealId = route.params.mealId;
  const mealDetail = MEALS.find(meal => meal.id === mealId);
  console.log('mealDetail', mealDetail);
  useLayoutEffect(() => {
    navigation.setOptions({
      title: mealDetail.title,
      headerRight: () => {
        return <Icon name="minus" size={30} color="#900" />;
      },
    });
  }, [mealDetail, MealDetailScreen]);
  return (
    <ScrollView>
      <View style={{flex: 1}}>
        <Image source={{uri: mealDetail.imageUrl}} style={styles.image} />
        <View style={styles.innerContainer}>
          <Text
            style={{
              fontSize: 25,
              color: 'white',
              fontWeight: 'bold',
            }}>
            {mealDetail.title}
          </Text>
          <View style={styles.overView}>
            <Text style={styles.text}>{mealDetail.duration}</Text>
            <Text style={styles.text}>{mealDetail.complexity}</Text>
            <Text style={styles.text}>{mealDetail.affordability}</Text>
          </View>
          <View style={styles.ingredientsContainer}>
            <Text
              style={{
                fontSize: 25,
                color: 'white',
                fontWeight: 'bold',
                textAlign: 'center',
                borderBottomWidth: 2,
                borderBottomColor: '#e2b497',
              }}>
              Ingredients
            </Text>
            <View style={styles.subtitleText}>
              {mealDetail.ingredients.map(item => (
                <Text key={item} style={styles.ingredientsText}>
                  {item}
                </Text>
              ))}
            </View>
          </View>
          <View style={styles.ingredientsContainer}>
            <Text
              style={{
                fontSize: 25,
                color: 'white',
                fontWeight: 'bold',
                textAlign: 'center',
                borderBottomWidth: 2,
                borderBottomColor: '#e2b497',
              }}>
              Steps
            </Text>
            {mealDetail.steps.map(item => (
              <Text key={item} style={styles.ingredientsText}>
                {item}
              </Text>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
export default MealDetailScreen;
const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  innerContainer: {
    flex: 1,
    // justifyContent: 'center',
    // alignContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
    // borderColor: 'yellow',
    // paddingHorizontal: 6,
    // marginHorizontal: 10,
  },
  overView: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 5,
  },
  text: {
    // margin: 5,
    marginHorizontal: 8,
    // fontWeight: '700',
    color: 'white',
  },
  ingredientsText: {
    textAlign: 'center',
    color: '#351401',
    marginVertical: 7,

    backgroundColor: '#e2b497',
    padding: 8,
    borderRadius: 6,
    fontSize: 16,
    fontWeight: '600',

    // width: '80',
  },
  ingredientsContainer: {
    flex: 1,
    width: '80%',
    marginVertical: 10,
    // borderWidth: 1,

    // padding: 10,
  },
  // subtitleText: {
  //   paddingVertical: 4,
  //   paddingHorizontal: 8,
  //   marginHorizontal: 12,
  //   borderRadius: 6,
  // },
});
