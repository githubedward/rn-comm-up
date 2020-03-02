import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StoreProvider } from "./store/provider";
import { ShopNavigator } from "./navigation";

export default function App() {
  return (
    <StoreProvider>
      <ShopNavigator />
    </StoreProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
