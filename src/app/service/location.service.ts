import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Location } from 'src/app/interface/location';
import { Result } from '../interface/result';

const URLAPI = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class LocationService {

	constructor(
		private httpClient: HttpClient
	){}

  	public detail( id:number ):Observable<Location>{

		return this.httpClient.get<Location>( URLAPI + '/location/' + id );
	}

	public filter( id:number ):Observable<Location>{
		/*
		name: filter by the given name.
		type: filter by the given type.
		dimension: filter by the given dimension.
		*/
		return this.httpClient.get<Location>( URLAPI + '/location/' + id );
	}

	public list( page:number ):Observable<Result<Location[]>>{

		return this.httpClient.get<Result<Location[]>>( URLAPI + '/location/?page=' + page );
	}
}