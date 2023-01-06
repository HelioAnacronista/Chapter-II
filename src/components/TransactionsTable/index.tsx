import React, { useEffect } from 'react'
import { Container } from './styled'
import { api } from '../../services/api';

export function TransactionsTable() {

  useEffect(() => {
    api.get('/transactions')
    .then(response => console.log(response.data))
  }, []);

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
