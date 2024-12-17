import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Header from "../../components/header/header"; 
import { useNavigation } from '@react-navigation/native';

describe("Header", () => {
  it("deve renderizar o Header corretamente", () => {
    const { getByTestId, getByText } = render(
      <Header testID="header" />
    );

    // Verifica se o Header foi renderizado corretamente com o testID
    expect(getByTestId("header")).toBeTruthy();
    // Verifica se o título 'Meu App' está na tela
    expect(getByText("Meu App")).toBeTruthy();
  });

  it("deve chamar 'navigation.openDrawer' quando o ícone de menu for pressionado", () => {
    const { getByTestId } = render(<Header testID="header" />);

    // Simula o clique no ícone de menu
    fireEvent.press(getByTestId("hamburger-menu"));

    // Verifica se a função openDrawer do navigation foi chamada
    expect(useNavigation().openDrawer).toHaveBeenCalled();
  });
});

