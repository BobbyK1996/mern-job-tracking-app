import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const sizes = {
  small: css`
    padding: 0.375rem 0.75rem;
    font-size: 100%;
    font-weight: 600;
  `,
  medium: css`
    padding: 0.75rem 1rem;
    font-size: 100%;
    font-weight: 500;
  `,
  large: css`
    padding: 1.975rem 2.25rem;
    font-size: 130%;
    font-weight: 500;
  `,
};

const variations = {
  primary: css``,
  secondary: css``,
  tertiary: css``,
  danger: css``,
};

const buttonStyles = css`
  cursor: pointer;
  color: var(--white);
  background: var(--primary-500);
  border: transparent;
  border-radius: var(--border-radius);
  letter-spacing: var(--letter-spacing);
  box-shadow: var(--shadow-1);
  transition: var(--transition);
  text-transform: capitalize;
  display: inline-block;
  width: ${(props) => props.width};

  ${(props) => sizes[props.size]}
  ${(props) => variations[props.variation]}

  &:hover {
    background: var(--primary-700);
    box-shadow: var(--shadow-3);
  }

  &:disabled {
    cursor: wait;
  }
`;

const StyledButton = styled.button`
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  ${buttonStyles};
`;

const StyledLinkButton = styled(Link)`
  all: unset;
  ${buttonStyles};
`;

function Button({
  children,
  size = 'medium',
  variation = 'primary',
  to,
  width = '',
  // disabled = false,
}) {
  return to ? (
    <StyledLinkButton to={to} size={size} variation={variation} width={width}>
      {children}
    </StyledLinkButton>
  ) : (
    <StyledButton
      size={size}
      variation={variation}
      width={width}
      disabled={true}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
