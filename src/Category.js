import React from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';

const Category = () => {
  const categories = [
    { id: '1', name: 'Electronics', image: 'https://imgs.search.brave.com/1ArsdsmmR4yPoFaI9ndqw88t5k6XYQ01EClnyH71iEA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9l/bGVjdHJvbmljLWRl/dmljZXMtbGlzdGVu/LW11c2ljLWN1cC1j/b2ZmZWVfMTE1MC02/Njg5LmpwZz9zZW10/PWFpc19oeWJyaWQ' },
    { id: '2', name: 'Clothing', image: 'https://imgs.search.brave.com/9TFtewipgpVMndj6pnzuI3RlQWzR2ANGOjI5P46Ht6g/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbmZv/LnBpeGVsbWFuaXlh/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyNC8wNS9yZW1v/dmUtY2xvdGhlcy0x/OC5qcGc' },
    { id: '3', name: 'Home Decor', image: 'https://imgs.search.brave.com/fQfKKFV3PbkRCNP6-_w4X8Z1SjDjb2XdMY4SWm-uOW8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy9mdXJu/aXR1cmUtb24tZmxl/YS1tYXJrZXQtZ2Vy/bWFueS1yb3lhbHR5/LWZyZWUtaW1hZ2Ut/MTcwMTExNzAyOS5q/cGc_Y3JvcD0wLjYx/OXh3OjAuOTI5eGg7/MCwwLjA2MTF4aCZy/ZXNpemU9MzYwOio' },
    { id: '4', name: 'Beauty', image: 'https://imgs.search.brave.com/qZPMVv8NIL2J3rfjmvQrsONmAAP2zCfV0MnakQEchaY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5hbGx1cmUuY29t/L3Bob3Rvcy82NzIy/OWI5ZTU3ZmJhYjBi/NTY3MmEwYTIvMTox/L3dfNzA1LGhfNzA1/LGNfbGltaXQvdW5k/ZWZpbmVk.jpeg' },
    { id: '5', name: 'Sports', image: 'https://imgs.search.brave.com/dtRdSXuipx33eNXTGXFZfobmKFnueNlBdHQ47zmQHiA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA5LzY0LzA1Lzk2/LzM2MF9GXzk2NDA1/OTYxOF8xSnEyOUZ4/WmQ3SVFnc2ZRS1Qz/UWU1NjJpNVVrYWp3/MS5qcGc' },
    { id: '6', name: 'Books', image: 'https://example.com/books.jpg' },
  ];

  const headerStyle = {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    marginTop: 20,
  };

  const headerTextStyle = {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft:13,
  };

  const buttonStyle = {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 13,
    padding:6,
    backgroundColor:'#5ab8d4',
    borderRadius: 10,
  };

  const buttonTextStyle = {
    fontSize: 14,
    color: '#ffffff', // Blue color (like Tailwind's text-blue-500)
  };

  const categoryItemStyle = {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#a0e0e4', // Light gray (like Tailwind's bg-gray-200)
    borderRadius: 8,
    padding: 16,
    margin: 8,
  };

  const categoryImageStyle = {
    width: 80,
    height: 80,
    borderRadius: 8,
  };

  const categoryNameStyle = {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '500',
  };

  const renderCategory = ({ item }) => (
    <View style={categoryItemStyle}>
      <Image source={{ uri: item.image }} style={categoryImageStyle} />
      <Text style={categoryNameStyle}>{item.name}</Text>
    </View>
  );

  return (
    
      <FlatList
        data={categories}
        renderItem={renderCategory}
        keyExtractor={(item) => item.id}
        numColumns={3}  // Display categories in 3 columns
        columnWrapperStyle={{ justifyContent: 'space-between' }}  // Space out columns
        ListHeaderComponent={() => (
          <View style={headerStyle}>
            <Text style={headerTextStyle}>Categories</Text>
            <TouchableOpacity style={buttonStyle}>
              <Text style={buttonTextStyle}>See All</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    );
};

export default Category;
