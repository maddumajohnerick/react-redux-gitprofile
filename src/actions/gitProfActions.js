import axios from 'axios';

export function getUserSuccess(gitProf) {
  return { type: 'FIND_USER_SUCCESS', gitProf };
}

export function setRate(rateLimit) {
  return { type: 'SET_RATE', rateLimit };
}

export function getUser(username) {
  return function (dispatch) {
    dispatch(setRate(false));
    return axios({
      method: 'get',
      url: `https://api.github.com/users/${username}/repos`,
    })
    .then(function(response) {
      console.log(response);
      dispatch(getUserSuccess(response.data));
    })
    .catch(e => {
      console.log(e);
      dispatch(setRate(true));
    });
  };

}
