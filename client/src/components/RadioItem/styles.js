import styled from 'styled-components';

export const Label = styled.label`
  display: block;
  padding: 1rem;
  border: 1px solid #dcdcdc;
  transition: all 0.35s;
  cursor: pointer;

  &:hover {
    ${({ theme }) => `
      border-color: ${theme.palette.primary.main}
    `}
  }
`;
export const Input = styled.input`
  display: none;

  &:checked + label {
    border-color: transparent;
    color: #fff;

    ${({ theme }) => `
      background: ${theme.palette.primary.main}
    `}
  }
`;
