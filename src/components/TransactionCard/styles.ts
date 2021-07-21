import styled, { css } from 'styled-components/native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';

interface TransactionProps {
    type: 'positive' | 'negative';
}

export const Container = styled.View`

    background-color:${({ theme }) => theme.colors.shape};
    border-radius: 5px;
    padding: 17px 24px;
    margin-bottom: 16px;
`;

export const Header = styled.View``;
export const Title = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.regular};`;
export const Amount = styled.Text<TransactionProps>`
    font-size: ${RFValue(20)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme, type }) => type === 'positive' ? theme.colors.success : theme.colors.attention};
    margin-top: 2px;

`;
export const Icon = styled(Feather)`
    color: ${({ theme }) => theme.colors.text};
    font-size: ${RFValue(20)}px;

`;
export const CategoryName = styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.text};
    margin-left: 17px;
`;
export const Date = styled.Text`
    color: ${({ theme }) => theme.colors.text};
    font-size: ${RFValue(14)}px;

`;
export const Footer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding-right: 24px ;

    margin-top: 19px;
`;
export const Category = styled.View`
    flex-direction: row;
    align-items: center;
`;