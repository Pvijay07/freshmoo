import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const products = [
    { id: 1, name: 'Nike Shoes', price: 120, image: 'https://example.com/shoes.jpg' },
    { id: 2, name: 'Adidas T-shirt', price: 50, image: 'https://example.com/shirt.jpg' }
  ];

  return (
    <View>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Product', { product: item })}>
            <Text>{item.name} - ${item.price}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default HomeScreen;
