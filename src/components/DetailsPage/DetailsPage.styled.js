import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const CinemaCard = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Poster = styled.img`
  margin-bottom: 30px;
  margin-right: 25px;
  border-radius: 5px;
  width: 100%;
  height: 100%;
  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1024px) {
    width: 1024px;
  }
`;

export const CardTitle = styled.h1`
  line-height: 33px;
  margin-bottom: 20px;
`;

export const ReleaseDate = styled.span`
  display: flex;
`;

export const Date = styled.p`
  margin-bottom: 10px;
  margin-left: 10px;
  :nth-last-of-type {
    margin-bottom: 20px;
  }

  font-weight: 500;
  font-style: normal;

  line-height: 16px;
  color: black;
`;

export const List = styled.ul`
  display: flex;
`;

export const GenresItem = styled.li`
  margin-bottom: 5px;
  :not(:last-child) {
    margin-right: 5px;
  }
  :nth-last-of-type {
    margin-bottom: 20px;
  }

  font-weight: 500;
  font-style: normal;

  line-height: 16px;
  color: orange;
`;

export const Genres = styled.span`
  font-weight: 500;
  font-style: normal;

  line-height: 16px;
  color: black;
`;

export const TitleAbout = styled.h2`
  font-style: normal;
  font-size: 20px;
  line-height: 23px;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const AboutText = styled.div`
  font-weight: 500;
  font-style: normal;
  font-size: 12px;
  line-height: 20px;
  text-align: justify;
  margin-bottom: 21px;
`;

export const InfoItem = styled.li`
  margin-bottom: 10px;
  display: flex;

  :not(:last-child) {
    margin-right: 50px;
  }
  :nth-last-of-type {
    margin-bottom: 20px;
  }

  font-weight: 500;
  font-style: normal;

  line-height: 16px;
  color: orange;
`;

export const Votes = styled.div`
  margin-left: 5px;
  font-size: large;
  color: black;
`;

export const CustomItem = styled.li`
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const CustomLink = styled(NavLink)`
  font-weight: 500;
  font-style: normal;
  line-height: 20px;
  color: orange;
  text-decoration: none;
  :hover,
  :focus {
    color: black;
  }
`;
