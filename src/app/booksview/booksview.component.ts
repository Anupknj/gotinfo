import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from "src/app/data.service";
import { DatahttpService } from "src/app/datahttp.service";

@Component({
  selector: 'app-booksview',
  templateUrl: './booksview.component.html',
  styleUrls: ['./booksview.component.css']
})
export class BooksviewComponent implements OnInit {
        singleinfo: any;
    

    public books;
    public book;
    public rid;
    public url;

    constructor(private _route: ActivatedRoute, private router: Router,private DatahttpService : DatahttpService)
    { }

    ngOnInit() {
        let rid = this._route.snapshot.paramMap.get('id');
        
        this.getinfo(rid);
        
      
    }


    
    public getinfo(rid): any {
        
        this.DatahttpService.getbooks().subscribe(

            data => {

                this.books = data;
                
                this.book= this.DatahttpService.singleinfo(rid,this.books);
            },

            error => {
                console.log(error.errorMessage);
            }
        );
    }  


 
}
