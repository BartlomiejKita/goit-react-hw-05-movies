import React, { useEffect, useState } from 'react';
import { Outlet, useParams, useSearchParams, Link } from 'react-router-dom';
import api from 'services/movieApi';

const MoviesPage = () => {
  const [searchedMovie, setSearchedMovie] = useState([]);
  const [searchQuery, setSearchQuery] = useSearchParams();
  const query = searchQuery.get('query');
  const searchMovie = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const formQuery = form.elements.query.value;
    if (formQuery === '') {
      return;
    }
    setSearchQuery({ query: formQuery });
    api.fetchMovieByQuery(query, setSearchedMovie);
    form.reset();
  };

  useEffect(() => {
    if (query === null) {
      setSearchedMovie([]);
      return;
    }
    api.fetchMovieByQuery(query, setSearchedMovie);
  }, [query]);

  let params = useParams();
  
  return (
    <>
      {!params.movieId && (
        <>
          <form onSubmit={searchMovie}>
            <input type="text" name="query"></input>
            <button type="submit">Search Movies</button>
          </form>
          <ul>
            {searchedMovie.map(({ id, title }) => (
              <li key={id}>
                <Link to={`/movies/${id}`}>{title}</Link>
              </li>
            ))}
          </ul>
        </>
      )}
      {params.movieId && (
        <>
          <Outlet />
        </>
      )}
    </>
  );
};

export default MoviesPage;
