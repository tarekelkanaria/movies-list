import { useMoviesContext } from "../../store/MoviesProvider";
import { AiFillCloseCircle } from "react-icons/ai";

const Movie = ({ id, title, overview, director, release_date }) => {
  const movieCTX = useMoviesContext();
  return (
    <li className="col-12 col-md-6 col-lg-4 bg-primary-subtle text-emphasis-primary border border-3 border-top-0 border-end-0 border-light rounded shadow-sm p-3 g-2 ">
      <div className=" w-25 ms-auto">
        <AiFillCloseCircle
          className=" ms-auto d-block"
          style={{
            color: "red",
            fontSize: "3rem",
            cursor: "pointer",
          }}
          onClick={() => movieCTX.deleteMovie(id)}
        />
      </div>
      <h2 className="text-center fs-2 fw-bolder me-2 text-warning-emphasis mb-5">
        {title}
      </h2>
      <p className="fs-4 text-muted">
        <span className="text-warning fw-bold fs-3">Director:</span> {director}
      </p>
      <p className="fs-4 text-muted">
        <span className="text-warning fw-bold fs-3">Release date:</span>{" "}
        {release_date}
      </p>
      <p className="fs-4 text-break">
        <span className="text-warning fw-bold fs-3">Overview:</span> {overview}
      </p>
    </li>
  );
};

export default Movie;
