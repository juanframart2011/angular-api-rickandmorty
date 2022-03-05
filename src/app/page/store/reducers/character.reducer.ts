import { Action, createReducer, on } from '@ngrx/store';
import { CharacterState } from '../app.state';
import { successCharacterDetail, failsCharacterDetail } from '../actions/character.actions';
import {
	CharacterTypes,
	getAllCharacters,
	getDetailCharacter,
	successCharacters,
	failsCharacters
} from '../actions/character.actions';

export const characterAppState: CharacterState = {
	getAllCharacter: undefined,
	getDetailCharacter: undefined,
	errorMessage: undefined,
};

export const reducer = createReducer(
	characterAppState,

	//get detail
	on(getDetailCharacter, (state) => state),
	on(successCharacterDetail, (state, payload) => ({
		...state,
		getDetailCharacter: payload.character,
	})),
	on(failsCharacterDetail, (state, payload) => ({
		...state,
		errorMessage: payload.message,
	})),
	
	//get list
	on(getAllCharacters, (state) => state),
	on(successCharacters, (state, payload) => ({
		...state,
		getAllCharacter: payload.characters,
	})),
	on(failsCharacters, (state, payload) => ({
		...state,
		errorMessage: payload.message,
	}))
);

export function characterReducer(
  state: CharacterState | undefined,
  action: Action
) {
  return reducer(state, action);
}