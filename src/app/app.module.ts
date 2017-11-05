import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Movies } from './app.movies';
import { HttpModule }    from '@angular/http';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [Movies],
  bootstrap: [AppComponent]
})
export class AppModule { }
