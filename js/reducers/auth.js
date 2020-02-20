import * as types from "../actions/types";

export function authInfo(state = { loggedIn: false, loading: false }, action) {
  switch (action.type) {
    case types.LOADING:
      return {
        loading: true,
        loggedIn: state.loggedIn,
        userInfo: state.userInfo,
        token: state.token
      };
    case types.SAVE_USER_INFO:
      return {
        loading: false,
        loggedIn: action.loggedIn,
        userInfo: action.userInfo,
        token: action.token
      };
    default:
      return state;
  }
}
