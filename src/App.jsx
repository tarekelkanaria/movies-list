import { useState } from "react";
import { useMoviesContext } from "./store/MoviesProvider";
import MoviesList from "./components/MoviesList/MoviesList";
import ActionContainer from "./components/Shared/ActionContainer";
import ActionButton from "./components/Shared/ActionButton";
import AddMovie from "./components/AddMovie/AddMovie";
import PopupModal from "./components/Shared/PopupModal";
import Loading from "./components/Shared/Loading";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [displayForm, setDisplayForm] = useState(false);
  const moviesCTX = useMoviesContext();

  const openForm = () => {
    setDisplayForm(true);
  };

  const closeForm = () => {
    setDisplayForm(false);
  };

  let content = "";
  if (moviesCTX.filmsList.length) content = <MoviesList />;
  if (moviesCTX.isLoading) content = <Loading />;
  if (moviesCTX.isError) content = <PopupModal />;
  return (
    <main className="bg-dark p-5">
      {displayForm ? (
        <AddMovie close={closeForm} />
      ) : (
        <ActionContainer>
          <ActionButton onAdd={openForm}>Add Movie</ActionButton>
        </ActionContainer>
      )}
      <ActionContainer>
        <ActionButton get>Get Movies</ActionButton>
      </ActionContainer>
      {content}
    </main>
  );
}

export default App;
