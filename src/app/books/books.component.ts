import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from "src/app/data.service";
import { DatahttpService } from "src/app/datahttp.service";
import { Observable } from "rxjs";
import { book_i } from "src/app/book_format.ts/book_f";




@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent implements OnInit {
        

    public books = [];
    public book;
   

    constructor( public DatahttpService: DatahttpService) {
        
    } 

    ngOnInit() {
       
        this.DatahttpService.getbooks().subscribe(

            data => {

                this.books = data;

            },

            error => {
                console.log(error.errorMessage);

            }
        );

        
    }

}
