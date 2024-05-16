import styled from 'styled-components';
import media from '../../breakpoints';

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

export default Wrapper;
