import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationRoutingModule } from './location-routing.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { locationFeatureName } from '../store/app.state';
import { locationReducer } from '../store/reducers/location.reducer';
import { LocationEffects } from '../store/effects/location.effect';
import { DetailComponent } from './detail/detail.component';

import {MatDialogModule} from '@angular/material/dialog';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { LocationComponent } from './location.component';
import { CharacterUrlLocationPipe } from 'src/app/pipe/character-url-location.pipe';

@NgModule({
	declarations: [
		LocationComponent,
		DetailComponent,
		CharacterUrlLocationPipe
	],
	imports: [
		CommonModule,
		LocationRoutingModule,
		StoreModule.forRoot({}),
		EffectsModule.forRoot(),
		StoreModule.forFeature(locationFeatureName, locationReducer),
		EffectsModule.forFeature([LocationEffects]),
		MatPaginatorModule,
		MatInputModule,
		MatFormFieldModule,
		MatProgressSpinnerModule,
		MatCardModule,
		MatButtonModule,
		MatSortModule,
		MatTableModule,
		MatDialogModule
	]
})
export class LocationModule { }
