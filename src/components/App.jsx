import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  font-weight: bold;
  font-size: 20px;
  color: black;
  margin-left: 25px;
  margin-top: 15px;
  &.active {
    color: red;
  }
`;

const Nav = styled.div`
  box-shadow: 0 4px 2px -2px gray;
  padding-bottom: 15px;
`;

const App = () => {
  return (
    <>
      <Nav>
        <StyledLink to="/">Home </StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </Nav>
      <Outlet />
    </>
  );
};

export default App;
