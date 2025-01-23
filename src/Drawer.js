import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import First from './first'; 
import About from './About';
import Login from './Auth';
const Drawer = createDrawerNavigator();

function Appdrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="SmartShop" component={First} />
      <Drawer.Screen name='About' component={About}/>
      <Drawer.Screen name='Login/Signup' component={Login}/>
    </Drawer.Navigator>
  );
}

export default Appdrawer;
