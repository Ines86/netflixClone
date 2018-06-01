import { FETCH_RECENT, REQUEST_FAILED } from '../actions';

export default (recent = [], action) => {
  switch (action.type) {
    case (FETCH_RECENT):
      return recent = action.payload.data.results;
    case (REQUEST_FAILED):
      return console.log(action.payload);
    default:
      return recent;
  }
};