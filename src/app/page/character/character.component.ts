import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements AfterViewInit  {

	paginator:any;
	displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
	dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

	@ViewChild(MatPaginator) paginator: MatPaginator;

	ngAfterViewInit() {

		this.paginator;
		this.dataSource.paginator = this.paginator;
	}

	constructor() { }

	ngOnInit(): void {
	}
}