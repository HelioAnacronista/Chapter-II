import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

import { api } from '../services/api';

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

//Fala o formato do contexto
interface TransactionContextData {
   transactions: Transaction[];
   createTransaction: (transactions: TransactionInput) => Promise<void>;
}

const TransactionsContext = createContext<TransactionContextData>({} as TransactionContextData);


export function TransactionsProvider({children}: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    //response.data.transactions... para pegar os dados dentro do obj transactions
    api
      .get("/transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  //add uma nova task na lista do context
  async function createTransaction(transactionInput: TransactionInput) {
   const response = await api.post("/transactions", {
      ...transactionInput,
      createdAt: new Date()
   });
   const {transaction} = response.data;

   setTransactions([
      //mutuabildiade do react 
      //Copia os dados que ja tem 
      ...transactions,
      //add um novo
      transaction
   ])
  }

  return (
   <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
   </TransactionsContext.Provider>
  )
}


export function useTransactions() {
   const context = useContext(TransactionsContext)

   return context;
}