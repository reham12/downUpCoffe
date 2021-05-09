import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NoConnected from '../Pages/NoConnected';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="NoConnected"
        options={{headerShown: false}}
        component={NoConnected}
      />
    </Stack.Navigator>
  );
}
