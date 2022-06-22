import { call, put } from 'redux-saga/effects';
import { showErrorMsg } from '../../utils/flashMessage';

import {
    enableLoader,
    disableLoader
} from '../actions/loading';

import {
    onEpisodesResponse,
    onEpisodeDetailsResponse,
} from '../actions/episodes';

import {
    getEpisodesAPI,
    getEpisodeDetailsAPI
} from '../../api/methods/episodes'

export function* fetchEpisodes() {
    try {
        put(enableLoader())
        console.log('fetchEpisodes', 'call');
        const response = yield call(getEpisodesAPI);
        console.log('fetchEpisodes', 'response.status', response.status);
        yield put(onEpisodesResponse(response.data?.results))
    } catch (err) {
        console.log('fetchEpisodes', 'err', err);
        showErrorMsg('Oops! Something went wrong! Please retry');
    } finally {
        put(disableLoader())
    }
}

export function* fetchEpisodeDetails({ payload }) {
    try {
        put(enableLoader())
        console.log('fetchEpisodeDetails', 'call');
        const response = yield call(getEpisodeDetailsAPI, payload);
        console.log('fetchEpisodeDetails', 'response.status', response.status);
        yield put(onEpisodeDetailsResponse(response.data))
    } catch (err) {
        console.log('fetchEpisodeDetails', 'err', err);
        showErrorMsg('Oops! Something went wrong! Please retry');
    } finally {
        put(disableLoader())
    }
}
