import { FETCH_TVSHOWS, REQUEST_FAILED } from '../actions';

export default (tvshows = [], action) => {
  switch (action.type) {
    case (FETCH_TVSHOWS):
      return tvshows = action.payload.data.results;
    case (REQUEST_FAILED):
      return console.log(action.payload);
    default:
      return tvshows;
  }
};