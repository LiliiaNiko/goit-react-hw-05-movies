import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/moviesApi';

const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);

  useEffect(() => {
    getMovieCast(movieId).then(setMovieCast);
  }, [movieId]);

  return (
    <div>
      {movieCast.length > 0 && (
        <div>
          {movieCast.map(cast => (
            <div key={cast.id}>
              {cast.profile_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w200/${cast.profile_path}`}
                  alt="poster"
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cast;
