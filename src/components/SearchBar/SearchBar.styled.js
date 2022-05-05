import styled from '@emotion/styled';

export const Container = styled.div`
  width: 320px;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    width: 768px;
    padding-left: 75px;
    padding-right: 75px;
  }
  @media screen and (min-width: 1024px) {
    width: 1024px;
    padding-left: 70px;
    padding-right: 70px;
  }
`;
