import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Character } from 'src/app/interface/character';
import { Result } from '../interface/result';

const URLAPI = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

	constructor(
		private httpClient: HttpClient
	){}

  	public detail( id:number ):Observable<Character>{

		return this.httpClient.get<Character>( URLAPI + '/character/' + id );
	}

	public filter( id:number ):Observable<Character>{
		/*
		name: filter by the given name.
		status: filter by the given status (alive, dead or unknown).
		species: filter by the given species.
		type: filter by the given type.
		gender: filter by the given gender (female, male, genderless or unknown).
		*/
		return this.httpClient.get<Character>( URLAPI + '/character/' + id );
	}

	public list( page:number ):Observable<Result<Character[]>>{

		return this.httpClient.get<Result<Character[]>>( URLAPI + '/character/?page=' + page );
	}
}