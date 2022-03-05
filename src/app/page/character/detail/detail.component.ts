import { Component, OnInit, OnDestroy } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { CharacterState } from '../../store/app.state';
import { getDetailCharacter } from '../../store/actions/character.actions';
import { selectErrors, selectCharacterDetail } from '../../store/selectors/character.selector';
import { Character } from '../../../interface/character';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

	selectCharacterDetail$ = this.storeCharacter.pipe(select(selectCharacterDetail));
	selectErrors$ = this.storeCharacter.pipe(select(selectErrors));

	public loadingCharacter:boolean = true;
	public character:any;
	public id:number = 0;
	private sub: any;

	constructor( private route: ActivatedRoute, private storeCharacter: Store<CharacterState> ) { }

	ngOnInit(): void {}

	ngAfterViewInit(): void {

		this.loadingCharacter = true;
		this.sub = this.route.params.subscribe(params => {
			this.id = +params['id'];
		 });

		this._load();
		this.execute();
	}

	_load(){
		
		this.storeCharacter.dispatch( getDetailCharacter({
			id: this.id
		}) );
	}

	execute(){

		this.selectCharacterDetail$.subscribe((value) => {
				
			if (value != undefined) {
				
				this.loadingCharacter = false;
				this.character = value;
			}
		});

		this.selectErrors$.subscribe((value) => {

			console.warn( 'Charcter Detail Error', value );
		});
	}

	ngOnDestroy() {
		
		this.sub.unsubscribe();
	}
}