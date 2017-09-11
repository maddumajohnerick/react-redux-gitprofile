export default function rateLimitReducer(
  state = false,
  action,
) {
  switch (action.type) {
    case 'SET_RATE':
      return action.rateLimit;

    default:
      return state;
  }
}
