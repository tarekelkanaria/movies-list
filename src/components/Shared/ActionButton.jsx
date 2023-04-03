import { useMoviesContext } from "../../store/MoviesProvider";

const ActionButton = ({ children, get, onAdd }) => {
  const actionCtx = useMoviesContext();
  return (
    <button
      className="btn btn-primary btn-lg bg-gradient bg-opacity-75 p-3 fs-2"
      onClick={get ? () => actionCtx.getMovies() : () => onAdd()}
    >
      {children}
    </button>
  );
};

export default ActionButton;
