import { FETCH_ADMINS } from "../actions";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_ADMINS:
      return actions.payload.data;
    default:
      return state;
  }
};
