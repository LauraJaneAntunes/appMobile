import React from "react";
import { render } from "@testing-library/react-native";
import AboutScreen from "./AboutScreen";
import { Linking } from 'react-native';

describe("AboutScreen", () => {
  it("renderiza o componente Header", () => {
    const { getByTestId } = render(<AboutScreen />);
    expect(getByTestId("header-about")).toBeTruthy();
  });

  it("exibe a seção 'Nossa Missão'", () => {
    const { getByTestId } = render(<AboutScreen />);
    const missionTitle = getByTestId("mission-title");
    const missionText = getByTestId("mission-text");

    expect(missionTitle.props.children).toBe("Nossa Missão");
    expect(missionText.props.children).toContain(
      "O EcoSrev é uma plataforma inovadora"
    );
  });

  it("exibe a seção 'Origem do Projeto' e o link da Fatec", () => {
    const { getByTestId } = render(<AboutScreen />);
    const originTitle = getByTestId("origin-title");
    const fatecLink = getByTestId("fatec-link");

    expect(originTitle.props.children).toBe("Origem do Projeto");
    expect(fatecLink).toBeTruthy();
  });

  it("renderiza as etapas de funcionamento corretamente", () => {
    const { getByTestId } = render(<AboutScreen />);
    
    for (let i = 1; i <= 3; i++) {
      expect(getByTestId(`step-${i}`)).toBeTruthy();
    }
  });

  it("exibe o rodapé corretamente", () => {
    const { getByTestId } = render(<AboutScreen />);
    const footerText = getByTestId("footer-text");

    expect(footerText.props.children).toContain(
      "© 2024 EcoSrev - Reciclagem Inteligente"
    );
  });

  it("abre o link da Fatec corretamente ao ser pressionado", () => {
    // Mock do Linking.openURL
    const mockOpenURL = jest.spyOn(Linking, 'openURL');
    mockOpenURL.mockImplementation(() => Promise.resolve());
  
    const { getByTestId } = render(<AboutScreen />);
    const fatecLink = getByTestId("fatec-link");
  
    // Simula o press no link
    fatecLink.props.onPress();
  
    // Verifica se Linking.openURL foi chamado com o URL correto
    expect(mockOpenURL).toHaveBeenCalledWith('https://fatecvotorantim.cps.sp.gov.br/');
  
    // Restaura a implementação original
    mockOpenURL.mockRestore();
  });
});
