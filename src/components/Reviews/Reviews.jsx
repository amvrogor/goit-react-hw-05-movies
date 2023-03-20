import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsAPI } from 'Services/getApi';
import { List, ListItem, ReviewTitle, ReviewText } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    getReviewsAPI(movieId)
      .then(data => {
        setReviews(data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, [movieId]);

  return (
    <List>
      {reviews.length !== 0
        ? reviews.map(review => (
            <ListItem key={review.id}>
              <ReviewTitle>Author: {review.author}</ReviewTitle>
              <ReviewText>{review.content} </ReviewText>
            </ListItem>
          ))
        : "We don't have any reviews for this movie"}
    </List>
  );
};

export default Reviews;
