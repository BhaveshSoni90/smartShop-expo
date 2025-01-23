import React from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
const Category = () => {
  const categories = [
    { id: '1', name: 'Electronics', image: 'https://example.com/electronics.jpg' },
    { id: '2', name: 'Clothing', image: 'https://example.com/clothing.jpg' },
    { id: '3', name: 'Home Decor', image: 'https://example.com/homedecor.jpg' },
    { id: '4', name: 'Beauty', image: 'https://example.com/beauty.jpg' },
    { id: '5', name: 'Sports', image: 'https://example.com/sports.jpg' },
    { id: '6', name: 'Books', image: 'https://example.com/books.jpg' },
  ];

  const renderCategory = ({ item }) => (
    <View style={tailwind('flex-1 items-center bg-gray-200 rounded-lg p-4 m-2')}>
      <Image source={{ uri: item.image }} style={tailwind('w-20 h-20 rounded-lg')} />
      <Text style={tailwind('mt-2 text-sm font-medium')}>{item.name}</Text>
    </View>
  );

  return (
    <View style={tailwind('m-4')}>
      <View style={tailwind('flex-row justify-between items-center mb-4')}>
        <Text style={tailwind('text-lg font-bold')}>Categories</Text>
        <TouchableOpacity style={tailwind('flex-row items-center')}>
          <Text style={tailwind('text-sm text-blue-500')}>See All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={categories}
        renderItem={renderCategory}
        keyExtractor={(item) => item.id}
        numColumns={3}  // Display categories in 3 columns
        columnWrapperStyle={tailwind('justify-between')}  // Space out columns
      />
    </View>
  );
};

export default Category;
