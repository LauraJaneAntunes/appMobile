import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../../components/header/header";

const AboutScreen = () => {
  return (
    <View style={styles.screen}>
      <Header />
      <Text style={styles.content}>Sobre o aplicativo!</Text>
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

export default AboutScreen;
