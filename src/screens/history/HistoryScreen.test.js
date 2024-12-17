import React from 'react';
import { render } from '@testing-library/react-native';
import { useColorScheme } from 'react-native';
import HistoryScreen from './historyScreen';

describe('HistoryScreen', () => {
  beforeEach(() => {
    // Reset the mock before each test
    useColorScheme.mockClear();
  });

  it('renderiza corretamente a tela com Header e lista de transações', () => {
    useColorScheme.mockReturnValue('light');
    const { getByTestId } = render(<HistoryScreen />);
    
    // Verifica se o Header está renderizado
    expect(getByTestId('header-component')).toBeTruthy();
    
    // Verifica se a lista foi renderizada
    const list = getByTestId('transaction-list');
    expect(list).toBeTruthy();
  });

  it('renderiza com tema escuro', () => {
    useColorScheme.mockReturnValue('dark');
    const { getByTestId } = render(<HistoryScreen />);
    
    // Verificações básicas para o tema escuro
    expect(getByTestId('header-component')).toBeTruthy();
    expect(getByTestId('transaction-list')).toBeTruthy();
  });

  it('renderiza exatamente 10 itens na lista de transações', () => {
    useColorScheme.mockReturnValue('light');
    const { getAllByTestId } = render(<HistoryScreen />);
    
    // Obtém todos os itens com base no testID dos itens individuais
    const transactionItems = getAllByTestId(/^transaction-item-/);
    expect(transactionItems.length).toBe(10);
  });

  it('verifica a renderização dos detalhes de um item', () => {
    useColorScheme.mockReturnValue('light');
    const { getByTestId } = render(<HistoryScreen />);

    // Testa se os dados de um item específico estão renderizados corretamente
    expect(getByTestId('transaction-benefit-1').props.children).toBe('Ingresso para o Cinelópolis');
    expect(getByTestId('transaction-points-1').props.children.join('')).toBe('-500 pts');
    expect(getByTestId('transaction-date-1').props.children).toBe('15/01/2024');
    expect(getByTestId('transaction-status-1').props.children).toBe('Finalizado');
  });

  it('verifica renderização de transações com pontos positivos e negativos', () => {
    useColorScheme.mockReturnValue('light');
    const { getByTestId } = render(<HistoryScreen />);

    // Testa um item com pontos positivos
    const positivePointsItem = getByTestId('transaction-points-3');
    expect(positivePointsItem.props.children.join('')).toBe('+300 pts');

    // Testa um item com pontos negativos
    const negativePointsItem = getByTestId('transaction-points-2');
    expect(negativePointsItem.props.children.join('')).toBe('-1000 pts');
  });

  it('verifica renderização de status pendente', () => {
    useColorScheme.mockReturnValue('light');
    const { getByTestId } = render(<HistoryScreen />);

    // Testa um item com status pendente
    const pendingStatusItem = getByTestId('transaction-status-5');
    expect(pendingStatusItem.props.children).toBe('Pendente');
  });
});