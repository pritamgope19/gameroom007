import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from '../start/start.component';
import { HomeComponent } from '../home/home.component';

const appRoutes: Routes = [
 { path: 'todo/:id',      component: TodoDetailComponent },
 {
   path: 'todos',
   component: TodosListComponent,
   data: { title: 'Todos List' }
 },
 { path: '',
   redirectTo: '/todos',
   pathMatch: 'full'
 },
 { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class RoutingModule { }