import * as types from "./types";

function asyncSetTimeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function performLogin(username, password) {
  return async (dispatch, getState) => {
    try {
      // const result = await fetch(
      //   `https://appserver.dummywebsite.net/auth/login`,
      //   {
      //     method: "POST",
      //     headers: {
      //       Accept: "application/json",
      //       "Content-Type": "application/json"
      //     },
      //     body: JSON.stringify({ username, password })
      //   }
      // ).then(res => res.json());

      // Using setTimeout to imitate async server call. Uncomment the above to create an actual server call.
      await asyncSetTimeout(500);
      const result = {
        userInfo: {
          firstName: 'Thierry',
          lastName: 'Henry',
          id: 53475
        },
        token: "deadbeef1234"
      };


      if (result.userInfo) {
        dispatch(
          setLoginInfo({
            userInfo: result.userInfo,
            token: result.token,
            loggedIn: true
          })
        );
      } else {
        return result;
      }
    } catch (error) {
      console.error(error);
      return error;
    }
  };
}

export function performLogout() {
  return dispatch => {
    dispatch(
      setLoginInfo({
        userInfo: null,
        token: null,
        loggedIn: false
      })
    );
  };
}

export function setLoginInfo({
  userInfo,
  token,
  loggedIn
}) {
  return {
    type: types.SAVE_USER_INFO,
    userInfo,
    token,
    loggedIn
  };
}
