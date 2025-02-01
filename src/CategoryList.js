import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, FlatList, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectApiBaseUrl } from "../redux/apiSlice"; // Import the API base URL from Redux
import CategoryItems from "./CategoryItems";
// CategoryList component to display the categories
const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  // Get the API base URL from Redux
  const apiBaseUrl = useSelector(selectApiBaseUrl);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${apiBaseUrl}/categories`);
        const data = await response.json();
        setCategories(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setLoading(false);
      }
    };

    fetchCategories();
  }, [apiBaseUrl]);

  const categoryItemStyle = {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#a0e0e4",
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
    fontWeight: "500",
  };

  const renderCategory = ({ item }) => (
    <TouchableOpacity
      style={categoryItemStyle}
      onPress={() =>
        navigation.navigate(`${CategoryItems}`, {
          categoryId: item._id, // Pass the category ID to CategoryItems
          categoryName: item.name, // Pass the category name to CategoryItems
        })
      }
    >
      <Image source={{ uri: `data:image/png;base64,${item.image}` }} style={categoryImageStyle} />
      <Text style={categoryNameStyle}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, padding: 16 }}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" style={{ marginTop: 50 }} />
      ) : (
        <FlatList
          data={categories}
          renderItem={renderCategory}
          keyExtractor={(item) => item._id}
          numColumns={3}
          columnWrapperStyle={{ justifyContent: "space-between" }}
        />
      )}
    </View>
  );
};

export default CategoryList;
