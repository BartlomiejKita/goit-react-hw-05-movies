import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
`;

const InfoWrapper = styled.div`
  margin-left 25px
  `;

const MovieDetails = ({ movie }) => {
  const { id, title, overview, vote_average, genres, poster_path } = movie;
  return (
    <>
      <Wrapper>
        <div>
          {poster_path === (undefined || null) ? (
            <img
              src={'https://placehold.co/500x750'}
              alt={`just placeholder`}
            />
          ) : (
            <img
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={`${title} movie poster`}
            />
          )}
        </div>
        <InfoWrapper>
          <h1>{title}</h1>
          <p>User Score: {(vote_average * 10).toFixed(0)}%</p>
          <h2>Overwiew</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <p>{genres?.map(({ name }) => name + ', ')}</p>
        </InfoWrapper>
      </Wrapper>
      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to={`movies/${id}/cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`movies/${id}/reviews`}>Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </>
  );
};

MovieDetails.propTypes = {
  movie: PropTypes.object,
};

export default MovieDetails;
