import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../../components/header/header";

const HomeScreen = () => {
  return (
    <View style={styles.screen} testID="home-screen">
      <Header testID="header-home"/>
      <Text style={styles.content} testID="home-welcome-text">Bem-vindo à Home!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  content: {
    fontSize: 18,
    marginTop: 120,
  },
});

export default HomeScreen;
