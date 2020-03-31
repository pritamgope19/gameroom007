import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {Routes,RouterModule} from '@angular/router';
import { AppRoutingModule } from './app.routing.module';
import { httpInterceptorProviders } from './http-interceptors';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { StartComponent } from './start/start.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DetailsComponent } from './details/details.component';
import { from } from 'rxjs';
import { TestService } from './test.service';

@NgModule({
  imports:      [
    AppRoutingModule, 
    BrowserModule, FormsModule, HttpClientModule  ],
  declarations: [ AppComponent, HelloComponent, StartComponent, HomeComponent, HeaderComponent, FooterComponent, DetailsComponent, ],
  bootstrap:    [ AppComponent ],
  providers: [TestService, httpInterceptorProviders]
})
export class AppModule { }
