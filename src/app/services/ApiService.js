import * as Constants from '../common/Constants';
import Axios from 'axios';

export function getAllSeries(){
    return new Promise((resolve, reject) => {
        Axios.get(Constants.seriesUrl)
         .then(series => {
            resolve(series.data);
         })
         .catch(error => {
             reject(error);
         })
    })
}

export function getAllMovies(){
    return new Promise((resolve, reject) => {
        Axios.get(Constants.moviessUrl)
         .then(movies => {
            resolve(movies.data);
         })
         .catch(error => {
             reject(error);
         })
    })
}