import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Suspense } from 'react';
import Loader from 'components/Loader';

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
  margin-bottom: 25px;
`;

const Wrapper = styled.div`
  margin-left: 25px;
`;

const App = () => {
  return (
    <>
      <Nav>
        <StyledLink to="/">Home </StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </Nav>
      <Suspense fallback={<Loader />}>
        <Wrapper>
          <Outlet />
        </Wrapper>
      </Suspense>
    </>
  );
};

export default App;
