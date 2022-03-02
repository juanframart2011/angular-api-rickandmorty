import { Action, createReducer, on } from '@ngrx/store';
import { LocationState } from '../app.state';
import {
	LocationTypes,
	getAllLocations,
	successLocations,
	failsLocations
} from '../actions/location.actions';

export const locationAppState: LocationState = {
	getAllLocation: undefined,
	errorMessage: undefined,
};

export const reducer = createReducer(
	locationAppState,
	
	//get list
	on(getAllLocations, (state) => state),
	on(successLocations, (state, payload) => ({
		...state,
		getAllLocation: payload.locations,
	})),
	on(failsLocations, (state, payload) => ({
		...state,
		errorMessage: payload.message,
	}))
);

export function locationReducer(
  state: LocationState | undefined,
  action: Action
) {
  return reducer(state, action);
}