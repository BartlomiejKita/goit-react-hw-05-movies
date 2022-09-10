import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from 'services/movieApi';
import styled from 'styled-components';

const StyledList = styled.ul`
  padding: 0px;
`;

const StyledItem = styled.li`
  border: 1px solid black;
  border-radius: 12px;
  padding: 15px;
  text-align: justify;
  margin-bottom: 10px;
  background-color: #878f99;
  overflow: hidden;
`;
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
        <StyledList>
          {reviews.map(({ author, content, id }) => (
            <StyledItem key={id}>
              <p>{content}</p>
              <h4>Review author: {author}</h4>
            </StyledItem>
          ))}
        </StyledList>
      )}
    </>
  );
};

export default Reviews;
