import axios from 'axios';

export const FETCH_TVSHOWS = "fetch_tvshows";
export const FETCH_UPCOMING = "fetch_upcoming";
export const FETCH_MY_LIST = "fetch_my_list";
export const REQUEST_FAILED = "request_failed";
export const FETCH_RECENT = "fetch_recent";
export const FETCH_MOVIES = "fetch_movies";
export const FETCH_ORIGINALS = "fetch_originals";
export const FETCH_SEARCH_RESULTS = "fetch_search_results";
export const FETCH_DETAILS = "fetch_details";
export const FETCH_TV_DETAILS = "fetch_tv_details";

const ROOT_URL = "https://api.themoviedb.org/3/";
const API_KEY = "5f24fb50bca42571c80a514e5de30c5b";

// Fetch Popular TV Shows
export function fetchTvShows() {
  const request = axios.get(`${ROOT_URL}discover/tv?api_key=${API_KEY}&with_genres=18`);
  return (dispatch) => {
    request.then(
      data => dispatch({ type: FETCH_TVSHOWS, payload: data }),
      error => dispatch({ type: REQUEST_FAILED, payload: error })
    )
  }
}

// Fetch Upcoming Movies
export function fetchUpcoming() {
  const request = axios.get(`${ROOT_URL}discover/movie?api_key=${API_KEY}&with_genres=18`);
  return (dispatch) => {
    request.then(
      data => dispatch({ type: FETCH_UPCOMING, payload: data }),
      error => dispatch({ type: REQUEST_FAILED, payload: error })
    )
  }
}

// Fetch My List
export function fetchMyList() {
  const request = axios.get(`${ROOT_URL}tv/57243?api_key=${API_KEY}`);
  return (dispatch) => {
    request.then(
      data => dispatch({ type: FETCH_MY_LIST, payload: data }),
      error => dispatch({ type: REQUEST_FAILED, payload: error })
    )
  }
}

// Fetch Details
export function fetchDetails(id, media_type) {
 const request = axios.get(`${ROOT_URL}${media_type ? media_type : "movie"}/${id}?api_key=${API_KEY}`);
  return (dispatch) => {
    request.then(
      data => dispatch({ type: FETCH_DETAILS, payload: data }),
      error => dispatch({ type: REQUEST_FAILED, payload: error })
    )
  }
}

// Fetch Tv Details
export function fetchTvDetails(id) {
  const request = axios.get(`${ROOT_URL}tv/${id}?api_key=${API_KEY}&language=en-US`);
  return (dispatch) => {
    request.then(
      data => dispatch({ type: FETCH_TV_DETAILS, payload: data }),
      error => dispatch({ type: REQUEST_FAILED, payload: error })
    )
  }
}

// Fetch Recently Added
export function fetchRecentlyAdded() {
  const request = axios.get(`${ROOT_URL}movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`);
  return (dispatch) => {
    request.then(
      data => dispatch({ type: FETCH_RECENT, payload: data }),
      error => dispatch({ type: REQUEST_FAILED, payload: error })
    )
  }
}

// Fetch Originals
export function fetchOriginals() {
  const request = axios.get(`${ROOT_URL}discover/tv?sort_by=popularity&with_networks=213&api_key=${API_KEY}&language=en-US&page=1`);
  return (dispatch) => {
    request.then(
      data => dispatch({ type: FETCH_ORIGINALS, payload: data }),
      error => dispatch({ type: REQUEST_FAILED, payload: error })
    )
  }
}

// Fetch Search Results
export function fetchSearchResults(searchTerm) {
  const request = axios.get(`${ROOT_URL}search/multi?api_key=${API_KEY}&query=${searchTerm}`);

  return (dispatch) => {
    request.then(
      data => dispatch({ type: FETCH_SEARCH_RESULTS, payload: data }),
      error => dispatch({ type: REQUEST_FAILED, payload: error })
    )
  }
}

