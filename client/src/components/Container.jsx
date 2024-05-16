import styled, { css } from 'styled-components';
import media from '../breakpoints';

const variations = {
  page: css`
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;

    ${media.md`
      grid-template-columns: 1fr 400px;
      column-gap: 3rem;
      /* background-color: yellow; */
    `}
  `,
};

const StyledContainer = styled.div`
  width: var(--fluid-width);
  max-width: var(--max-width);
  margin: 0 auto;

  ${(props) => variations[props.variation]}
`;

function Container({ children, variation = 'page' }) {
  return <StyledContainer variation={variation}>{children}</StyledContainer>;
}

export default Container;
