import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
	EpisodeTypes,
	getAllEpisodes,
	successEpisodes,
	failsEpisodes
} from '../actions/episode.actions';
import { map, switchMap } from 'rxjs/operators';
import { catchError } from 'rxjs';
import { of } from 'rxjs';
import { I } from '@angular/cdk/keycodes';
import { EpisodeService } from '../../../service/episode.service';

@Injectable()
export class EpisodeEffects {

	constructor(
		private episodeService: EpisodeService,
		private actions$: Actions
	){}

	getAllEpisodes$ = createEffect(() =>
		this.actions$.pipe(
			ofType(EpisodeTypes.GET_ALL_EPISODE),
			map((action: any) => action),
			switchMap((value) =>
				this.episodeService.list( value.page ).pipe(
					map((data) => {
						
						return successEpisodes({ episodes: data });
					}),
					catchError((error) =>

						of(failsEpisodes({ message: 'Error al cargar los datos' }))
					)
				)
			)
		)
	);
}