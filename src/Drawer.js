import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import First from './first'; 
import About from './About';
import Login from './Auth';
import Category from './Category';
import CategoryItems from './CategoryItems';
import CategoryList from './CategoryList';
import ProductDetail from './ProductDetail'
import AddressScreen from './AddressScreen';
import PaymentScreen from './PaymentScreen';
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function CategoryStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Categories" component={Category} />
      <Stack.Screen name="CategoryItems" component={CategoryItems} />
      <Stack.Screen name='ProductDetails' component={ProductDetail} />
      <Stack.Screen name='AddressScreen' component={AddressScreen} />
      <Stack.Screen name='PaymentScreen' component={PaymentScreen} />
    </Stack.Navigator>
  );
}
function Appdrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="SmartShop" component={First} />
      <Drawer.Screen name="Categories" component={CategoryStack} />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="Login/Signup" component={Login} />
    </Drawer.Navigator>
  );
}

export default Appdrawer;
