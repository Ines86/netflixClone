import { FETCH_DETAILS, FETCH_TV_DETAILS, REQUEST_FAILED } from '../actions';

export default (details = [], action) => {
  switch (action.type) {
    case (FETCH_DETAILS):
      return details = action.payload.data;
    case (FETCH_TV_DETAILS):
      return details = action.payload.data;
    case (REQUEST_FAILED):
      return console.log(action.payload);
    default:
      return details;
  }
};