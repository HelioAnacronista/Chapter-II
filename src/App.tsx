import { GlobalStyle } from './styles/global'
import { Header } from './components/Header'
import { DashBoard } from './components/DashBoard'

import { createServer } from 'miragejs'
import Modal from 'react-modal'
import { useState } from 'react'

createServer({
  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Transction 1',
          amount: 400,
          type: 'deposit',
          category: 'Food',
          createdAt: new Date(),
        },
      ]
    })
  },
})

Modal.setAppElement('#root');

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

      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      >
        <h1>Cadastrar </h1>
      </Modal>

      <GlobalStyle />
    </>
  )
}
