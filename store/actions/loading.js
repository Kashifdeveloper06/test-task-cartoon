import {
  ENABLE_LOADING,
  DISABLE_LOADING,
} from './types';

export const enableLoader = () => ({
  type: ENABLE_LOADING,
});

export const disableLoader = () => ({
  type: DISABLE_LOADING,
});