// import { StackView } from '@react-navigation/stack';
// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// import HomeScreen from "./screens/Home";
// import DailyPicScreen from "./screens/DailyPic";
// import SpaceCraftsScreen from "./screens/SpaceCrafts";
// import StarMapScreen from "./screens/StarMap";
// import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';

// const Stack = createStackNavigator();
// export default function App() {
//   return (
//     <NavigationContainer>
//       <StackView.Navigator intialRoutename="Home" screenOptions={{
//         headerShown: false
//       }}>
//         <StackView.Screen name="Home" component={HomeScreen} />
//         <StackView.Screen name="SpaceCrafts" component={SpaceCraftsScreen} />
//         <StackView.Screen name="DailyPic" component={DailyPicScreen} />
//         <StackView.Screen name="StarMap" component={StarMapScreen} />
//       </StackView.Navigator>
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./screens/Home";
import StartMapScreen from "./screens/StarMap";
import DailyPicScreen from "./screens/DailyPic";
import SpaceCraftScreen from "./screens/SpaceCraft";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="StarMap" component={StartMapScreen} />
        <Stack.Screen name="DailyPic" component={DailyPicScreen} />
        <Stack.Screen name="SpaceCraft" component={SpaceCraftScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
