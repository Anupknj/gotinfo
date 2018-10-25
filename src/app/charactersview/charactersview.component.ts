import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatahttpService } from "src/app/datahttp.service";
import {Observable } from "rxjs";


@Component({
  selector: 'app-charactersview',
  templateUrl: './charactersview.component.html',
  styleUrls: ['./charactersview.component.css']
})

export class CharactersviewComponent implements OnInit {

    public characters: any;
    public character;
    public id: number;
    public rid: string;

    constructor(private  _route : ActivatedRoute, private router : Router,public DatahttpService : DatahttpService) { }

    ngOnInit() {
        let rid = this._route.snapshot.paramMap.get('id');
       
        this.getinfo(rid);

    }



    public getinfo(rid): any {

        this.DatahttpService.singleChar(rid).subscribe(

            data => {

                this.character = data;
                console.log(this.character);
               
            },

            error => {
                console.log(error.errorMessage);
            }
        );
    }
    
}

    

