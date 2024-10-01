/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {StyleSheet} from 'react-native';

import CategoryScreen from './screens/CategoryScreen';
import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
import MealsOverView from './screens/MealsOverview';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MealDetailScreen from './screens/MealDetailScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#353401',
            },
            headerTintColor: 'white',
            contentStyle: {backgroundColor: '#3f2f25'},
          }}>
          <Stack.Screen
            name="CategoryScreen"
            component={CategoryScreen}
            options={{
              title: 'All Category',
            }}
          />
          <Stack.Screen name="MealsOverView" component={MealsOverView} />
          <Stack.Screen name="MealDetailScreen" component={MealDetailScreen} />
          {/* return <CategoryScreen />; */}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
  // <CategoryScreen />;
}

const styles = StyleSheet.create({});

export default App;
