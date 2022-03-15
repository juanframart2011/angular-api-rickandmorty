import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationRoutingModule } from './location-routing.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { locationFeatureName } from '../store/app.state';
import { locationReducer } from '../store/reducers/location.reducer';
import { LocationEffects } from '../store/effects/location.effect';

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
import { DetailComponent } from './detail/detail.component';

@NgModule({
	declarations: [
		LocationComponent,
		DetailComponent
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
