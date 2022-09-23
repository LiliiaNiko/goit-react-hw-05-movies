import { useEffect, useState } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import { BackLink } from 'components/BackLink';
import { getMovieById } from 'services/moviesApi';
import { InfoLink } from './MovieDetails.styled';
import { InfoContainer } from './MovieDetails.styled';
//import { MovieName } from 'components/MoviesList.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const location = useLocation();

  useEffect(() => {
    getMovieById(movieId).then(setMovie);
  }, [movieId]);
  console.log(movie);

  const { poster_path, title, vote_average, overview } = movie;
  const backLinkHref = location.state?.from ?? '/movies';
  return (
    <>
      <div>
        <BackLink to={backLinkHref}>Go back</BackLink>
      </div>
      <div>
        {poster_path && (
          <img
            src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
            alt="poster"
          />
        )}
        <h1>{title}</h1>
      </div>
      <div>
        <h3>User score: {vote_average}</h3>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>

        <h2>Additional information</h2>
      </div>
      <InfoContainer>
        <InfoLink to="cast">Cast</InfoLink>
        <InfoLink to="reviews">Reviews</InfoLink>
        <Outlet />
      </InfoContainer>
      <Outlet />
    </>
  );
};

export default MovieDetails;
