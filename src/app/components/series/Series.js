import React, { Fragment, useEffect, useState, useContext } from "react";
import Item from "../common/item/Item";
import * as ApiService from "../../services/ApiService";
import Loader from "../common/loader/Loader";
import PageHeaderContext from "../../context/PageHeaderContext";

const Series = () => {
  const [seriesList, setSeriesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const {setTitle} = useContext(PageHeaderContext);

  useEffect(() => {
    setTitle("Popular Series");
    ApiService.getAllSeries()
      .then((seriesList) => {
        seriesList = seriesList.entries
          .filter(
            (entry) =>
              entry.programType === "series" && entry.releaseYear > 2010
          )
          .slice(0, 21)
          .sort((a, b) => (a.title > b.title ? 1 : b.title > a.title ? -1 : 0));
        setSeriesList(seriesList);
        setIsLoading(false);
      })
      .catch((error) => {
        setSeriesList([]);
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
        seriesList.map((series) => (
          <Item key={series.title} url={series.images["Poster Art"].url} title={series.title} />
        ))
      )}
    </Fragment>
  );
};

export default Series;
