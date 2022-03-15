import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

	locationCurrentName:string = '';
	characters:string[] = [];

	constructor(
		@Inject(MAT_DIALOG_DATA)public data: any
	){

		this.locationCurrentName = data.name;
		this.characters = data.characters;
		debugger;
	}

	ngOnInit(): void {}
}