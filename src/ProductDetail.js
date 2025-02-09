import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const ProductDetail = ({ route, navigation }) => {
  const { product } = route.params; // Get the product details from route params
  const [quantity, setQuantity] = useState(1); // Default quantity is 1

  const handleQuantityChange = (value) => {
    const parsedValue = parseInt(value, 10);
    if (parsedValue > 0) {
      setQuantity(parsedValue);
    }
  };

  const handleOrder = () => {
    console.log('Order placed for:', product.name, 'Quantity:', quantity);
    alert(`Order placed for ${product.name} x ${quantity}`);
    navigation.navigate('AddressScreen', { product });
    // navigation.goBack(); 
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.productImage} />
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productPrice}>${product.price}</Text>
      <Text style={styles.productDescription}>{product.description}</Text>

      <View style={styles.quantityContainer}>
        <Text>Quantity:</Text>
        <TextInput
          style={styles.quantityInput}
          keyboardType="numeric"
          value={String(quantity)}
          onChangeText={handleQuantityChange}
        />
      </View>

      <TouchableOpacity style={styles.orderButton} onPress={handleOrder}>
        <Text style={styles.orderButtonText}>Order</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  productImage: {
    width: '100%',
    height: 250,
    borderRadius: 8,
    marginBottom: 16,
    resizeMode: 'contain',
  },
  productName: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 20,
    fontWeight: '500',
    color: '#5ab8d4',
    marginBottom: 8,
  },
  productDescription: {
    fontSize: 16,
    color: '#333',
    marginBottom: 16,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  quantityInput: {
    width: 60,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    textAlign: 'center',
    marginLeft: 8,
    fontSize: 16,
  },
  orderButton: {
    backgroundColor: '#5ab8d4',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  orderButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default ProductDetail;
