import * as types from "../actions/types";

export function authInfo(state = { loggedIn: false }, action) {
  switch (action.type) {
    case types.SAVE_USER_INFO:
      let newState = {
        loggedIn: action.loggedIn,
        userInfo: action.userInfo,
        token: action.token
      };
      return newState;
    default:
      return state;
  }
}
