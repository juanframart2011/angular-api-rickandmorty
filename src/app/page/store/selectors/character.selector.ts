import { createFeatureSelector, createSelector } from '@ngrx/store';
import { pipe } from 'rxjs';
import { filter } from 'rxjs/operators';
import { characterFeatureName, CharacterState } from '../app.state';

export const getCharacterFeatureState = createFeatureSelector<CharacterState>(characterFeatureName);

export const selectDigitalFile = createSelector(
  getCharacterFeatureState,
  (state: CharacterState) => state.getAllCharacter
);

export const selectErrors = createSelector(
  getCharacterFeatureState,
  (state: CharacterState) => state.errorMessage
);