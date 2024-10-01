import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
// import {useNavigation} from '@react-native/native';
import {useNavigation} from '@react-navigation/native';
function MealItem({id, title, imageUrl, duration, complexity, affordability}) {
  // console.log('imageUrl', imageUrl);
  const Navigation = useNavigation();
  function pressHandler() {
    Navigation.navigate('MealDetailScreen', {
      mealId: id,
    });
  }
  return (
    <View style={styles.mealItem}>
      <Pressable android_ripple={{color: '#ccc'}} onPress={pressHandler}>
        <View style={styles.innerContaineR}>
          <View>
            <Image source={{uri: imageUrl}} style={styles.image} />
            <Text style={styles.mealItemText}>{title}</Text>
          </View>
          <View style={styles.durComAff}>
            <Text style={styles.text}>{duration}m</Text>
            <Text style={styles.text}>{complexity}</Text>
            <Text style={styles.text}>{affordability}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}
export default MealItem;
const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  mealItem: {
    // borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 8,
    // margin: 25,
    marginHorizontal: 25,
    marginVertical: 15,
    // padding: 4,
    overflow: 'hidden',
    justifyContent: 'center',
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    // borderWidth: 5,
  },
  durComAff: {
    flexDirection: 'row',
    justifyContent: 'center',
    // alignItems: 'center',
    padding: 5,
    // margin: 10,
    // backgroundColor: '#f5f5f5',
  },
  text: {
    // margin: 5,
    marginHorizontal: 8,
    fontWeight: '700',
    color: '#24180f',
  },
  mealItemText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    padding: 8,
    color: '#24180f',
  },
  innerContaineR: {
    borderRadius: 8,
    overflow: 'hidden',
  },
});
