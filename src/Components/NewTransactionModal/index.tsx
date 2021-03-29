import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import { api } from '../../services/api';

import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';


import { Container, TransactionTypeContainer, RadioBox } from './style';

interface NewTramnsactionModalProps{
    isOpen: boolean;
    onRequestClose:()=>void;
}

export function TransactionModal({isOpen,onRequestClose}: NewTramnsactionModalProps){
    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);
    const [category, setCategory] = useState('');

    const [type, setType] = useState('deposit');
    


    function handleCreateTransaction(event:FormEvent){
        event.preventDefault();
        const data = {
          title, value, category, type
        };

        api.post('/transactions',data);
    }

    return (
        <Modal 
            isOpen={isOpen} 
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button type="button" onClick={onRequestClose}
             className="react-modal-close"
            >
                <img src={closeImg} alt="fechar"/>
            </button>
            <Container onSubmit={handleCreateTransaction}>
                <h2>Cadastrar trasação</h2>

                <input 
                    placeholder="Titulo"
                    value={title}
                    onChange={event=>setTitle(event.target.value)}
                />

                <input 
                    type="number"
                    placeholder="Valor"
                    value={value}
                    onChange={event=>setValue(Number(event.target.value))}
                />

                <TransactionTypeContainer>

                    <RadioBox
                        type="button"
                        onClick = {()=>{setType('deposit')}}
                        isActive = {type === 'deposit'}
                        activeColor = "green"
                    >
                        <img src={income} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox 
                        type="button"
                        onClick = {()=>{setType('withdraw')}}
                        isActive = {type === 'withdrow'}
                        activeColor = "red"

                    >
                        <img src={outcome} alt="Saida" />
                        <span>Saida</span>

                    </RadioBox>

                </TransactionTypeContainer>

                <input 
                    type="text"
                    placeholder="Categoria"
                    value={category}
                    onChange={event=>setCategory(event.target.value)}
                />

                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    )
}