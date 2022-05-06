import styled from '@emotion/styled';

export const Button = styled.button`
  display: block;
  border: none;
  background-color: orange;
  border-radius: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  cursor: pointer;

  :hover,
  :focus {
    background-color: teal;
  }
`;

export const ButtonText = styled.span`
  margin-left: 10px;
`;
