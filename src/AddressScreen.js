// AddressScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const AddressScreen = ({ route, navigation }) => {
  const { product } = route.params;  
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [address, setAddress] = useState('');
  const [savedAddresses, setSavedAddresses] = useState([]); 
  const [useAnotherAddress, setUseAnotherAddress] = useState(false); 

  const handleSaveAddress = () => {
    if (!name || !contact || !address) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }

    const newAddress = { name, contact, address };
    setSavedAddresses([...savedAddresses, newAddress]);
    setUseAnotherAddress(true);
    Alert.alert("Success", "Address saved successfully!");
  };

  const handleProceedToPayment = () => {
    if (savedAddresses.length === 0) {
      Alert.alert("Error", "Please add an address first.");
    } else {
      navigation.navigate("PaymentScreen", { product, address: savedAddresses[savedAddresses.length - 1] });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter your Delivery Address</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Contact"
        value={contact}
        onChangeText={setContact}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Address"
        value={address}
        onChangeText={setAddress}
      />
      <Button title="Save Address" onPress={handleSaveAddress} />
      
      {useAnotherAddress && (
        <View style={styles.switchContainer}>
          <Button
            title="Use another address"
            onPress={() => setUseAnotherAddress(false)}
          />
        </View>
      )}

      <Button
        title="Proceed to Payment"
        onPress={handleProceedToPayment}
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
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 16,
    borderRadius: 4,
  },
  switchContainer: {
    marginVertical: 10,
  },
});

export default AddressScreen;
