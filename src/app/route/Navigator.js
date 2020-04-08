import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import * as Routes from './Routes';
import Home from '../components/home/Home';
import Series from '../components/series/Series';
import Movies from '../components/movies/Movies';


const Navigator = () => {
  return (
    <Router>
      <Switch>
        <Route path={[Routes.root, Routes.home]} exact component={Home} />  
        <Route path={Routes.series} exact component={Series} />  
        <Route path={Routes.movies} exact component={Movies} />    
      </Switch>
    </Router>
  );    
}
export default Navigator;
