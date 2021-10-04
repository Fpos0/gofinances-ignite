import styled, { css } from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize';
import { TextInput } from 'react-native';



interface Props {
  active: boolean;
}

export const Container = styled(TextInput) <Props>`
  width: 100%;
  padding: 16px 18px;
  background-color: ${({ theme }) => theme.colors.shape};
  color: ${({ theme }) => theme.colors.text_dark};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;

  border-radius: 5px;
  margin-bottom: 8px;

  ${({ active, theme }) => active && css`
    border-width: 3px;
    border-color:${theme.colors.attention}
    `}
`;

// font-family: ${({ theme }) => theme.fonts.regular};
//   color: ${({ theme }) => theme.colors.shape};

//   font-size: ${RFValue(18)}px;

