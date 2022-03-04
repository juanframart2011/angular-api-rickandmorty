import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationRoutingModule } from './location-routing.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { locationFeatureName } from '../store/app.state';
import { locationReducer } from '../store/reducers/location.reducer';
import { LocationEffects } from '../store/effects/location.effect';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LocationRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot(),
    StoreModule.forFeature(locationFeatureName, locationReducer),
		EffectsModule.forFeature([LocationEffects]),
  ]
})
export class LocationModule { }
