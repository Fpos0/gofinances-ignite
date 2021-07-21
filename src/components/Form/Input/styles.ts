import styled from 'styled-components/native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { TextInput } from 'react-native';
// import { Feather } from '@expo/vector-icons';
// import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled(TextInput)`
  width: 100%;
  padding: 16px 18px;
  background-color: ${({ theme }) => theme.colors.shape};
  color: ${({ theme }) => theme.colors.text_dark};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;

  border-radius: 5px;
  margin-bottom: 8px;

`;

// font-family: ${({ theme }) => theme.fonts.regular};
//   color: ${({ theme }) => theme.colors.shape};

//   font-size: ${RFValue(18)}px;
export const Header = styled.View`
  

`;

