import styled from '@emotion/styled';

export const ActorList = styled.ul`
  padding: 0;
  min-height: 600px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    margin: -15px;
  }
`;

export const ActorCard = styled.li`
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

export const ActorThumb = styled.div`
  padding-bottom: 10px;

  @media screen and (min-width: 768px) {
    width: 293px;
  }
  @media screen and (min-width: 1024px) {
    width: 274px;
  }

  border-radius: 5px;
`;

export const ActorPoster = styled.img`
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 5px;
`;

export const ActorName = styled.h2`
  display: block;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  text-transform: uppercase;
  color: black;
`;
