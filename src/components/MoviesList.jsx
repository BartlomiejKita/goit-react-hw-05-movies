import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const List = styled.ul``;

const MoviesList = ({ movies }) => {
  return (
    <>
      <List>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </List>
    </>
  );
};

export default MoviesList;
