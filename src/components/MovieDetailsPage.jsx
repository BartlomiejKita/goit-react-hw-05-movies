import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import api from 'services/movieApi';
import MovieDetails from './MovieDetails';
import { IoIosArrowRoundBack } from 'react-icons/io';


const MoviesDetailsPage = () => {
  let navigate = useNavigate();

  const [movie, setMovie] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    api.fetchMovieById(movieId, setMovie);
  }, [movieId]);

  return (
    <>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
       <IoIosArrowRoundBack/> Go back
      </button>
      <MovieDetails movie={movie} />
      <Outlet />
    </>
  );
};

export default MoviesDetailsPage;
