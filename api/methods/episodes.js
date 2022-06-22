import { getRequest } from '../index';

export const getEpisodesAPI = () => getRequest("/episode");
export const getEpisodeDetailsAPI = (episodeId) => getRequest(`/episode/${episodeId}`);
