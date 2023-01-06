import React, { FormEvent, useState } from "react";
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

  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');

  //every time it receives a submit it has the function
  function handleCreateNewTransaction(event : FormEvent) {
    event.preventDefault(); 

    console.log({title, value, category, type})
  }

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

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar </h2>

        <input placeholder="Titlo" 
        value={title}
        //change value digits all every times what tall user
        onChange={event => setTitle(event.target.value)}
        />

        <input type="number" placeholder="Valor"
        value={value}
        //change value digits all every times what tall user
        onChange={event => setValue(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox  
          type="button"
          onClick={ () => { setType('deposit')}}
          //Pass new Property
          isActiver={type === 'deposit'}
          activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox 
          type="button" 
          onClick={ () => { setType('withdraw')}}
          //Pass new Property
          isActiver={type === 'withdraw'}
          activeColor="red"
          >
            <img src={outcomeImg} alt="Saida" />
            <span>Saida</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input placeholder="Categoria"
        value={category}
        //change value digits all every times what tall user
        onChange={event => setCategory(event.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
