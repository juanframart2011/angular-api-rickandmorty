import { Action, createReducer, on } from '@ngrx/store';
import { EpisodeState } from '../app.state';
import {
	EpisodeTypes,
	getAllEpisodes,
	successEpisodes,
	failsEpisodes
} from '../actions/episode.actions';

export const episodeAppState: EpisodeState = {
	getAllEpisode: undefined,
	errorMessage: undefined,
};

export const reducer = createReducer(
	
	episodeAppState,
	
	//get list
	on(getAllEpisodes, (state) => state),
	on(successEpisodes, (state, payload) => ({
		...state,
		getAllEpisode: payload.episodes,
	})),
	on(failsEpisodes, (state, payload) => ({
		...state,
		errorMessage: payload.message,
	}))
);

export function episodeReducer(
  state: EpisodeState | undefined,
  action: Action
) {
  return reducer(state, action);
}