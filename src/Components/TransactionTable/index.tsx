import { useContext } from 'react';
import { TransactionsContext } from '../../TransactionContext';
import { Container } from './style';

export function Transaction(){
    const {transactions} = useContext(TransactionsContext);

    return (
        <Container>

            <table>
                <thead>
                    <th>Título</th>
                    <th>Valor</th>
                    <th>Categoria</th>
                    <th>Data</th>
                </thead>

                <tbody>
                    {transactions.map(transaction => (
                        <tr key={transaction.id}> 
                            <td>{transaction.title}</td>
                            <td className={transaction.type}>
                                {new Intl.NumberFormat('pt-BR',{
                                    style:'currency',
                                    currency:'BRL',
                                }).format(transaction.amount)}
                            </td>
                            <td>{transaction.category}</td>
                            <td>
                                {new Intl.DateTimeFormat('pr-BR').format(new Date(transaction.createdAt))}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    )
}