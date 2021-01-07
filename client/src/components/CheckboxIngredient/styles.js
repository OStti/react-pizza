import styled from 'styled-components';

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 240px;
  text-align: center;
  padding: 0.5rem;
  transition: all 0.35s;
  cursor: pointer;
  border: 1px solid #dcdcdc;

  &:hover {
    ${({ theme }) => `
      border-color: ${theme.palette.primary.main}
    `}
  }
`;

export const Check = styled.span`
  position: absolute;
  top: 4px;
  right: 4px;
`;

export const Input = styled.input`
  display: none;

  &:checked + label {
    ${({ theme }) => `
      border-color: ${theme.palette.primary.main}
    `}
  }
`;

export const ImgWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
`;

export const Img = styled.img`
  max-width: 100%;
  height: auto;
`;
