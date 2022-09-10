import React, { useEffect, useState } from 'react';
import { Outlet, useParams, useSearchParams, Link } from 'react-router-dom';
import api from 'services/movieApi';
import styled from 'styled-components';

const Button = styled.button`
  margin-left: 5px;
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
  font-size: 1rem;
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

const Input = styled.input`
  font-size: 1rem;
  border-radius: 12px;
  padding: 0 1.2rem;
`;

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
    api.fetchMovieByQuery(query, setSearchedMovie);
  }, [query]);

  let params = useParams();

  return (
    <>
      {!params.movieId && (
        <>
          <form onSubmit={searchMovie}>
            <Input type="text" name="query"></Input>
            <Button type="submit">Search Movies</Button>
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
