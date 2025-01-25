import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import First from './first'; 
import About from './About';
import Login from './Auth';
import Category from './Category';
import CategoryItems from './CategoryItems';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

// Stack Navigator for the Category-related screens
function CategoryStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Categories" component={Category} />
      <Stack.Screen name="CategoryItems" component={CategoryItems} />
    </Stack.Navigator>
  );
}

function Appdrawer() {
  return (
    <Drawer.Navigator>
      {/* Direct components inside Drawer.Navigator */}
      <Drawer.Screen name="SmartShop" component={First} />
      {/* Pass the Stack Navigator as the component for this screen */}
      <Drawer.Screen name="Categories" component={CategoryStack} />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="Login/Signup" component={Login} />
    </Drawer.Navigator>
  );
}

export default Appdrawer;
