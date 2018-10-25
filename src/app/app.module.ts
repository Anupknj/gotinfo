import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { CharactersComponent } from './characters/characters.component';
import { HousesComponent } from './houses/houses.component';
import { NotfoundcomponentComponent } from './notfoundcomponent/notfoundcomponent.component';
import { BooksviewComponent } from './booksview/booksview.component';
import { CharactersviewComponent } from './charactersview/charactersview.component';
import { HousesviewComponent } from './housesview/housesview.component';
import { DataService } from './data.service';
import { DatahttpService } from "src/app/datahttp.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    CharactersComponent,
    HousesComponent,
    NotfoundcomponentComponent ,
    BooksviewComponent ,
    CharactersviewComponent ,
    HousesviewComponent  
  ],
  imports: [
      BrowserModule,
      HttpClientModule,

      RouterModule.forRoot([

          { path: 'books', component: BooksComponent },
          { path: 'booksview/:id',component :BooksviewComponent },
          { path: 'characters', component: CharactersComponent },
          { path : 'charactersview/:id',component: CharactersviewComponent },
          { path: 'houses', component: HousesComponent },
          { path :'housesview/:id', component:HousesviewComponent }, 
          { path: '', redirectTo: '', pathMatch: 'full' },
          { path :'',component:AppComponent }
          
          
      ])

  ],
  providers: [DatahttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
