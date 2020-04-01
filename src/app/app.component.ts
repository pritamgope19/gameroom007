import { Component } from '@angular/core';
import { TestService } from './test.service';
import { Movie } from './Movie';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  constructor(private testService: TestService){}
    movies:Movie[] =  [];

  fetch(){
    this.testService.getMovies().subscribe(
      (data) => {
        //this.movies = data;
        setTimeout(()=>{
          data
          .map((movie)=>{
            this.movies.push(movie);
          })
        },1000);
      }  
    )
  }
}
