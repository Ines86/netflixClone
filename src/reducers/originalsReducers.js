import { FETCH_ORIGINALS, REQUEST_FAILED } from '../actions';

export default (originals = [], action) => {
  switch (action.type) {
    case (FETCH_ORIGINALS):
      return originals = action.payload.data.results;
    case (REQUEST_FAILED):
      return console.log(action.payload);
    default:
      return originals;
  }
};