import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { render, fireEvent, waitFor } from '@testing-library/react-native'
import theme from '../../global/styles/theme';
import { Register } from '.';


const Providers: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: jest.fn(),
  };
});

describe('Register Screen', () => {
  it('should be open category modal when user clock on button', async () => {
    const { getByTestId } = render(
      <Register />,
      {
        wrapper: Providers
      }
    );

    const categoryModal = getByTestId('modal-category');
    const buttonCategory = getByTestId('button-category');
    fireEvent.press(buttonCategory);

    await waitFor(() => {
      expect(categoryModal.props.visible).toBeTruthy();
    })
  })
})