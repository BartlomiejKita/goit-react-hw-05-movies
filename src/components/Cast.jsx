import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from 'services/movieApi';
import styled from 'styled-components';
import { nanoid } from 'nanoid';

const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 10px;
  padding: 0px;
  list-style-type: none;
`;

const StyledItem = styled.li`
  border: 1px solid black;
  border-radius: 12px;
  text-align: center;
  background-color: #878f99;
  overflow: hidden;
`;

const Img = styled.img`
  display: block;
  max-width: 300px;
  width: 100%;
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
          cast.map(({ character, name, profile_path }) => (
            <StyledItem key={nanoid()}>
              {!profile_path && (
                <Img
                  src={'https://placehold.jp/200x300.png'}
                  alt={`just placeholder`}
                />
              )}
              {profile_path && (
                <Img
                  src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                  alt={`${name}`}
                />
              )}
              <h4>Name: {name}</h4>
              <p>Character: {character}</p>
            </StyledItem>
          ))
        )}
      </StyledList>
    </>
  );
};

export default Cast;
