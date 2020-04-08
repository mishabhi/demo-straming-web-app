import React, { Fragment } from "react";
import HomeItem from "../common/home-items-list/HomeItem";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Fragment>          
      <Link to={"/series"}>
        <HomeItem title="Series" />
      </Link>
      <Link to={"/movies"}>
        <HomeItem title="Movies" />
      </Link>      
    </Fragment>
    
  );
};

export default Home;
