import { Fragment } from "react/cjs/react.production.min";
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import Movie from "./components/Movie";

function Home() {
  const [ready, setReady] = useState(false);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setReady(true);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <Fragment>
      {ready ? (
        <div>
          {movies.map((movie) => (
            <Movie
              id={movie.id}
              medium_cover_image={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </Fragment>
  );
}

export default Home;
