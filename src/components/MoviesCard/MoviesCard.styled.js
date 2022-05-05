import styled from '@emotion/styled';

export const Item = styled.li`
  position: relative;
  margin: 15px;
  &:hover,
  &:focus {
    transform: scale(1.03);

    transition-duration: 250ms;
  }
  width: calc((100% - 6 * 15px) / 3);
`;

export const ImageThumb = styled.div`
  position: relative;
  padding-bottom: 10px;
  width: 100%;
  overflow: hidden;
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
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  text-transform: uppercase;
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  color: #ff6b08;
`;
