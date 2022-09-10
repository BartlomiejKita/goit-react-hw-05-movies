import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from 'services/movieApi';
import styled from 'styled-components';

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
`;

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    api.fetchMovieCastById(movieId, setCast);
  }, [movieId]);

  return (
    <>
      <StyledList>
        {cast.length < 1 ? (
          <p>Sorry, the cast is not available</p>
        ) : (
          cast.map(({ character, id, name, profile_path }) => (
            <li key={id}>
              {profile_path === (null || undefined) ? (
                <img
                  src={'https://placehold.jp/200x300.png'}
                  alt={`just placeholder`}
                />
              ) : (
                <img
                  src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                  alt={`${name}`}
                />
              )}
              <p>Name: {name}</p>
              <p>Character: {character}</p>
            </li>
          ))
        )}
      </StyledList>
    </>
  );
};

export default Cast;
