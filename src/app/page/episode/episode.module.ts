import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodeRoutingModule } from './episode-routing.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { episodeFeatureName } from '../store/app.state';
import { episodeReducer } from '../store/reducers/episode.reducer';
import { EpisodeEffects } from '../store/effects/episode.effect';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EpisodeRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot(),
    StoreModule.forFeature(episodeFeatureName, episodeReducer),
		EffectsModule.forFeature([EpisodeEffects]),
  ]
})
export class EpisodeModule { }
