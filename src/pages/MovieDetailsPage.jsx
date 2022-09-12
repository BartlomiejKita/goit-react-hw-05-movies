import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import api from 'services/movieApi';
import MovieDetails from '../components/MovieDetails';
import { IoIosArrowRoundBack } from 'react-icons/io';
import styled from 'styled-components';

const Button = styled.button`
  margin-bottom: 25px;
  align-items: center;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: transparent 0 0 0 3px, rgba(18, 18, 18, 0.1) 0 6px 20px;
  box-sizing: border-box;
  color: #121212;
  cursor: pointer;
  display: inline-flex;
  flex: 1 1 auto;
  font-family: Inter, sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  justify-content: center;
  line-height: 1;
  outline: none;
  padding: 1rem 1.2rem;
  text-align: center;
  text-decoration: none;
  transition: box-shadow 0.2s, -webkit-box-shadow 0.2s;
  white-space: nowrap;
  border: 0;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:hover {
    box-shadow: #121212 0 0 0 3px, transparent 0 0 0 0;
  }
`;

const MoviesDetailsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();


  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const backTo =
    `${location.state?.from?.pathname}${location.state?.from?.search}` ??
    '/movies';

  useEffect(() => {
    api.fetchMovieById(movieId, setMovie);
  }, [movieId]);

  return (
    <>
      <Button
        onClick={() => {
          navigate(backTo , { replace: true });
        }}
      >
        <IoIosArrowRoundBack /> Go back
      </Button>
      <MovieDetails movie={movie} />
    </>
  );
};

export default MoviesDetailsPage;
