import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/Http';
import { Observable } from "rxjs";
import { book_i } from "src/app/book_format.ts/book_f";


@Injectable({
  providedIn: 'root'
})

export class DatahttpService {
        char: any;
        
       
    public books:any=[];
    public book;
    public baseurl = 'https://anapioficeandfire.com/api/';
    public rid;
    public character;
    public characters: any = [];


    constructor(private _http: HttpClient){
        
    }

  
   

    public getbooks(): any{
        
        this.books = this._http.get(this.baseurl + '/books?page=1&pageSize=50');
        console.log("service"+this.books);
        return this.books;
      
    }


    public singleinfo(rid, books): any {

        for (let book of books) {
            if (book.isbn == rid) {
                this.book = book;
                break;
            }
        }
        return this.book;
    }

    public getCharacters(pageNo): any {
       
        this.characters = this._http.get(this.baseurl + '/characters?page='+pageNo+'&pageSize=50');
            
        
        console.log("service"+this.characters);
        return this.characters;
    }
   
    public singleChar(rid): any {

        return this._http.get(this.baseurl + '/characters/' + rid);
    }

    public getHouses(pageNo): any {

        return this._http.get(this.baseurl + '/houses?page=' + pageNo + '&pageSize=50');
    }


    public singleHouse(rid): any{

        return this._http.get(this.baseurl + '/houses/' + rid);
    }
    
}
