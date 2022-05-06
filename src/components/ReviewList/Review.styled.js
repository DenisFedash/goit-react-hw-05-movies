import styled from '@emotion/styled';

export const ReviewItem = styled.li`
  border: 1px solid orange;
  border-radius: 5px;
  padding: 15px;
  :not(:last-child) {
    margin-bottom: 25px;
  }
`;

export const ReviewTitle = styled.h2`
  font-style: normal;
  font-size: 20px;
  line-height: 23px;
  margin-bottom: 20px;
`;

export const RevievText = styled.p`
  font-weight: 500;
  font-style: normal;
  font-size: 12px;
  line-height: 20px;
  text-align: justify;
  margin-bottom: 21px;
`;
