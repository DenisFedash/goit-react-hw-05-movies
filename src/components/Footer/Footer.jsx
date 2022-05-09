import {
  ContainerHeader,
  MenuLink,
  NavItem,
} from 'components/Header/Header.styled';
import { FooterList, FooterTitle } from './Footer.styled';

export const Footer = () => {
  return (
    <ContainerHeader>
      <FooterList>
        <NavItem>
          <MenuLink to="/">Home</MenuLink>
        </NavItem>
        <NavItem>
          <MenuLink to="movies">Movies</MenuLink>
        </NavItem>
      </FooterList>
      <FooterTitle>© by DenisFedash 2022</FooterTitle>
    </ContainerHeader>
  );
};
