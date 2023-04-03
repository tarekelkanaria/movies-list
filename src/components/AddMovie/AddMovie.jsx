import { useState } from "react";
import { useMoviesContext } from "../../store/MoviesProvider";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { AiFillCloseCircle } from "react-icons/ai";
import PopupModal from "../Shared/PopupModal";
import Loading from "../Shared/Loading";

const AddMovie = ({ close }) => {
  const addMovieCtx = useMoviesContext();
  const [movieTitle, setMovieTitle] = useState("");
  const [movieDirector, setMovieDirector] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [overview, setOverView] = useState("");
  const [validity, setValidity] = useState(false);

  const handleTitleValidity = (e) => {
    if (!e.target.value.trim().length || e.target.value.trim().length >= 20)
      setValidity(true);
    else setValidity(false);
  };
  const handleDirectorValidity = (e) => {
    if (!e.target.value.trim().length || e.target.value.trim().length >= 24)
      setValidity(true);
    else setValidity(false);
  };
  const handleDateValidity = (e) => {
    if (!e.target.value.trim().length) setValidity(true);
    else setValidity(false);
  };
  const handleOverviewValidity = (e) => {
    if (!e.target.value.trim().length || e.target.value.trim().length <= 49)
      setValidity(true);
    else setValidity(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const movieItem = {
      title: movieTitle,
      director: movieDirector,
      release_date: releaseDate,
      overview: overview,
    };
    addMovieCtx.addMovie(movieItem);
    setMovieTitle("");
    setMovieDirector("");
    setReleaseDate("");
    setOverView("");
  };

  return (
    <section className="container shadow-sm bg-body-tertiary p-5 rounded mb-5">
      {addMovieCtx.isError && <PopupModal />}
      {addMovieCtx.isLoading && <Loading />}
      <div className=" w-25 ms-auto">
        <AiFillCloseCircle
          className=" ms-auto d-block"
          style={{
            color: "red",
            fontSize: "3rem",
            cursor: "pointer",
          }}
          onClick={() => close()}
        />
      </div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="movie-title">Movie Title: </Form.Label>
          <Form.Control
            id="movie-title"
            name="title"
            className="fs-3"
            type="text"
            size="lg"
            placeholder="Enter Title"
            required
            max="20"
            value={movieTitle}
            onChange={(e) => setMovieTitle(e.target.value)}
            onBlur={handleTitleValidity}
            isInvalid={validity}
          />
          <Form.Text muted>
            This feild is required and The title must be less than 20
            characters.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="movie-director">Director: </Form.Label>
          <Form.Control
            id="movie-director"
            name="director"
            className="fs-3"
            type="text"
            size="lg"
            placeholder="Enter Director Name"
            required
            max="24"
            value={movieDirector}
            onChange={(e) => setMovieDirector(e.target.value)}
            onBlur={handleDirectorValidity}
            isInvalid={validity}
          />
          <Form.Text muted>
            This feild is required and The director name must be less than 24
            characters.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="movie-release-date">Release date:</Form.Label>
          <Form.Control
            id="movie-release-date"
            name="release"
            className="fs-3"
            type="date"
            size="lg"
            required
            value={releaseDate}
            onChange={(e) => setReleaseDate(e.target.value)}
            onBlur={handleDateValidity}
            isInvalid={validity}
          />
          <Form.Text muted>This feild is required</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="movie-overview">Overview: </Form.Label>
          <Form.Control
            id="movie-overview"
            name="overview"
            className="fs-3"
            as="textarea"
            row={3}
            size="lg"
            placeholder="Enter Overview"
            required
            min="50"
            value={overview}
            onChange={(e) => setOverView(e.target.value)}
            onBlur={handleOverviewValidity}
            isInvalid={validity}
          />
          <Form.Text muted>
            This feild is required and The overview must be more than 50
            characters.
          </Form.Text>
        </Form.Group>
        <div className="d-grid p-3 text-center">
          <Button
            variant="primary"
            type="submit"
            size="lg"
            className="bg-gradient bg-opacity-75 p-3 fs-2"
            disabled={validity}
          >
            Submit
          </Button>
        </div>
      </Form>
    </section>
  );
};
export default AddMovie;
