import React from 'react'
import Modal from 'react-modal'

interface NewTransactionModalProps {
   isOpen: boolean;
   onRequestClose: () => void;
}

Modal.setAppElement('#root');

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <h1>Cadastrar </h1>
    </Modal>
  )
}
