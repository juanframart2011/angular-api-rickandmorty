import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterRoutingModule } from './character-routing.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { characterFeatureName } from '../store/app.state';
import { characterReducer } from '../store/reducers/character.reducer';
import { CharacterEffects } from '../store/effects/character.effect';
import { CharacterComponent } from './character.component';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [CharacterComponent],
  imports: [
    CommonModule,
    MatSortModule,
    	MatTableModule,
    CharacterRoutingModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature(characterFeatureName, characterReducer),
    EffectsModule.forRoot(),
		EffectsModule.forFeature([CharacterEffects]),
    MatPaginatorModule,
    MatInputModule,
		MatFormFieldModule,
    MatProgressSpinnerModule
  ],
  exports:[]
})
export class CharacterModule { }
