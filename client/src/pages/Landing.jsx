import styled from 'styled-components';

import main from '../assets/images/main.svg';

import Button from '../components/Button';
import Logo from '../components/Logo';
import Heading from '../components/Heading';
import Container from '../components/Container';
import HomeNav from '../components/HomeNav';
import media from '../breakpoints';

const Wrapper = styled.section`
  span {
    color: var(--primary-500);
  }

  p {
    line-height: 2;
    color: var(--text-secondary-color);
    margin-bottom: 1.5rem;
    max-width: 35em;
  }

  .btn-group {
    display: flex;
    gap: 1rem;
  }

  .main-img {
    display: none;
  }

  ${media.md`
      .main-img {
        display:block;
      }
    `}
`;

function Landing() {
  return (
    <Wrapper>
      <HomeNav>
        <Logo />
      </HomeNav>
      <Container>
        <div className="info">
          <Heading as="h1" weight="700">
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
