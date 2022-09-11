import React, { useEffect, useState } from 'react';
import api from 'services/movieApi';
import styled from 'styled-components';
import MoviesList from '../components/MoviesList';

const Header = styled.h2`
  font-weight: bold;
  margin-left: 25px;
`;

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    api.fetchTrending(setTrendingMovies);
  }, []);

  return (
    <>
      <Header>Trending today</Header>
      <MoviesList movies={trendingMovies} />
    </>
  );
};

export default HomePage;
