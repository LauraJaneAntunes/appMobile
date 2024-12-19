import React from "react";
import { StyleSheet, View, TouchableOpacity, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Logo from "../../../assets/logo.svg";

const Header = ({ testID }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.header} testID={testID}>
      <StatusBar backgroundColor="green" barStyle="light-content" />
      
      {/* Ícone de menu hambúrguer */}
      <TouchableOpacity onPress={() => navigation.openDrawer()} testID="hamburger-menu">
        <View style={styles.hamburgerMenu}>
          <View style={styles.line} />
          <View style={styles.line} />
          <View style={styles.line} />
        </View>
      </TouchableOpacity>

      {/* Logo do projeto */}
      <Logo style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: "green",
    width: "100%",
    elevation: 4, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  logo: {
    width: 40,
    height: 40, // Ajuste de tamanho do logo
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
