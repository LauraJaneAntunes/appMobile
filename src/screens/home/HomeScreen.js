import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../../components/header/header";
import BottomNavigation from "../../components/bottom-navigation/BottomNavigation";

const HomeScreen = ({ navigation }) => {
  const handleTabPress = (tabName) => {
    switch (tabName) {
      case "inicio":
        navigation.navigate("HomeScreen");
        break;
      case "troca":
        console.log("Navegar para Troca");
        break;
      case "historico":
        navigation.navigate("HistoryScreen");
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.screen} testID="home-screen">
      <Header testID="header-home" />
      <View style={styles.contentContainer}>
        <Text style={styles.content} testID="home-welcome-text">
          Bem-vindo à Home!
        </Text>
      </View>
      <BottomNavigation onTabPress={handleTabPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    fontSize: 18,
  },
});

export default HomeScreen;
