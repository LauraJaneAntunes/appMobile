import React from "react";
import { render } from "@testing-library/react-native";
import HomeScreen from "../../screens/home/HomeScreen";
import Header from "../../components/header/header";

describe("HomeScreen", () => {
  it("renderiza o componente Header", () => {
    const { getByTestId } = render(<HomeScreen />);
    expect(getByTestId("header-home")).toBeTruthy();
  });

  it("exibe o texto de boas-vindas", () => {
    const { getByText } = render(<HomeScreen />);
    expect(getByText("Bem-vindo à Home!")).toBeTruthy();
  });

  it("tem um container principal", () => {
    const { getByTestId } = render(<HomeScreen />);
    expect(getByTestId("home-screen")).toBeTruthy();
  });
});
