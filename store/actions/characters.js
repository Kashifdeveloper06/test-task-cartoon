import {
  FETCH_CHARACTER_DETAILS,
  ON_CHARACTER_DETAILS_RESPONSE
} from './types';

export const fetchCharacterDetails = (payload) => ({
  type: FETCH_CHARACTER_DETAILS,
  payload
});

export const onCharacterDetailsResponse = (payload) => ({
  type: ON_CHARACTER_DETAILS_RESPONSE,
  payload
});
