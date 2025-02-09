// PaymentScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import First from './first';
const PaymentScreen = ({ route, navigation }) => {
  const { product, address } = route.params;

  const handlePaymentMethod = (method) => {
    alert(`Payment method chosen: ${method}`);
    navigation.navigate('SmartShop', { First });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment Options</Text>
      <Text style={styles.subtitle}>Product: {product.name}</Text>
      <Text style={styles.subtitle}>Delivery Address: {address.address}</Text>

      <Button
        title="Cash on Delivery"
        onPress={() => handlePaymentMethod("Cash on Delivery")}
      />
      <Button
        title="Online Payment"
        onPress={() => handlePaymentMethod("Online Payment")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default PaymentScreen;
