import {
  ContainerHeader,
  Logo,
  Icon,
  MenuLogo,
  NavList,
  NavItem,
  MenuLink,
} from './Header.styled';

export const Header = () => {
  return (
    <ContainerHeader>
      <MenuLogo>
        <Icon to="/">
          <img
            alt="logo"
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE5LjgyIDJINC4xOEEyLjE4IDIuMTggMCAwIDAgMiA0LjE4djE1LjY0QTIuMTggMi4xOCAwIDAgMCA0LjE4IDIyaDE1LjY0QTIuMTggMi4xOCAwIDAgMCAyMiAxOS44MlY0LjE4QTIuMTggMi4xOCAwIDAgMCAxOS44MiAyWk03IDJ2MjBNMTcgMnYyME0yIDEyaDIwTTIgN2g1TTIgMTdoNU0xNyAxN2g1TTE3IDdoNSIgc3Ryb2tlPSIjODE4MTgxIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg=="
          />
          <Logo>Filmoteka</Logo>
        </Icon>
        <NavList>
          <NavItem>
            <MenuLink to="/">Home</MenuLink>
          </NavItem>
          <NavItem>
            <MenuLink to="movies">Movies</MenuLink>
          </NavItem>
        </NavList>
      </MenuLogo>
    </ContainerHeader>
  );
};
