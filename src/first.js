import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, FlatList, ActivityIndicator, ScrollView } from "react-native";
import { GestureHandlerRootView, PanGestureHandler } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native'; // useNavigation hook
import Category from "./Category";
const First = () => {
  const navigation = useNavigation();  // useNavigation hook to navigate
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://localhost:5000/categories'); // Replace with your API URL
        const data = await response.json();
        setCategories(data);
        setLoading(false); 
      } catch (error) {
        console.error('Error fetching categories:', error);
        setLoading(false);
      }
    };

    fetchCategories();
  }, []); 

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
    marginLeft: 13,
  };

  const buttonStyle = {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 13,
    padding: 6,
    backgroundColor: '#5ab8d4',
    borderRadius: 10,
  };

  const buttonTextStyle = {
    fontSize: 14,
    color: '#ffffff',
  };

  const categoryItemStyle = {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#a0e0e4',
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
    <TouchableOpacity
      style={categoryItemStyle}
      onPress={() => navigation.navigate('Categories', { screen: 'CategoryItems', params: { categoryId: item._id, categoryName: item.name } })} // Navigate to CategoryItems in CategoryStack
    >
      <Image source={{ uri: `data:image/png;base64,${item.image}` }} style={categoryImageStyle} />
      <Text style={categoryNameStyle}>{item.name}</Text>
    </TouchableOpacity>
  );
  

  // Only show first 6 categories
  const displayedCategories = categories.slice(0, 6);

  return (
    <GestureHandlerRootView>
      <ScrollView collapsable={false}>
        <PanGestureHandler>
          <Image 
            source={{ uri: 'https://m.media-amazon.com/images/I/51Id5Jjpm-L._SX1500_.jpg' }}
            style={{ width: 400, height: 200 }} 
          />
        </PanGestureHandler>

        
        <View style={{ flex: 1 }}>
          {loading ? (
            <ActivityIndicator size="large" color="#0000ff" style={{ marginTop: 50 }} />
          ) : (
            <FlatList
              data={displayedCategories}
              renderItem={renderCategory}
              keyExtractor={(item) => item._id} 
              numColumns={3}
              columnWrapperStyle={{ justifyContent: 'space-between' }}
              ListHeaderComponent={() => (
                <View style={headerStyle}>
                  <Text style={headerTextStyle}>Categories</Text>
                  <TouchableOpacity 
                    style={buttonStyle} 
                    onPress={() => navigation.navigate('Categories')} // Navigate to the full Category list screen
                  >
                    <Text style={buttonTextStyle}>See All</Text>
                  </TouchableOpacity>
                </View>
              )}
            />
          )}
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

export default First;
