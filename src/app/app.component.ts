import { Component } from '@angular/core';
import { Movies } from './app.movies';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string;
//  changeTitleP : string;

constructor(private movie: Movies ) {}


changeTitle = this.movie.changeTitleP()
    .then((val) => this.title = val);

}
