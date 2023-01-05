import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { DashBoard } from "./components/DashBoard";

export function App() {
  return (
    <>
      <Header />
      <DashBoard />
      <GlobalStyle />
    </>
  );
}


