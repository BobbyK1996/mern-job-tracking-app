import styled from 'styled-components';
import logo from '../assets/images/logo.svg';

const StyledLogo = styled.div`
  text-align: center;
  height: 100%;
  padding: 1rem;
`;

const Img = styled.img`
  height: 100%;
  width: auto;
`;

function Logo() {
  return (
    <StyledLogo>
      <Img src={logo} alt="logo" />
    </StyledLogo>
  );
}

export default Logo;
