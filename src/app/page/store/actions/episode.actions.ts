import { createAction, props } from '@ngrx/store';
import { Result } from '../../../interface/result';
import { Episode } from '../../../interface/episode';

export enum EpisodeTypes {
	
	//list
	GET_ALL_EPISODE = '[GET] get all episode',
	SUCCESS_ALL_EPISODE = '[SUCCESS] success all episode',
	FAIL_ALL_EPISODE = '[FAIL] fail',
}

// list
export const getAllEpisodes = createAction(
  EpisodeTypes.GET_ALL_EPISODE,
  props<{ page: number }>()
);

export const successEpisodes = createAction(
  EpisodeTypes.SUCCESS_ALL_EPISODE,
  props<{ episodes: Result<Episode[]> }>()
);
export const failsEpisodes = createAction(
  EpisodeTypes.FAIL_ALL_EPISODE,
  props<{ message: string }>()
);