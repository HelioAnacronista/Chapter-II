import React, { useContext } from 'react'
import { Container } from './style'

import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

import { TransactionsContext } from '../utils/TransactionsContext'

export function Summary() {

  const data = useContext(TransactionsContext)


  return (
   <Container>

    <div>
      <header>
        <p>Entradas</p>
        <img src={incomeImg} alt="" />
      </header>
      <strong>R$1000,00</strong>
    </div>

    <div>
      <header>
        <p>Saidas</p>
        <img src={outcomeImg} alt="" />
      </header>
      <strong>- R$500,00</strong>
    </div>

    <div className='heightlight-background'>
      <header>
        <p>Total</p>
        <img src={totalImg} alt="" />
      </header>
      <strong>R$500,00</strong>
    </div>

   </Container>
  )
}
