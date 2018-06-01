import { FETCH_UPCOMING, REQUEST_FAILED } from '../actions';

export default (upcoming = [], action) => {
  switch (action.type) {
    case (FETCH_UPCOMING):
      return upcoming = action.payload.data.results;
    case (REQUEST_FAILED):
      return console.log(action.payload);
    default:
      return upcoming;
  }
};