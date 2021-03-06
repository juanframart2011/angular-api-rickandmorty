import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
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
export class CharacterComponent implements OnInit, OnDestroy{

	@ViewChild(MatPaginator) paginator!: MatPaginator;

	selectCharacter$ = this.storeCharacter.pipe(select(selectCharacter));
	selectErrors$ = this.storeCharacter.pipe(select(selectErrors));

	public loadingCharacter:boolean = true;
	public pageSize:number = 20;
	public page:number = 1;
	public characters:any[] = [];
	public info:any;
	public charactersCurrent:any[] = [];

	constructor(
		private storeCharacter: Store<CharacterState>
	){}

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
				this.charactersCurrent = this.characters;
				this.info = value.info;
			}
		});

		this.selectErrors$.subscribe((value) => {

			console.warn( 'Charcters Error', value );
		});
	}

	applyFilter(event: Event) {
		
		const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
		let search = this.charactersCurrent.filter( c => c.name.includes( filterValue ) );
		
		this.characters = search;
	}

	handlePageEvent( event:PageEvent ){

		this.loadingCharacter = true;
		
		this.page = event.pageIndex + 1;
		this._load();
	}

	ngOnDestroy() {
		
		//this.storeCharacter.
	}
}