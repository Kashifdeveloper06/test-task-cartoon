import { call, put } from 'redux-saga/effects';
import { showErrorMsg } from '../../utils/flashMessage';

import {
    enableLoader,
    disableLoader
} from '../actions/loading';

import {
    onCharacterDetailsResponse
} from '../actions/characters';

import {
    getCharacterDetailsAPI
} from '../../api/methods/characters';

export function* fetchCharacterDetails({ payload }) {
    try {
        put(disableLoader())
        const linkParts = payload.split("/")
        const characterId = linkParts.pop()
        console.log('fetchCharacterDetails', 'call', characterId);
        const response = yield call(getCharacterDetailsAPI, characterId);
        console.log('fetchCharacterDetails', 'response.status', response.status, response.data);
        yield put(onCharacterDetailsResponse(response.data))
    } catch (err) {
        console.log('fetchCharacterDetails', 'err', err);
        showErrorMsg('Oops! Something went wrong! Please retry');
    } finally {
        put(disableLoader())
    }
}
