import React from 'react'
import { Container,Header,Icon,Title,Footer,Amount,LastTransaction } from './styles';

interface CardProps {
    type: 'up' | 'down' | 'total';
    title: string;
    amount: string;
    lastTransaction: string;

}
const icon = {
    up: 'arrow-up-circle',
    down: 'arrow-down-circle',
    total: 'dollar-sign'
}
export function HighlightCard({
    type,
    title,
    amount,
    lastTransaction
} : CardProps) {
    return (
        <Container type={type}>
            <Header>
                <Title type={type}>{title}</Title>
                <Icon name={icon[type]} type={type}  />
            </Header>

            <Footer>
                <Amount type={type}>
                    {amount}
                </Amount>
                <LastTransaction  type={type}>
                    {lastTransaction}
                </LastTransaction>
            </Footer>
        </Container>
    )
}