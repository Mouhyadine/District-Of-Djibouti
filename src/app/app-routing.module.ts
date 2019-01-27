import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DjiboutiComponent} from './djibouti/djibouti.component';
import {AliSabiehComponent} from './ali-sabieh/ali-sabieh.component';
import {ArtaComponent} from './arta/arta.component';
import {DikhilComponent} from './dikhil/dikhil.component';
import {TadjourahComponent} from './tadjourah/tadjourah.component';
import {ObockComponent} from './obock/obock.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
 
  { path: 'Djibouti', component:DjiboutiComponent},
  { path: 'AliSabieh', component:AliSabiehComponent},
  { path: 'Arta', component:ArtaComponent},
  { path: 'Dikhil', component:DikhilComponent},
  { path: 'Tadjourah', component:TadjourahComponent},
  { path: 'Obock', component:ObockComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
