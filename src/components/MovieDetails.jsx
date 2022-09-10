import React from 'react';
import { Link, Outlet} from 'react-router-dom';

const MovieDetails = ({ movie }) => {
  const { id, title, overview, vote_average, genres, poster_path } = movie;
  return (
    <>
    
      <div>
        {poster_path !== undefined ? (
          <img
            
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={`${title} movie poster`}
          />
        ) : (
          <p>Sorry, no poster available</p>
        )}
        <div>
          <h1>{title}</h1>
          <p>User Score: {(vote_average * 10).toFixed(0)}%</p>
          <h2>Overwiew</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <p>{genres?.map(({ name }) => name + ', ')}</p>
        </div>
      </div>
      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to={`/movies/${id}/cast`}>
              Cast
            </Link>
          </li>
          <li >
            <Link to={`/movies/${id}/reviews`}>
              Reviews
            </Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </>
  );
};

export default MovieDetails;