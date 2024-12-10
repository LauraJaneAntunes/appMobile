import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.header}>
      {/* Ícone de menu hambúrguer */}
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <View style={styles.hamburgerMenu}>
          <View style={styles.line} />
          <View style={styles.line} />
          <View style={styles.line} />
        </View>
      </TouchableOpacity>
      <Text style={styles.title}>Meu App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    height: 100,
    backgroundColor: "green",
    width: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  hamburgerMenu: {
    flexDirection: "column",
    justifyContent: "space-between",
    width: 30,
    height: 20,
  },
  line: {
    width: "100%",
    height: 3,
    backgroundColor: "#fff",
    borderRadius: 2,
  },
});

export default Header;
