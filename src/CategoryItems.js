import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, Image, TouchableOpacity, StyleSheet } from 'react-native';
import ProductDetail from './ProductDetail';
const CategoryItems = ({ route, navigation }) => {
  const { categoryId, categoryName } = route.params;  // Get categoryId and categoryName from route params
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Dynamically set the screen header title based on the category name
    navigation.setOptions({
      title: categoryName,  // Set the header title to the category name
    });

    const fetchProducts = async () => {
      try {
        const response = await fetch(`http://localhost:5000/products?category=${categoryId}`);
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryId, categoryName, navigation]);

  const renderProduct = ({ item }) => (
    <TouchableOpacity style={styles.productCard}
    onPress={() => navigation.navigate('ProductDetails', { product: item })}>
      <Image 
        source={{ uri: item.image }} 
        style={styles.productImage} 
        onError={() => console.log("Image failed to load")} 
      />
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>${item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />
      ) : (
        <FlatList
          data={products}
          renderItem={renderProduct}
          keyExtractor={(item) => item._id}
          contentContainerStyle={styles.productList}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  loader: {
    marginTop: 50,
  },
  productList: {
    paddingBottom: 16,
  },
  productCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginBottom: 16,
    overflow: 'hidden',
    flexDirection: 'row',
    padding: 10,
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 16,
  },
  productInfo: {
    flex: 1,
    justifyContent: 'space-between',
  },
  productName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  productPrice: {
    fontSize: 14,
    fontWeight: '600',
    color: '#5ab8d4',
  },
});

export default CategoryItems;
