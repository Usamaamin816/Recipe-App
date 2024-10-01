import {View, Text, Pressable, StyleSheet} from 'react-native';
function CategoryGridTile({title, color, onpress}) {
  return (
    <View style={[styles.gridItem, {backgroundColor: color}]}>
      <Pressable
        on
        android_ripple={{color: '#ccc'}}
        style={({pressed}) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onpress}>
        <View style={styles.gridInputContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}
export default CategoryGridTile;
const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    overflow: 'hidden',
  },
  button: {
    flex: 1,
  },
  gridInputContainer: {
    flex: 1,
    // textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  buttonPressed: {
    opacity: 0.25,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#1a1a1a', // Darker shade of black
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)', // Adds a subtle shadow
    // fontFamily:''
  },
});
