import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'services/moviesApi';
import { Link, useLocation } from 'react-router-dom';
import { MovieName } from 'components/MoviesList.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getTrendingMovies().then(setMovies);
  }, []);
  

  return (
    <div>
      <h1>Trending today</h1>
      <div>
        {movies.map(movie => (
          <div key={movie.id}>
            <Link to={`movies/${movie.id}`} state={{ from: location }}>
              <MovieName>{movie.title}</MovieName>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
