import PropTypes from 'prop-types';
import {
  AboutText,
  InfoItem,
  List,
  TitleAbout,
  Votes,
} from './DetailsPage.styled';

export const About = ({ description, voteAverage, voteCount }) => {
  return (
    <>
      <TitleAbout>About</TitleAbout>
      <AboutText>{description}</AboutText>
      <List>
        <InfoItem>
          Vote average: <Votes>{voteAverage}</Votes>
        </InfoItem>
        <InfoItem>
          Vote count: <Votes>{voteCount}</Votes>
        </InfoItem>
      </List>
    </>
  );
};

About.propType = {
  description: PropTypes.string,
  voteAverage: PropTypes.number,
  voteCount: PropTypes.number,
};
