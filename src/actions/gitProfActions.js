import axios from 'axios';

export function getUserSuccess(gitProf) {
  return { type: 'FIND_USER_SUCCESS', gitProf };
}

export function getUser(username) {
  console.log('find me');
  return function (dispatch) {
    axios({
      method: 'get',
      url: `https://api.github.com/users/${username}/repos`,
    })
    .then(function(response) {
      console.log(response);
      dispatch(getUserSuccess(response));
    });
  };

}
