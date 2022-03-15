import { Component, ViewChild, OnInit, OnDestroy, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { select, Store } from '@ngrx/store';
import { LocationState } from '../store/app.state';
import { getAllLocations } from '../store/actions/location.actions';
import { selectLocation, selectErrors } from '../store/selectors/location.selector';
import { Location } from '../../interface/location';

import {MatPaginator, PageEvent} from '@angular/material/paginator';
import { Info } from '../../interface/info';
import { DetailComponent } from './detail/detail.component';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit, OnDestroy{

	@ViewChild(MatPaginator) paginator!: MatPaginator;

	selectLocation$ = this.storeLocation.pipe(select(selectLocation));
	selectErrors$ = this.storeLocation.pipe(select(selectErrors));

	public loadingLocation:boolean = true;
	public pageSize:number = 20;
	public page:number = 1;
	public locations:any[] = [];
	public info:any;
	public locationsCurrent:any[] = [];

	constructor(
		private storeLocation: Store<LocationState>,
		public dialog: MatDialog
	){}

	ngOnInit(){
		
		this._load();
		this.execute();
	}

	_load(){
		
		this.storeLocation.dispatch( getAllLocations({
			page: this.page
		}) );
	}

	execute(){

		this.selectLocation$.subscribe((value) => {
				
			if (value != undefined) {
				
				this.loadingLocation = false;
				this.locations = value.results;
				this.locationsCurrent = this.locations;
				this.info = value.info;
			}
		});

		this.selectErrors$.subscribe((value) => {

			console.warn( 'Charcters Error', value );
		});
	}

	applyFilter(event: Event) {
		
		const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
		let search = this.locationsCurrent.filter( c => c.name.includes( filterValue ) );
		
		this.locations = search;
	}

	handlePageEvent( event:PageEvent ){

		this.loadingLocation = true;
		
		this.page = event.pageIndex + 1;
		this._load();
	}

	openDialog( characters:string[], locationName:string ){

		if( characters.length > 0 ){
			
			this.dialog.open(DetailComponent, {
				data: {
					characters:characters,
					locationName: locationName,
					type:1
				}
			});
		}
		else{

			alert( "No found characters" );
		}
	}

	ngOnDestroy() {
		
		//this.storeLocation.
	}
}