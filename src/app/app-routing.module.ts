import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterComponent } from './page/character/character.component';
import { LocationComponent } from './page/location/location.component';
import { EpisodeComponent } from './page/episode/episode.component';
import { HomeComponent } from './page/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
     {
       path: 'character',
       component: CharacterComponent
     },
     {
       path: 'location',
       component: LocationComponent
     },
     {
       path: 'episode',
       component: EpisodeComponent
     }
    ]
  },
  {  path: '**', redirectTo: 'character' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
