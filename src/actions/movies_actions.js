import axios from 'axios';

export const FETCH_POPULAR_MOVIES = "fetch_popular_movies";
export const FETCH_ACTION_MOVIES = "fetch_action_movies";
export const FETCH_ADVENTURE_MOVIES = "fetch_adventure_movies";
export const FETCH_COMEDIES = "fetch_comedies";
export const FETCH_CRIME_MOVIES = "fetch_crime_movies";
export const FETCH_DOCUMENTARY = "fetch_documentary";
export const FETCH_DRAMA = "fetch_drama";
export const FETCH_FANTASY = "fetch_fantasy";
export const FETCH_HISTORY = "fetch_history";
export const FETCH_HORROR = "fetch_horror";
export const FETCH_MUSIC = "fetch_music";
export const FETCH_MYSTERY = "fetch_mystery";
export const FETCH_ROMANCE = "fetch_romance";
export const FETCH_THRILLERS = "fetch_thrillers";
export const FETCH_WAR_MOVIES = "fetch_war_movies";
export const FETCH_WESTERNS = "fetch_westerns";
export const FETCH_SF = "fetch_sf";
export const REQUEST_FAILED = "request_failed";

const ROOT_URL = "https://api.themoviedb.org/3/";
const API_KEY = "5f24fb50bca42571c80a514e5de30c5b";

