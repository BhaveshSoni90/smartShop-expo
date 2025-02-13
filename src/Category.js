import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, FlatList, ActivityIndicator } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { selectApiBaseUrl } from "../redux/apiSlice";
import { useSelector } from "react-redux";
const Category = () => {
  const navigation = useNavigation();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
 const apiBaseUrl = useSelector(selectApiBaseUrl);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${apiBaseUrl}/categories`);
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
      onPress={() => navigation.navigate('CategoryItems', { 
        categoryId: item._id,
        categoryName: item.name 
      })}
    >
      <Image source={{ uri: `data:image/png;base64,${item.image}` }} style={categoryImageStyle} />
      <Text style={categoryNameStyle}>{item.name}</Text>
    </TouchableOpacity>
  );

   return (
    <View style={{ flex: 1 }}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" style={{ marginTop: 50 }} />
      ) : (
        <FlatList
          data={categories}
          renderItem={renderCategory}
          keyExtractor={(item) => item._id}
          numColumns={3}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          ListHeaderComponent={() => (
            <View style={headerStyle}>
             </View>
          )}
        />
      )}
    </View>
  );
};

export default Category;
