import React,{useState} from 'react';
import Modal from 'react-modal';

import { TransactionsContext } from './TransactionContext';


import { GlobalStyle } from './styles/global';
import { TransactionProvider } from './TransactionContext';

import { Header } from './Components/Header';
import { DashBoard } from './Components/Dashborard';
import { TransactionModal } from './Components/NewTransactionModal';

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTrasactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal(){
    setIsNewTrasactionModalOpen(true);
  }

  function handleCloseNewTransactionModal(){
      setIsNewTrasactionModalOpen(false);
  }

  return (
    <TransactionProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <DashBoard/>
      <TransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal}/>
      <GlobalStyle/>
    </TransactionProvider>
  );
}

