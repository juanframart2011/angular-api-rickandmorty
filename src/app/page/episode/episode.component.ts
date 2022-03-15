import { Component, ViewChild, OnInit, OnDestroy, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { select, Store } from '@ngrx/store';
import { EpisodeState } from '../store/app.state';
import { getAllEpisodes } from '../store/actions/episode.actions';
import { selectEpisode, selectErrors } from '../store/selectors/episode.selector';
import { Episode } from '../../interface/episode';

import {MatPaginator, PageEvent} from '@angular/material/paginator';
import { Info } from '../../interface/info';
import { DetailComponent } from 'src/app/page/location/detail/detail.component';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss']
})
export class EpisodeComponent implements OnInit, OnDestroy{

	@ViewChild(MatPaginator) paginator!: MatPaginator;

	selectEpisode$ = this.storeEpisode.pipe(select(selectEpisode));
	selectErrors$ = this.storeEpisode.pipe(select(selectErrors));

	public loadingEpisode:boolean = true;
	public pageSize:number = 20;
	public page:number = 1;
	public episodes:any[] = [];
	public info:any;
	public episodesCurrent:any[] = [];

	constructor(
		private storeEpisode: Store<EpisodeState>,
		public dialog: MatDialog
	){}

	ngOnInit(){
		
		this._load();
		this.execute();
	}

	_load(){
		
		this.storeEpisode.dispatch( getAllEpisodes({
			page: this.page
		}) );
	}

	execute(){

		this.selectEpisode$.subscribe((value) => {
			
			if (value != undefined) {
				
				this.loadingEpisode = false;
				this.episodes = value.results;
				this.episodesCurrent = this.episodes;
				this.info = value.info;
			}
		});

		this.selectErrors$.subscribe((value) => {

			console.warn( 'Episodes Error', value );
		});
	}

	applyFilter(event: Event) {
		
		const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
		let search = this.episodesCurrent.filter( c => c.name.includes( filterValue ) );
		
		this.episodes = search;
	}

	handlePageEvent( event:PageEvent ){

		this.loadingEpisode = true;
		
		this.page = event.pageIndex + 1;
		this._load();
	}

	openDialog( characters:string[], locationName:string ){

		if( characters.length > 0 ){
			
			this.dialog.open(DetailComponent, {
				data: {
					characters:characters,
					locationName: locationName,
					type:2
				}
			});
		}
		else{

			alert( "No found episodes" );
		}
	}

	ngOnDestroy() {
		
		//this.storeEpisode.
	}
}