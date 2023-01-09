import { GlobalStyle } from './styles/global'
import { Header } from './components/Header'
import { DashBoard } from './components/DashBoard'

import { useState } from 'react'
import { NewTransactionModal } from './components/NewTransactionModal'
import { TransactionsContext } from './components/utils/TransactionsContext'




export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(
    false,
  )

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }


  return (
    <TransactionsContext.Provider value={[]}>
      <Header onOpenNewTransctionModal={handleOpenNewTransactionModal}/>
      <DashBoard />

      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal} ></NewTransactionModal>

      <GlobalStyle />
    </TransactionsContext.Provider>
  )
}
