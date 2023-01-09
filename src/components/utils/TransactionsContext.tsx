import { Children, createContext, useEffect, useState, ReactNode } from "react";
import { api } from "../../services/api";

interface Transaction {
   id: number;
   title: string;
   amount: number;
   type: string;
   category: string;
   createdAt: string;
 }

interface TransactionsProviderProps {
   children: ReactNode
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;


interface TransactionContextData {
   transactions: Transaction[];
   createTransaction: (transactions: TransactionInput) => void;
}

export const TransactionsContext = createContext<TransactionContextData>({} as TransactionContextData);

export function TransactionsProvider({children}: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    //response.data.transactions... para pegar os dados dentro do obj transactions
    api
      .get("/transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  //add uma nova task na lista do context
  function createTransaction(transaction: TransactionInput) {
   api.post("/transactions", transaction);
  }

  return (
   <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
   </TransactionsContext.Provider>
  )
}
