import React, { useState } from "react";
import Modal from "react-modal";
import { Container, TransactionTypeContainer, RadioBox } from "./style";

import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";

import closeImg from "../../assets/close.svg";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

Modal.setAppElement("#root");

export function NewTransactionModal({isOpen,onRequestClose,}: NewTransactionModalProps) {
  //store which user onclick event
  const [type, setType] = useState("deposit");

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <Container>
        <h2>Cadastrar </h2>

        <input placeholder="Titlo" />

        <input type="number" placeholder="Valor" />

        <TransactionTypeContainer>
          <RadioBox 
          type="button"
          onClick={ () => { setType('deposit')}}
          //Pass new Property
          isActiver={type === 'deposit'}
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox 
          type="button" 
          onClick={ () => { setType('withdraw')}}
          //Pass new Property
          isActiver={type === 'withdraw'}
          >
            <img src={outcomeImg} alt="Saida" />
            <span>Saida</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input placeholder="Categoria" />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
