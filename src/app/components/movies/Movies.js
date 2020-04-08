import React, { Fragment, useEffect, useState, useContext } from "react";
import Item from "../common/item/Item";
import * as ApiService from "../../services/ApiService";
import Loader from "../common/loader/Loader";
import PageHeaderContext from "../../context/PageHeaderContext";

const Movies = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const {setTitle} = useContext(PageHeaderContext);

  useEffect(() => {
    setTitle("Popular Movies");
    ApiService.getAllMovies()
      .then((moviesList) => {
        moviesList = moviesList.entries
                              .filter(
                                (entry) =>
                                  entry.programType === "movie" && entry.releaseYear > 2010
                              )
                              .slice(0, 21)
                              .sort((a, b) => (a.title > b.title ? 1 : b.title > a.title ? -1 : 0));
        setMoviesList(moviesList);
        setIsLoading(false);
      })
      .catch((error) => {
        setMoviesList([]);
        setHasError(true);
        console.log(error);
      });
  }, []);

  return (
    <Fragment>      
      {hasError ? (
        <Loader type="error" />
      ) : isLoading ? (
        <Loader type="loader" />
      ) : (
        moviesList.map((movie) => (
          <Item key={movie.title} url={movie.images["Poster Art"].url} title={movie.title} />
        ))
      )}
    </Fragment>
  );
};

export default Movies;
