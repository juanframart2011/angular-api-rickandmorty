import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'characterUrlLocation'
})
export class CharacterUrlLocationPipe implements PipeTransform {

	transform(value: string): string {
		
		let strings = value.split( "/api/character/" );
		console.info( "pipe => ", strings );
		return strings[1];
	}
}