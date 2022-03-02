import { createAction, props } from '@ngrx/store';
import { Result } from '../../../interface/result';
import { Location } from '../../../interface/location';

export enum LocationTypes {
	
	//list
	GET_ALL_LOCATION = '[GET] get all location',
	SUCCESS_ALL_LOCATION = '[SUCCESS] success all location',
	FAIL_ALL_LOCATION = '[FAIL] fail',
}

// list
export const getAllLocations = createAction(
  LocationTypes.GET_ALL_LOCATION,
  props<{ page: number }>()
);

export const successLocations = createAction(
  LocationTypes.SUCCESS_ALL_LOCATION,
  props<{ locations: Result<Location[]> }>()
);
export const failsLocations = createAction(
  LocationTypes.FAIL_ALL_LOCATION,
  props<{ message: string }>()
);