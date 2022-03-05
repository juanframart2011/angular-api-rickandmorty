import { createAction, props } from '@ngrx/store';
import { Result } from '../../../interface/result';
import { Character } from '../../../interface/character';

export enum CharacterTypes {

	//detail
	GET_DETAIL_CHARACTER = '[GET] get detail character',
	SUCCESS_DETAIL_CHARACTER = '[SUCCESS] success detail character',
	FAIL_DETAIL_CHARACTER = '[FAIL] fail',
	
	//list
	GET_ALL_CHARACTER = '[GET] get all character',
	SUCCESS_ALL_CHARACTER = '[SUCCESS] success all character',
	FAIL_ALL_CHARACTER = '[FAIL] fail',
}

// detail
export const getDetailCharacter = createAction(
	CharacterTypes.GET_DETAIL_CHARACTER,
	props<{ id: number }>()
);
	
export const successCharacterDetail = createAction(
	CharacterTypes.SUCCESS_DETAIL_CHARACTER,
	props<{ character: Character }>()
);

export const failsCharacterDetail = createAction(
	CharacterTypes.FAIL_DETAIL_CHARACTER,
	props<{ message: string }>()
);

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