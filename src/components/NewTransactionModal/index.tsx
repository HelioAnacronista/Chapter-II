import React from 'react'
import Modal from 'react-modal'
import { Container } from './style'

interface NewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

Modal.setAppElement('#root')

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  return (
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onRequestClose} 
      overlayClassName="react-modal-overlay"
      className='react-modal-content'
      >

      <Container>
        <h2>Cadastrar </h2>

        <input 
        placeholder="Titlo" 
        />

        <input 
        type="number"  
        placeholder="Valor" 
        />

        <input 
        placeholder='Categoria'
        />

        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  )
}
