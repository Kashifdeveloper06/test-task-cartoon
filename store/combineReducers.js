import { combineReducers } from 'redux';
import episodesReducer from './reducers/episodes';
import charactersReducer from './reducers/characters';
import loadingReducer from './reducers/loading';

export default combineReducers({
  episodes: episodesReducer,
  characters: charactersReducer,
  loading: loadingReducer,
});
