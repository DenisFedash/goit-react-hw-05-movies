import { BiSearchAlt } from 'react-icons/bi';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Container, Form, Input, Svg } from './SearchBar.styled';

export const SearchBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  function onSubmitForm(e) {
    e.preventDefault();
    const value = e.target.elements.query.value;

    navigate({
      ...location,
      search: `query=${value}`,
    });
  }

  return (
    <Container>
      <Form onSubmit={onSubmitForm}>
        <Input type="text" name="query" placeholder="Search movies" />
        <Button type="submit">
          <Svg>
            <BiSearchAlt size={20} />
          </Svg>
        </Button>
      </Form>
    </Container>
  );
};
