import { Injectable } from '@angular/core';
import { Http }    from '@angular/http';

import { MovieResponse } from './app.movieresponse';


@Injectable()
export class Movies {
movieList = [];
result = 'from movies';


  constructor(private http: Http, ) { }



  getTitle(){
    return "Title From Class Movie";
  }


  changeTitle(cb) {
     console.log("setting title");
      setTimeout( () => {
        cb("new Title")
      }, 5000);

  }

  changeTitleP() {
    console.log("set using promese");
    let promise = new Promise<string>((resolve, reject) => {
      setTimeout( () => {
        resolve('hola Mvoeu List Proimide')
      }, 5000);
    });
    return promise;
  }
}
