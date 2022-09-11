import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: rgb(52, 56, 60);
`;

const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 75%;
  max-width: 364px;
  padding: 24px;
  background: white;
  color: rgb(14, 30, 37);
  border-radius: 8px;
  box-shadow: 0 2px 4px 0 rgba(14, 30, 37, 0.16);
`;
const Header = styled.h1`
  margin: 0;
  font-size: 22px;
  line-height: 24px;
`;

// a {
//   margin: 0;
//   font-weight: 600;
//   line-height: 24px;
//   color: #054861;
// }

// a svg {
//   position: relative;
//   top: 2px;
// }

// a:hover,
// a:focus {
//   text-decoration: none;
// }

// a:hover svg path{
//   fill: #007067;
// }

// p:last-of-type {
//   margin-bottom: 0;
// }

const NotFound = () => {
  return (
    <>
      <Main>
        <Card>
          <Header>Page Not Found</Header>
          <div>
            <p>
              Looks like you've followed a broken link or entered a URL that
              doesn't exist on this site.
            </p>
            <p> Back to our site</p>
            <hr />
            <p>
              If this is your site, and you weren't expecting a 404 for this
              path, please visit Netlify's "page not found" support guide for
              troubleshooting tips.
            </p>
          </div>
        </Card>
      </Main>
    </>
  );
};

export default NotFound;
