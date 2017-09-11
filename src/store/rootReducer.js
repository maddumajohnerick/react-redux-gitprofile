import { combineReducers } from 'redux';
import gitProf from '../reducers/gitProfReducer';

const rootReducer = combineReducers({
  gitProf,
});

export default rootReducer;
