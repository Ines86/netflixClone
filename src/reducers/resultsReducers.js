import { FETCH_SEARCH_RESULTS, REQUEST_FAILED } from '../actions';

export default (results = [], action) => {
  switch (action.type) {
    case (FETCH_SEARCH_RESULTS):
      return results = action.payload.data.results;
    case (REQUEST_FAILED):
      return console.log(action.payload);
    default:
      return results;
  }
};