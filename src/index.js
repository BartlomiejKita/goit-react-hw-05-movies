import App from 'components/App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const HomePage = React.lazy(() => import('pages/HomePage'));
const MoviesPage = React.lazy(() => import('pages/MoviesPage'));
const MoviesDetailsPage = React.lazy(() =>
  import('pages/MovieDetailsPage')
);
const Cast = React.lazy(() => import('pages/Cast'));
const Reviews = React.lazy(() => import('pages/Reviews'));
const NotFound = React.lazy(() => import('pages/NotFound'));

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
