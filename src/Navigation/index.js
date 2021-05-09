import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NoConnected from '../Pages/NoConnected';
import Products from '../Pages/Products';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Stack.Navigator>
       <Stack.Screen
        name="NoConnected"
        options={{headerShown: false}}
        component={NoConnected}
      />
       <Stack.Screen
        name="Products"
        options={{headerShown: false}}
        component={Products}
      />
     
     
    </Stack.Navigator>
  );
}
