import {
    ON_EPISODES_RESPONSE,
    ON_EPISODE_DETAILS_RESPONSE,
} from '../actions/types'

const INITIAL_STATE = {
    episodesList: [],
    episodeDetails: {},
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case ON_EPISODES_RESPONSE:
            return {
                ...state,
                episodesList: action.payload
            };
        case ON_EPISODE_DETAILS_RESPONSE:
            return {
                ...state,
                episodeDetails: action.payload
            };
        default:
            return state;
    }
}