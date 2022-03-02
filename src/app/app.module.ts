import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { HomeComponent } from './page/home/home.component';

import { MatSliderModule } from '@angular/material/slider';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { characterFeatureName, episodeFeatureName, locationFeatureName } from './page/store/app.state';
import { characterReducer } from './page/store/reducers/character.reducer';
import { episodeReducer } from './page/store/reducers/episode.reducer';
import { locationReducer } from './page/store/reducers/location.reducer';
import { CharacterEffects } from './page/store/effects/character.effect';
import { EpisodeEffects } from './page/store/effects/episode.effect';
import { LocationEffects } from './page/store/effects/location.effect';


@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		BrowserAnimationsModule,
		MatSliderModule,
		MatPaginatorModule,
		MatTableModule,
		MatSortModule,
		StoreModule.forFeature(characterFeatureName, characterReducer),
		StoreModule.forFeature(episodeFeatureName, episodeReducer),
		StoreModule.forFeature(locationFeatureName, locationReducer),
		EffectsModule.forFeature([CharacterEffects, EpisodeEffects,LocationEffects]),
  	],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
