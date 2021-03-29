import { useEffect, useState } from 'react';
import { api } from '../../services/api';

import { Container } from './style';


interface Transaction{
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}


export function Transaction(){
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    
    useEffect(()=>{
       api.get('/transactions')
       .then(response=>setTransactions(response.data.transactions));
    },[]);


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