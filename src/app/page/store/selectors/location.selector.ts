import { createFeatureSelector, createSelector } from '@ngrx/store';
import { locationFeatureName, LocationState } from '../app.state';

export const getLocationFeatureState = createFeatureSelector<LocationState>(locationFeatureName);

export const selectLocation = createSelector(
  getLocationFeatureState,
  (state: LocationState) => state.getAllLocation
);

export const selectErrors = createSelector(
  getLocationFeatureState,
  (state: LocationState) => state.errorMessage
);