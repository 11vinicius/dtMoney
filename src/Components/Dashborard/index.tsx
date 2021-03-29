
import { Summary } from '../Summary';
import { Transaction } from '../TransactionTable';

import { Container } from './style';

export function DashBoard(){
    return (
        <Container>
            <Summary/>
            <Transaction/>
        </Container>
    )
}