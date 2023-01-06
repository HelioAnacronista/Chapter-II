import logoImg from '../../assets/logo.svg';
import { Container, Content } from './style';



interface HeaderProps {
  onOpenNewTransctionModal: () => void
}

export function Header({onOpenNewTransctionModal} : HeaderProps) {
 

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button onClick={onOpenNewTransctionModal} className="button">
          Nova transação
        </button>

        
      </Content>
    </Container>
  )
}
