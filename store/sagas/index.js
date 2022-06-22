import { takeEvery, all } from 'redux-saga/effects';

import * as types from '../actions/types';

import {
  fetchEpisodes,
  fetchEpisodeDetails,
} from './episodes';

import {
  fetchCharacterDetails,
} from './characters';

export default function* watch() {
  yield all([
    takeEvery(types.FETCH_EPISODES, fetchEpisodes),
    takeEvery(types.FETCH_EPISODE_DETAILS, fetchEpisodeDetails),
    takeEvery(types.FETCH_CHARACTER_DETAILS, fetchCharacterDetails),
  ]);
}
