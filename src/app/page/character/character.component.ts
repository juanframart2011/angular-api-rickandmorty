import { AfterViewInit, Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { CharacterState } from '../store/app.state';
import { getAllCharacters } from '../store/actions/character.actions';
import { selectCharacter, selectErrors } from '../store/selectors/character.selector';
import { Character } from '../../interface/character';

import {MatPaginator, PageEvent} from '@angular/material/paginator';
import { Info } from '../../interface/info';

@Component({
	selector: 'app-character',
	templateUrl: './character.component.html',
	styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements AfterViewInit, OnInit, OnDestroy{

	@ViewChild(MatPaginator) paginator!: MatPaginator;

	selectCharacter$ = this.storeCharacter.pipe(select(selectCharacter));
	selectErrors$ = this.storeCharacter.pipe(select(selectErrors));

	public loadingCharacter:boolean = true;
	public pageSize:number = 20;
	public page:number = 1;
	public characters:any[] = [];
	public info:any;

	constructor(
		private storeCharacter: Store<CharacterState>
	){}

	ngAfterViewInit(){}

	ngOnInit(){
		
		this._load();
		this.execute();
	}

	_load(){
		
		this.storeCharacter.dispatch( getAllCharacters({
			page: this.page
		}) );
	}

	execute(){

		this.selectCharacter$.subscribe((value) => {
				
			if (value != undefined) {
				
				this.loadingCharacter = false;
				this.characters = value.results;
				this.info = value.info;
				console.log( this.characters );
			}
		});

		this.selectErrors$.subscribe((value) => {

			console.warn( 'Charcters Error', value );
			//this.dialogService.openError('Expedientes Error', value ?? '');
		});
	}

	applyFilter(event: Event) {
		
		const filterValue = (event.target as HTMLInputElement).value;
	}

	handlePageEvent( event:PageEvent ){

		this.loadingCharacter = true;
		console.info( "paginator evento => ", event );
		if( event.pageSize != this.pageSize  ){

		}
		else{

			this.page = event.pageIndex + 1;
			/*console.log( "actual => ", this.page );
			if( this.page < pageNext ){

				console.info( "sumar" );
				this.page = pageNext;
			}
			else{

				console.info( "restar" );
				this.page = event.pageIndex;
			}*/
			console.log( "pages => ", event.pageIndex, " actual => ", this.page );
			this._load();
		}
	}

	ngOnDestroy() {
		
		//this.storeCharacter.
	}
}