import { createFeatureSelector, createSelector } from '@ngrx/store';
import { episodeFeatureName, EpisodeState } from '../app.state';

export const getEpisodeFeatureState = createFeatureSelector<EpisodeState>(episodeFeatureName);

export const selectEpisode = createSelector(
  getEpisodeFeatureState,
  (state: EpisodeState) => state.getAllEpisode
);

export const selectErrors = createSelector(
  getEpisodeFeatureState,
  (state: EpisodeState) => state.errorMessage
);