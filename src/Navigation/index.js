import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Introduction from '../Pages/Introduction';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Introduction"
        options={{headerShown: false}}
        component={Introduction}
      />
    </Stack.Navigator>
  );
}
