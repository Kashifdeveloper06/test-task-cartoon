import {
  ENABLE_LOADING,
  DISABLE_LOADING
} from '../actions/types';

const initialState = {
  isLoading: false,
};

const loadingReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ENABLE_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case DISABLE_LOADING:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default loadingReducer;
