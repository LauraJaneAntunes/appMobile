import React from "react";
import { render } from "@testing-library/react-native";
import EditProfileScreen from "../edit-profile/EditProfileScreen";

describe("EditProfileScreen", () => {
  it("deve renderizar o Header corretamente", () => {
    const { getByTestId } = render(<EditProfileScreen />);
    
    // Verifica se o componente Header foi renderizado com o testID "header-edit-profile"
    expect(getByTestId("header-edit-profile")).toBeTruthy();
  });

  it("deve exibir o título 'Editar Perfil'", () => {
    const { getByText } = render(<EditProfileScreen />);
    
    // Verifica se o título 'Editar Perfil' é exibido
    expect(getByText("Editar Perfil")).toBeTruthy();
  });
});
