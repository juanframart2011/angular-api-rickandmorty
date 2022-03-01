import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Episode } from 'src/app/interface/episode';
import { Result } from '../interface/result';

const URLAPI = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

	constructor(
		private httpClient: HttpClient
	){}

  	public detail( id:number ):Observable<Episode>{

		return this.httpClient.get<Episode>( URLAPI + '/episode/' + id );
	}

	public filter( id:number ):Observable<Episode>{
		/*
		name: filter by the given name.
		episode: filter by the given episode code.
		*/
		return this.httpClient.get<Episode>( URLAPI + '/episode/' + id );
	}

	public list( page:number ):Observable<Result<Episode[]>>{

		return this.httpClient.get<Result<Episode[]>>( URLAPI + '/episode/?page=' + page );
	}
}