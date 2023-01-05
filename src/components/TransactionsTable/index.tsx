import React from 'react'
import { Container } from './styled'

export function TransactionsTable() {
  return (
    <Container>
      <table>

        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>dev de web site</td>
            <td className='deposit'>R$12000.00</td>
            <td>Web</td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td>Alguel</td>
            <td className='withdraw'>- R$1000.00</td>
            <td>Casa</td>
            <td>17/02/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}