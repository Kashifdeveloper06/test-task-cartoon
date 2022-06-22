import {
  FETCH_EPISODES,
  ON_EPISODES_RESPONSE,
  FETCH_EPISODE_DETAILS,
  ON_EPISODE_DETAILS_RESPONSE,
} from './types';

export const fetchEpisodes = () => ({
  type: FETCH_EPISODES
});

export const onEpisodesResponse = (payload) => ({
  type: ON_EPISODES_RESPONSE,
  payload
});

export const fetchEpisodeDetails = (payload) => ({
  type: FETCH_EPISODE_DETAILS,
  payload
});

export const onEpisodeDetailsResponse = (payload) => ({
  type: ON_EPISODE_DETAILS_RESPONSE,
  payload
});