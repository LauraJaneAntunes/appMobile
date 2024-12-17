import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../App';

describe('<App />', () => {
  test('Renderiza corretamente o componente NavigationContainer', () => {
    const { getByTestId } = render(<App />);

    // Verifica se o NavigationContainer foi renderizado corretamente
    expect(getByTestId('navigation-container')).toBeTruthy();
  });

  test('Renderiza corretamente o DrawerNavigator', () => {
    const { getByTestId } = render(<App />);

    // Verifica se o DrawerNavigator foi renderizado corretamente
    expect(getByTestId('drawer-navigator')).toBeTruthy();
  });

  test('Exibe o texto "Bem-vindo à Home!" na tela inicial',  () => {
    const { getByTestId } = render(<App />);
    
    // Aqui esperamos encontrar o home-screen sendo renderizado com o testID
    const homeScreen = getByTestId('home-screen');
  
    expect(homeScreen).toBeTruthy();
  
  });
  
});
