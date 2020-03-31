import { Component } from '@angular/core';
import { TestService } from './test.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  constructor(private testService: TestService){}
  fetch(){
    this.testService.fetch()
    .subscribe(data => console.log("Data",data));
  }
}
