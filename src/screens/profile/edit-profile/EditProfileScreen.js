import React from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import Header from "../../../components/header/header";

const EditProfileScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <Header testID="header-edit-profile" />
      <View style={styles.container}>
        <Text style={styles.title}>Editar Perfil</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#22C55E",
  },
});

export default EditProfileScreen;
