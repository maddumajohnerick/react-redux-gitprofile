export default function gitProfReducer(
  state = [],
  action,
) {
  switch (action.type) {
    case 'FIND_USER_SUCCESS':
      return action.gitProf;

    default:
      return state;
  }
}
