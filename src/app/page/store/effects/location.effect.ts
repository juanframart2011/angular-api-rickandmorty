import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
	LocationTypes,
	getAllLocations,
	successLocations,
	failsLocations
} from '../actions/location.actions';
import { map, switchMap } from 'rxjs/operators';
import { catchError } from 'rxjs';
import { of } from 'rxjs';
import { I } from '@angular/cdk/keycodes';
import { LocationService } from '../../../service/location.service';

@Injectable()
export class LocationEffects {

	constructor(
		private locationService: LocationService,
		private actions$: Actions
	){}

	getAllLocations$ = createEffect(() =>
		this.actions$.pipe(
			ofType(LocationTypes.GET_ALL_LOCATION),
			map((action: any) => action),
			switchMap((value) =>
				this.locationService.list( value.page ).pipe(
					map((data) => {
						
						return successLocations({ locations: data });
					}),
					catchError((error) =>

						of(failsLocations({ message: 'Error al cargar los datos' }))
					)
				)
			)
		)
	);
}