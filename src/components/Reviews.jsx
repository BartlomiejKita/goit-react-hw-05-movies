import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from 'services/movieApi';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    api.fetchMovieReviewsById(movieId, setReviews);
  }, [movieId]);

  return (
    <>
      {reviews.length < 1 ? (
        <p>Sorry, reviews are not available</p>
      ) : (
        <ul>
          {reviews.map(({ author, content, id }) => (
            <li key={id}>
              <p>Review author: {author}</p>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Reviews;
