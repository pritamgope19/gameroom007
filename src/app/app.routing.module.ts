import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { StartComponent } from './start/start.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';


@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'start', component: StartComponent },
      { path: 'home', component: HomeComponent },
      { path: 'details', component: DetailsComponent },
      { path: '**', redirectTo: 'start' }
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule {}


