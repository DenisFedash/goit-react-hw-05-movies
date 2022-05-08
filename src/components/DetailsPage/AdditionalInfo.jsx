import { useLocation } from 'react-router-dom';
import { CustomItem, CustomLink, TitleAbout } from './DetailsPage.styled';
import { IoMdArrowDropright } from 'react-icons/io';

export const AdditionalInfo = () => {
  const location = useLocation();
  return (
    <>
      <TitleAbout>Additional Information</TitleAbout>
      <ul>
        <CustomItem>
          <CustomLink to="cast" state={{ from: location }}>
            <IoMdArrowDropright />
            Cast
          </CustomLink>
        </CustomItem>
        <CustomItem>
          <CustomLink to="reviews" state={{ from: location }}>
            <IoMdArrowDropright />
            Reviews
          </CustomLink>
        </CustomItem>
      </ul>
    </>
  );
};
