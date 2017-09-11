import { combineReducers } from 'redux';
import gitProf from '../reducers/gitProfReducer';
import rateLimit from '../reducers/rateLimitReducer';

const rootReducer = combineReducers({
  gitProf,
  rateLimit,
});

export default rootReducer;
