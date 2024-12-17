import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/home/HomeScreen";
import AboutScreen from "../screens/about/AboutScreen";
import ProfileScreen from "../screens/profile/ProfileScreen";
import EditProfileScreen from "../screens/profile/edit-profile/EditProfileScreen";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ testID: "home-screen" }} 
      />
      <Drawer.Screen 
        name="Perfil" 
        component={ProfileScreen} 
        options={{ testID: "profile-screen" }} 
      />
      <Drawer.Screen 
        name="Editar Perfil" 
        component={EditProfileScreen} 
        options={{ testID: "edit-profile-screen" }} 
      />
      <Drawer.Screen 
        name="Sobre" 
        component={AboutScreen} 
        options={{ testID: "about-screen" }} 
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
