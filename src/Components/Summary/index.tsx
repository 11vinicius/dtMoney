import React,{ useContext } from 'react';
import { TransactionsContext } from '../../TransactionContext';
import IncomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';


import { Container } from './style';


export function Summary(){
    const data = useContext(TransactionsContext);
    console.log(data);
    return (
        <Container>

            <div>
                <header>
                    <p>Entradas</p>
                    <img src={IncomeImg} alt="Entradas"/>
                </header>
                <strong>R$1000,00</strong>
            </div>

            <div>
                <header>
                    <p>Saidas</p>
                    <img src={outcomeImg} alt="Saida"/>
                </header>
                <strong> -R$500,00</strong>
            </div>

            <div className="highlight-background">
                <header>
                    <p>total</p>
                    <img src={totalImg} alt="Total"/>
                </header>
                <strong>R$500,00</strong>
            </div>

        </Container>
    )
}