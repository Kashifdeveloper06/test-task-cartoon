import {
    ON_CHARACTER_DETAILS_RESPONSE
} from '../actions/types'

const INITIAL_STATE = {
    characterDetails: {}
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case ON_CHARACTER_DETAILS_RESPONSE:
            return {
                ...state,
                characterDetails: action.payload
            };
        default:
            return state;
    }
}