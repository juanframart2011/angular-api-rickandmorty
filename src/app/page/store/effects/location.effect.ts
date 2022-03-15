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
						
						/*let resultsCurrent:Location[] = [];

						data.results.filter( v =>{
							debugger;
							let characters:string[] = [];
							
							v.residents.filter( c =>{

								let strings = c.split( "/api/character/" );
								characters.push( strings[1] );
							});

							/*resultsCurrent.push({
								id: value.id,
								name: value.name,
								type: value.type,
								dimension: value.dimension,
								residents: characters,
								url: value.url,
								created: value.created
							});
						});
						/*debugger;

						let dataFinish = {
							info: data.info,
							results: resultsCurrent
						}*/

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