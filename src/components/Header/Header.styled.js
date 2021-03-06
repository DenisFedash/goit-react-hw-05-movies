import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const ContainerHeader = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
  height: 80px;
  background: black;
  padding-top: 41px;
  @media screen and (min-width: 768px) {
    min-width: 768px;
    padding-left: 75px;
    padding-right: 75px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 1200px;
    padding-left: 70px;
    padding-right: 70px;
  }
`;

export const Icon = styled(NavLink)`
  display: flex;
  align-items: center;
  line-height: 1.17;
  text-decoration: none;
`;

export const Logo = styled.h1`
  color: orange;
  margin-left: 10px;
  display: block;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MenuLogo = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;
  margin-bottom: 41px;
`;

export const NavList = styled.ul`
  display: flex;

  line-height: 1.17;
  text-transform: uppercase;
`;

export const NavItem = styled.li`
  position: relative;
  :not(:last-child) {
    margin-right: 39px;
  }
`;

export const MenuLink = styled(NavLink)`
  color: orange;
  transition: orange;
  text-decoration: none;
  &.active {
    text-decoration: underline;
    color: white;
  }
  :hover,
  :focus {
    color: white;
  }
`;
