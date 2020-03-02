import React from "react";
import { FlatList, StyleSheet, Text } from "react-native";
import { useSelector } from "react-redux";

export const ProductOverviewScreen = ({}) => {
  const products = useSelector(state => state.products.availableProducts);

  return (
    <FlatList
      data={products}
      keyExtractor={item => item.id}
      renderItem={data => <Text>{data.item.title}</Text>}
    ></FlatList>
  );
};

ProductOverviewScreen.navigationOptions = {
  headerTitle: 'All Products'
}