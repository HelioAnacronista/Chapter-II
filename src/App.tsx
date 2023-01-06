import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { DashBoard } from "./components/DashBoard";

import { createServer } from "miragejs";

createServer({
  routes() {
      this.namespace = 'api';

      this.get('/transactions', ()  => {
        return [
          { 
            id: 1,
            title: 'Transction 1',
            amount: 400,
            type: 'deposit',
            category: 'Food',
            createdAt: new Date()
          }
        ]
      } )
  },
})

export function App() {
  return (
    <>
      <Header />
      <DashBoard />
      <GlobalStyle />
    </>
  );
}


