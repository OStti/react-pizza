import styled, { css } from 'styled-components';

export default styled.button`
  display: inline-block;
  font-weight: bold;
  font-size: 1rem;
  line-height: 1;
  padding: 0.75rem 1rem;
  background: #00a896;
  border-radius: 1rem;
  width: ${(props) => (props.allSpace ? '100%' : 'auto')};
  color: #fff;
  border: transparent;

  ${(props) =>
    props.disabled &&
    css`
      background: #f9f9fb;
      color: #8181b1;
      opacity: 0.8;
    `}

  &:active {
    box-shadow: inset 0px 1px 4px rgba(0, 0, 0, 0.25);
  }
`;
