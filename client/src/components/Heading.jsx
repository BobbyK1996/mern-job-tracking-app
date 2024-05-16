import styled, { css } from 'styled-components';

const margins = ['mtop', 'mright', 'mleft', 'mbottom'];

const Heading = styled.h1`
  margin: 0;
  font-weight: 400;
  line-height: 1;
  text-transform: capitalize;
  letter-spacing: var(--letter-spacing);
  font-weight: ${(props) => props.weight || 0};
  ${(props) =>
    margins
      .map((margin) => {
        return props[margin] && `margin-${margin.slice(1)}: ${props[margin]};`;
      })
      .join(' ')};

  ${(props) => {
    let fontSize;
    switch (props.as) {
      case 'h1':
        fontSize = 'clamp(2rem, 5vw, 5rem)';
        break;
      case 'h2':
        fontSize = 'clamp(1.5rem, 3vw, 3rem)';
        break;
      case 'h3':
        fontSize = 'clamp(1.25rem, 2.5vw, 2.5rem)';
        break;
      case 'h4':
        fontSize = 'clamp(1rem, 2vw, 2rem)';
        break;
      case 'h5':
        fontSize = 'clamp(0.875rem, 1.5vw, 1.5rem)';
        break;
      default:
        fontSize = 'clamp(2rem, 5vw, 5rem)';
        break;
    }
    return css`
      font-size: ${fontSize};
    `;
  }};
`;

export default Heading;
