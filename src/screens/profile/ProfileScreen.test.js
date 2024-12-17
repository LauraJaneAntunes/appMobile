import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import ProfileScreen from "../../screens/profile/ProfileScreen";
import { useNavigation } from '@react-navigation/native';

describe("ProfileScreen", () => {
  it("renderiza o componente Header", () => {
    const { getByTestId } = render(<ProfileScreen />);
    expect(getByTestId("header-profile")).toBeTruthy();
  });

  it("exibe as informações do usuário", () => {
    const { getByTestId } = render(<ProfileScreen />);
    expect(getByTestId("profile-name").props.children).toBe("Usuário");
    expect(getByTestId("profile-email").props.children).toBe("usuario@email.com");
  });

  it("abre e fecha o modal de QR Code", () => {
    const { getByTestId, queryByTestId } = render(<ProfileScreen />);
    
    // Abrir Modal
    fireEvent.press(getByTestId("qr-code-button"));
    expect(getByTestId("qr-code-modal")).toBeTruthy();

    // Fechar Modal
    fireEvent.press(getByTestId("close-modal-button"));
    expect(queryByTestId("qr-code-modal")).toBeNull();
  });

  it("navega para a tela de Editar Perfil", () => {
    const mockNavigate = jest.fn();
    useNavigation.mockReturnValue({ navigate: mockNavigate });
    
    const { getByTestId } = render(<ProfileScreen />);
    
    fireEvent.press(getByTestId("edit-profile-button"));
    expect(mockNavigate).toHaveBeenCalledWith("EditProfileScreen");
  });

});
