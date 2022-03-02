import { Action, createReducer, on } from '@ngrx/store';
import { CharacterState } from '../app.state';
import {
	CharacterTypes,
	getAllCharacters,
	successCharacters,
	failsCharacters
} from '../actions/character.actions';

export const characterAppState: CharacterState = {
	getAllCharacter: undefined,
	errorMessage: undefined,
};

export const reducer = createReducer(
	characterAppState,
	
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