import App from 'components/App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const HomePage = React.lazy(() => import('components/HomePage'));
const MoviesPage = React.lazy(() => import('components/MoviesPage'));
const MoviesDetailsPage = React.lazy(() =>
  import('components/MovieDetailsPage')
);
const Cast = React.lazy(() => import('components/Cast'));
const Reviews = React.lazy(() => import('components/Reviews'));
const NotFound = React.lazy(() => import('components/NotFound'));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />}>
            <Route path=":movieId" element={<MoviesDetailsPage />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
