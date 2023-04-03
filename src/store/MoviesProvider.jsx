import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import axios from "axios";

const MoviesContext = createContext({
  filmsList: [],
  isLoading: false,
  isError: false,
  errorText: "",
  getMovies: () => {},
  addMovie: () => {},
  deleteMovie: () => {},
});

const MoviesProvider = ({ children }) => {
  const [filmsList, setFilmsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorText, setErrorText] = useState("");

  const addMovie = async (data) => {
    setIsError(false);
    try {
      setIsLoading(true);
      await axios.post(
        "https://favorite-movies-2ce9f-default-rtdb.firebaseio.com/movies.json",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (err) {
      setIsError(true);
      setErrorText(`${err.message}`);
    }
    setIsLoading(false);
  };

  const getMovies = useCallback(async () => {
    setIsError(false);
    try {
      setIsLoading(true);
      const response = await axios.get(
        "https://favorite-movies-2ce9f-default-rtdb.firebaseio.com/movies.json"
      );
      const resData = await response.data;
      const moviesData = [];
      for (const key in resData) {
        const movie = {
          id: key,
          title: resData[key].title.toUpperCase(),
          director: resData[key].director,
          release_date: resData[key].release_date,
          overview: resData[key].overview,
        };
        moviesData.push(movie);
      }
      setFilmsList([...moviesData]);
    } catch (error) {
      setIsError(true);
      setErrorText(`${error.message}`);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  const deleteMovie = async (id) => {
    setFilmsList((prevList) => prevList.filter((item) => item.id !== id));
    try {
      setIsLoading(true);
      await axios.delete(
        `https://favorite-movies-2ce9f-default-rtdb.firebaseio.com/movies/${id}.json`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      setIsError(true);
      setErrorText(`${error.message}`);
    }
    setIsLoading(false);
  };
  return (
    <MoviesContext.Provider
      value={{
        filmsList,
        isLoading,
        isError,
        errorText,
        getMovies,
        addMovie,
        deleteMovie,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export const useMoviesContext = () => useContext(MoviesContext);

export default MoviesProvider;
