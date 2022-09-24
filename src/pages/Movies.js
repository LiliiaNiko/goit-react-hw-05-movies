import { useEffect, useState } from 'react';
import { useLocation, useSearchParams, Link } from 'react-router-dom';
import { SearchBox } from '../components/SearchBox';
import { getSearchedMovie } from 'services/moviesApi';
import { MovieName } from 'components/MoviesList.styled';

const Movies = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  useEffect(() => {
    if (movieName === '') {
      setMovies([]);
      return;
    }
    getSearchedMovie(movieName).then(movie => setMovies(movie));
  }, [movieName]);
  

  return (
    <div>
      <SearchBox value={movieName} onChange={updateQueryString} />
      <div>
        {movies.map(movie => (
          <div key={movie.id}>
            <Link to={`${movie.id}`} state={{ from: location }}>
              <img
                src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                alt="Poster"
              />
              <MovieName>{movie.title}</MovieName>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
