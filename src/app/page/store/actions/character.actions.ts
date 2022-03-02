import { createAction, props } from '@ngrx/store';
import { Result } from '../../../interface/result';
import { Character } from '../../../interface/character';

export enum CharacterTypes {
	
	//list
	GET_ALL_CHARACTER = '[GET] get all character',
	SUCCESS_ALL_CHARACTER = '[SUCCESS] success all character',
	FAIL_ALL_CHARACTER = '[FAIL] fail',
}

// list
export const getAllCharacters = createAction(
  CharacterTypes.GET_ALL_CHARACTER,
  props<{ page: number }>()
);

export const successCharacters = createAction(
  CharacterTypes.SUCCESS_ALL_CHARACTER,
  props<{ characters: Result<Character[]> }>()
);
export const failsCharacters = createAction(
  CharacterTypes.FAIL_ALL_CHARACTER,
  props<{ message: string }>()
);