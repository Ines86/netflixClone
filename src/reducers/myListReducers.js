import { FETCH_MY_LIST, REQUEST_FAILED } from '../actions';

export default (mylist = [], action) => {
  switch (action.type) {
    case (FETCH_MY_LIST):
      return mylist = action.payload.data;
    case (REQUEST_FAILED):
      return console.log(action.payload);
    default:
      return mylist;
  }
};