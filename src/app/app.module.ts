import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Movies } from './app.movies';
import { HttpModule }    from '@angular/http';
import { AppComponent } from './app.component';
import { ClickFindComponent } from './click-find.component';

@NgModule({
  declarations: [
    AppComponent,
    ClickFindComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [Movies],
  bootstrap: [AppComponent]
})
export class AppModule { }
