import styled from '@emotion/styled';

export const Warning = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-bottom: 400px;

  @media screen and (min-width: 768px) {
    min-width: 768px;
    padding-left: 75px;
    padding-right: 75px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 1200px;
    padding-left: 70px;
    padding-right: 70px;
  }
`;