// Fetch Popular Movies
export function fetchPopularMovies() {
  const request = axios.get(`${ROOT_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
  return (dispatch) => {
    request.then(
      data => dispatch({ type: FETCH_POPULAR_MOVIES, payload: data }),
      error => dispatch({ type: REQUEST_FAILED, payload: error })
    )
  }
}

//Fetch Action Movies 
export function fetchActionMovies() {
  const request = axios.get(`${ROOT_URL}discover/movie?api_key=${API_KEY}&with_genres=28&language=en-US`);
  return (dispatch) => {
    request.then(
      data => dispatch({ type: FETCH_ACTION_MOVIES, payload: data }),
      error => dispatch({ type: REQUEST_FAILED, payload: error })
    )
  }
}

//Fetch Adventure Movies 
export function fetchAdventureMovies() {
  const request = axios.get(`${ROOT_URL}discover/movie?api_key=${API_KEY}&with_genres=12&language=en-US`);
  return (dispatch) => {
    request.then(
      data => dispatch({ type: FETCH_ADVENTURE_MOVIES, payload: data }),
      error => dispatch({ type: REQUEST_FAILED, payload: error })
    )
  }
}

//Fetch Comedies
export function fetchComedies() {
  const request = axios.get(`${ROOT_URL}discover/movie?api_key=${API_KEY}&with_genres=35&language=en-US`);
  return (dispatch) => {
    request.then(
      data => dispatch({ type: FETCH_COMEDIES, payload: data }),
      error => dispatch({ type: REQUEST_FAILED, payload: error })
    )
  }
}

//Fetch Crime Movies
export function fetchCrimeMovies() {
  const request = axios.get(`${ROOT_URL}discover/movie?api_key=${API_KEY}&with_genres=80&language=en-US`);
  return (dispatch) => {
    request.then(
      data => dispatch({ type: FETCH_CRIME_MOVIES, payload: data }),
      error => dispatch({ type: REQUEST_FAILED, payload: error })
    )
  }
}

//Fetch Documentaries
export function fetchDocumentary() {
  const request = axios.get(`${ROOT_URL}discover/movie?api_key=${API_KEY}&with_genres=99&language=en-US`);
  return (dispatch) => {
    request.then(
      data => dispatch({ type: FETCH_DOCUMENTARY, payload: data }),
      error => dispatch({ type: REQUEST_FAILED, payload: error })
    )
  }
}

//Fetch Drama
export function fetchDrama() {
  const request = axios.get(`${ROOT_URL}discover/movie?api_key=${API_KEY}&with_genres=18&language=en-US`);
  return (dispatch) => {
    request.then(
      data => dispatch({ type: FETCH_DRAMA, payload: data }),
      error => dispatch({ type: REQUEST_FAILED, payload: error })
    )
  }
}

//Fetch Fantasy
export function fetchFantasy() {
  const request = axios.get(`${ROOT_URL}discover/movie?api_key=${API_KEY}&with_genres=14&language=en-US`);
  return (dispatch) => {
    request.then(
      data => dispatch({ type: FETCH_FANTASY, payload: data }),
      error => dispatch({ type: REQUEST_FAILED, payload: error })
    )
  }
}

//Fetch History
export function fetchHistory() {
  const request = axios.get(`${ROOT_URL}discover/movie?api_key=${API_KEY}&with_genres=36&language=en-US`);
  return (dispatch) => {
    request.then(
      data => dispatch({ type: FETCH_HISTORY, payload: data }),
      error => dispatch({ type: REQUEST_FAILED, payload: error })
    )
  }
}

//Fetch Horror
export function fetchHorror() {
  const request = axios.get(`${ROOT_URL}discover/movie?api_key=${API_KEY}&with_genres=27&language=en-US`);
  return (dispatch) => {
    request.then(
      data => dispatch({ type: FETCH_HORROR, payload: data }),
      error => dispatch({ type: REQUEST_FAILED, payload: error })
    )
  }
}

//Fetch Music
export function fetchMusic() {
  const request = axios.get(`${ROOT_URL}discover/movie?api_key=${API_KEY}&with_genres=10402&language=en-US`);
  return (dispatch) => {
    request.then(
      data => dispatch({ type: FETCH_MUSIC, payload: data }),
      error => dispatch({ type: REQUEST_FAILED, payload: error })
    )
  }
}

//Fetch Mystery
export function fetchMystery() {
  const request = axios.get(`${ROOT_URL}discover/movie?api_key=${API_KEY}&with_genres=9648&language=en-US`);
  return (dispatch) => {
    request.then(
      data => dispatch({ type: FETCH_MYSTERY, payload: data }),
      error => dispatch({ type: REQUEST_FAILED, payload: error })
    )
  }
}

//Fetch Romance
export function fetchRomance() {
  const request = axios.get(`${ROOT_URL}discover/movie?api_key=${API_KEY}&with_genres=10749&language=en-US`);
  return (dispatch) => {
    request.then(
      data => dispatch({ type: FETCH_ROMANCE, payload: data }),
      error => dispatch({ type: REQUEST_FAILED, payload: error })
    )
  }
}

//Fetch Thrillers
export function fetchThrillers() {
  const request = axios.get(`${ROOT_URL}discover/movie?api_key=${API_KEY}&with_genres=53&language=en-US`);
  return (dispatch) => {
    request.then(
      data => dispatch({ type: FETCH_THRILLERS, payload: data }),
      error => dispatch({ type: REQUEST_FAILED, payload: error })
    )
  }
}

//Fetch War Movies
export function fetchWarMovies() {
  const request = axios.get(`${ROOT_URL}discover/movie?api_key=${API_KEY}&with_genres=10752&language=en-US`);
  return (dispatch) => {
    request.then(
      data => dispatch({ type: FETCH_WAR_MOVIES, payload: data }),
      error => dispatch({ type: REQUEST_FAILED, payload: error })
    )
  }
}

//Fetch Westerns
export function fetchWesterns() {
  const request = axios.get(`${ROOT_URL}discover/movie?api_key=${API_KEY}&with_genres=37&language=en-US`);
  return (dispatch) => {
    request.then(
      data => dispatch({ type: FETCH_WESTERNS, payload: data }),
      error => dispatch({ type: REQUEST_FAILED, payload: error })
    )
  }
}

//Fetch SF
export function fetchSF() {
  const request = axios.get(`${ROOT_URL}discover/movie?api_key=${API_KEY}&with_genres=878&language=en-US`);
  return (dispatch) => {
    request.then(
      data => dispatch({ type: FETCH_SF, payload: data }),
      error => dispatch({ type: REQUEST_FAILED, payload: error })
    )
  }
}
