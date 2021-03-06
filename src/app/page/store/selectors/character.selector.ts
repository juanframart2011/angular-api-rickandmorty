import { createFeatureSelector, createSelector } from '@ngrx/store';
import { characterFeatureName, CharacterState } from '../app.state';

export const getCharacterFeatureState = createFeatureSelector<CharacterState>(characterFeatureName);

export const selectCharacter = createSelector(
  getCharacterFeatureState,
  (state: CharacterState) => state.getAllCharacter
);

export const selectCharacterDetail = createSelector(
  getCharacterFeatureState,
  (state: CharacterState) => state.getDetailCharacter
);

export const selectErrors = createSelector(
  getCharacterFeatureState,
  (state: CharacterState) => state.errorMessage
);