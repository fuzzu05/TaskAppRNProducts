import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './src/screens/Splash';
import PLP from './src/screens/PLP';
import PDP from './src/screens/PDP';

const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={ Splash } options={{ headerShown: false }} />
        <Stack.Screen name="PLP" component={ PLP } options={{ headerShown: false }} />
        <Stack.Screen name="PDP" component={ PDP } options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;