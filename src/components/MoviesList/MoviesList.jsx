import { useMoviesContext } from "../../store/MoviesProvider";
import Movie from "../Movie/Movie";

const MoviesList = () => {
  const movieCTX = useMoviesContext();
  const moviesItems = movieCTX.filmsList.map((movie) => (
    <Movie key={movie.id} {...movie} />
  ));

  return (
    <section className="container shadow-sm bg-body-tertiary px-4 py-3 rounded">
      <ul className="row justify-content-center">{moviesItems}</ul>
    </section>
  );
};
export default MoviesList;
