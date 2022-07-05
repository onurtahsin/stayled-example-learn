import Button, { TomatoButton } from './components/Button.styled';
import Container from './components/Container.styled';
import HeaderText from './components/Header.styled';
import StyledLink from './components/Link.styled';

const App = () => {
  return (
    <>

    <Container bg='green'>
      <HeaderText>Styled Components</HeaderText>
      <Button primary>Click</Button>
      <Button>Click</Button>
      <TomatoButton primary>Click</TomatoButton>
      <TomatoButton>Click</TomatoButton>
      <HeaderText color='gold'>Styled Components</HeaderText>
      <StyledLink href='https://www.google.com/search?q=at+resimleri&sxsrf=ALiCzsa8uS6P8fjetNw76yS62a40ufhndg:1657043973409&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjL3KXrqeL4AhVyQ_EDHdhfAc8Q_AUoAXoECAEQAw' target="_blank">Horse Pictures Amazing</StyledLink>
      <StyledLink secondary href='https://www.google.com/search?q=at+resimleri&sxsrf=ALiCzsa8uS6P8fjetNw76yS62a40ufhndg:1657043973409&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjL3KXrqeL4AhVyQ_EDHdhfAc8Q_AUoAXoECAEQAw' target="_blank" >Horse Pictures Amazing</StyledLink>

    </Container>

    </>
  );
};

export default App;
//! primary yazmakla primary = {true} yazmak aynı şeydir false yazarsak yok hükmündedir 