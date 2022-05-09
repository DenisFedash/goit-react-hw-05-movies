import styled from '@emotion/styled';

export const ContainerCards = styled.div`
  min-height: 600px;
  @media screen and (max-width: 767px) {
    padding-top: 20px;
    padding-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    padding-top: 60px;
    padding-bottom: 50px;
  }
`;

export const CardsList = styled.ul`
  padding: 0;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: -15px;
  }
`;
