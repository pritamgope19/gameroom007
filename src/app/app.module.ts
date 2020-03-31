import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Routes,RouterModule} from '@angular/router';
import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { StartComponent } from './start/start.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  imports:      [
    AppRoutingModule, 
    BrowserModule, FormsModule, HttpModule  ],
  declarations: [ AppComponent, HelloComponent, StartComponent, HomeComponent, HeaderComponent, FooterComponent, DetailsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
