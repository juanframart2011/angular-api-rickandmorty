import { createFeatureSelector, createSelector } from '@ngrx/store';
import { pipe } from 'rxjs';
import { filter } from 'rxjs/operators';
import { episodeFeatureName, EpisodeState } from '../app.state';

export const getEpisodeFeatureState = createFeatureSelector<EpisodeState>(episodeFeatureName);

export const selectDigitalFile = createSelector(
  getEpisodeFeatureState,
  (state: EpisodeState) => state.getAllEpisode
);

export const selectErrors = createSelector(
  getEpisodeFeatureState,
  (state: EpisodeState) => state.errorMessage
);