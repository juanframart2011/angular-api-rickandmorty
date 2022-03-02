import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
	CharacterTypes,
	getAllCharacters,
	successCharacters,
	failsCharacters
} from '../actions/character.actions';
import { map, switchMap } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { I } from '@angular/cdk/keycodes';
import { CharacterService } from '../../../service/character.service';

@Injectable()
export class CharacterEffects {

	constructor(
		private characterService: CharacterService,
		private actions$: Actions
	){}

	getAllCharacters$ = createEffect(() =>
		this.actions$.pipe(
			ofType(CharacterTypes.GET_ALL_CHARACTER),
			map((action: any) => action),
			switchMap((value) =>
				this.characterService.list( value.page ).pipe(
					map((data) => {
						
						return successCharacters({ characters: data });
					}),
					catchError((error) =>

						of(failsCharacters({ message: 'Error al cargar los datos' }))
					)
				)
			)
		)
	);
}