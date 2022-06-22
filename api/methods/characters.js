import { getRequest } from '../index';

export const getCharacterDetailsAPI = (charecterId) => getRequest(`/character/${charecterId}`);
