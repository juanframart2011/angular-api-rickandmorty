import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodeRoutingModule } from './episode-routing.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { episodeFeatureName } from '../store/app.state';
import { episodeReducer } from '../store/reducers/episode.reducer';
import { EpisodeEffects } from '../store/effects/episode.effect';

import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { EpisodeComponent } from './episode.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [EpisodeComponent, DetailComponent],
  imports: [
    MatSortModule,
    MatTableModule,
    CommonModule,
    EpisodeRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot(),
    StoreModule.forFeature(episodeFeatureName, episodeReducer),
		EffectsModule.forFeature([EpisodeEffects]),
    MatPaginatorModule,
    MatInputModule,
		MatFormFieldModule,
    MatProgressSpinnerModule
  ]
})
export class EpisodeModule { }
