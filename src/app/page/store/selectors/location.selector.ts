import { createFeatureSelector, createSelector } from '@ngrx/store';
import { pipe } from 'rxjs';
import { filter } from 'rxjs/operators';
import { locationFeatureName, LocationState } from '../app.state';

export const getLocationFeatureState = createFeatureSelector<LocationState>(locationFeatureName);

export const selectDigitalFile = createSelector(
  getLocationFeatureState,
  (state: LocationState) => state.getAllLocation
);

export const selectErrors = createSelector(
  getLocationFeatureState,
  (state: LocationState) => state.errorMessage
);