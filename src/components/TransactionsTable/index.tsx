import React, { useEffect, useState } from "react";
import { Container } from "./styled";
import { api } from "../../services/api";

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

export function TransactionsTable() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    //response.data.transactions... para pegar os dados dentro do obj transactions
    api.get("/transactions").then((response) => setTransactions(response.data.transactions));
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
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>R${transaction.amount}</td>
              <td>{transaction.category}</td>
              <td>{transaction.createdAt}</td>
          </tr>
          ))}
          
        </tbody>
      </table>
    </Container>
  );
}
