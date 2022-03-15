import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'character',
    loadChildren: () => import('./page/character/character.module').then(m => m.CharacterModule)
  },
  {
    path: 'episode',
    loadChildren: () => 
    import('./page/episode/episode.module').then(m => m.EpisodeModule)
  },
  {
    path: 'location',
    loadChildren: () => 
    import('./page/location/location.module').then(m => m.LocationModule)
  },
  {  path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
