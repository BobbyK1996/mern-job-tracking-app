import styled from 'styled-components';

const StyledHomeNav = styled.nav`
  width: var(--fluid-width);
  max-width: var(--max-width);
  margin: 0 auto;
  height: var(--nav-height);
  display: flex;
  align-items: center;
`;

function HomeNav({ children }) {
  return <StyledHomeNav>{children}</StyledHomeNav>;
}

export default HomeNav;
