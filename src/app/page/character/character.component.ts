import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { CharacterState } from '../store/app.state';
import { getAllCharacters } from '../store/actions/character.actions';
import { selectCharacter, selectErrors } from '../store/selectors/character.selector';
import { Character } from '../../interface/character';


import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface UserData {
	id: string;
	name: string;
	progress: string;
	fruit: string;
  }

/** Constants used to fill up our data base. */
const FRUITS: string[] = [
	'blueberry',
	'lychee',
	'kiwi',
	'mango',
	'peach',
	'lime',
	'pomegranate',
	'pineapple',
  ];
  const NAMES: string[] = [
	'Maia',
	'Asher',
	'Olivia',
	'Atticus',
	'Amelia',
	'Jack',
	'Charlotte',
	'Theodore',
	'Isla',
	'Oliver',
	'Isabella',
	'Jasper',
	'Cora',
	'Levi',
	'Violet',
	'Arthur',
	'Mia',
	'Thomas',
	'Elizabeth',
  ];

@Component({
selector: 'app-character',
templateUrl: './character.component.html',
styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements AfterViewInit, OnInit  {

	displayedColumns: string[] = ['id', 'name', 'progress', 'fruit'];
	dataSource: MatTableDataSource<UserData>;

	@ViewChild(MatPaginator) paginator!: MatPaginator;
	@ViewChild(MatSort) sort!: MatSort;

  	public page:number = 0;
	public characters:any[] = [];

	constructor(
		private storeCharacter: Store<CharacterState>
	){

		// Create 100 users
		const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));
		// Assign the data to the data source for the table to render
		this.dataSource = new MatTableDataSource(users);

		this.storeCharacter.pipe(select(selectCharacter)).subscribe((value) => {
				
			if (value != undefined) {
				
				this.characters = value.results;
				console.log( this.characters );
			}
		});

		this.storeCharacter.pipe(select(selectErrors)).subscribe((value) => {

			console.warn( 'Charcters Error', value );
			//this.dialogService.openError('Expedientes Error', value ?? '');
		});
	}

	ngAfterViewInit(){

		this.dataSource.paginator = this.paginator;
    	this.dataSource.sort = this.sort;
		
	}

	ngOnInit(){
		
		this._load();
	}

	_load(){
		
		this.storeCharacter.dispatch( getAllCharacters({
			page: this.page
		}) );

		
	}

	execute(){

		
	}

	applyFilter(event: Event) {
		
		const filterValue = (event.target as HTMLInputElement).value;
		this.dataSource.filter = filterValue.trim().toLowerCase();

		if (this.dataSource.paginator) {

			this.dataSource.paginator.firstPage();
		}
	}
}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
	const name =
	  NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
	  ' ' +
	  NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
	  '.';
  
	return {
	  id: id.toString(),
	  name: name,
	  progress: Math.round(Math.random() * 100).toString(),
	  fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
	};
  }