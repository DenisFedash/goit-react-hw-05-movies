import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Item = styled.li`
  position: relative;
  &:hover,
  &:focus {
    transform: scale(1.03);

    transition-duration: 250ms;
  }

  :not(:last-child) {
    @media screen and (max-width: 767px) {
      margin-bottom: 20px;
    }
  }

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    width: calc((100% - 4 * 15px) / 2);
    margin: 15px;
  }

  @media screen and (min-width: 1024px) {
    width: calc((100% - 6 * 15px) / 3);
  }
`;

export const ImageThumb = styled.div`
  position: relative;
  padding-bottom: 10px;

  @media screen and (min-width: 768px) {
    width: 293px;
  }
  @media screen and (min-width: 1024px) {
    width: 274px;
  }

  border-radius: 5px;

  transform: scale(1);
  transition: transform 250ms linear;
`;

export const Image = styled.img`
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 5px;
`;

export const Title = styled.h2`
  display: block;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  text-transform: uppercase;
  color: black;
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  color: #ff6b08;
`;

export const Average = styled.p`
  position: absolute;
  top: 0;
  right: 0;
  background-color: #ff6b08;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 20px;

  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  border-radius: 5px;
`;

export const CardLink = styled(Link)`
  text-decoration: none;
`;
