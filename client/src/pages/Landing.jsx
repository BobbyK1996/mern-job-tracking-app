import main from '../assets/images/main.svg';

import Wrapper from '../assets/wrappers/LandingPage';
import { Button, Logo, Heading, Container, HomeNav } from '../components';

function Landing() {
  return (
    <Wrapper>
      <HomeNav>
        <Logo />
      </HomeNav>
      <Container>
        <div className="info">
          <Heading as="h1" weight="700" mmargin="1.5rem 3rem 2rem 1rem">
            Job <span>Tracking</span> App
          </Heading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            placeat alias deserunt odio fugit doloremque praesentium! Aliquid
            ratione in maxime amet sapiente repudiandae ea saepe? Iusto eaque
            culpa sapiente sunt!
          </p>
          <div className="btn-group">
            <Button to="/register" disabled={true} size="medium">
              Register
            </Button>
            <Button to="/login">Login/Demo User</Button>
          </div>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </Container>
    </Wrapper>
  );
}

export default Landing;
