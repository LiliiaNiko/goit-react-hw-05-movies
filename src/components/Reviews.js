import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/moviesApi';

const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState({});

  useEffect(() => {
    getMovieReviews(movieId).then(setMovieReviews);
  }, [movieId]);

  return (
    <div>
      {movieReviews.length === 0 && <p>There are no reviews yet</p>}
      {movieReviews.length > 0 && (
        <div>
          {movieReviews.map(review => (
            <div key={review.id}>
              <p>{review.author}</p>
              <p>{review.created_at.slice(0, 10)}</p>
              <p>{review.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Reviews;
