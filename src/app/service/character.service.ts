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

	public list( page:number ):Observable<Result<Character[]>>{

		return this.httpClient.get<Result<Character[]>>( URLAPI + '/character/?page=' + page );
	}
}