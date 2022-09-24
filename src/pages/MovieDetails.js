import { useEffect, useState, Suspense } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import { BackLink } from 'components/BackLink';
import { getMovieById } from 'services/moviesApi';
import { InfoLink } from './MovieDetails.styled';
import { InfoContainer, MovieInfoWrap, MovieInfo } from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    getMovieById(Number(movieId)).then(setMovie);
  }, [movieId]);

  return (
    <>
      <div>
        <BackLink to={backLinkHref}>Go back</BackLink>
      </div>
      <MovieInfoWrap>
        <MovieInfo>
          {movie.poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
              alt={movie.title}
            />
          )}
        </MovieInfo>
        <MovieInfo>
          <h1>{movie.title}</h1>
          <h3>User score: {movie.vote_average}</h3>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres:</h3>
        </MovieInfo>
      </MovieInfoWrap>

      <h2>Additional information</h2>
      <InfoContainer>
        <InfoLink to="cast">Cast</InfoLink>
        <InfoLink to="reviews">Reviews</InfoLink>
      </InfoContainer>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
