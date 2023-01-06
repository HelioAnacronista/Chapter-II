import { GlobalStyle } from './styles/global'
import { Header } from './components/Header'
import { DashBoard } from './components/DashBoard'

import { useState } from 'react'
import { NewTransactionModal } from './components/NewTransactionModal'




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
    <>
      <Header onOpenNewTransctionModal={handleOpenNewTransactionModal}/>
      <DashBoard />

      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal} ></NewTransactionModal>

      <GlobalStyle />
    </>
  )
}
