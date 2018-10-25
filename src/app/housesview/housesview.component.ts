import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatahttpService } from "src/app/datahttp.service";

@Component({
    selector: 'app-housesview',
    templateUrl: './housesview.component.html',
    styleUrls: ['./housesview.component.css']
})

export class HousesviewComponent implements OnInit {

    public houses:any[]=[];
    public house;


    constructor(private _route: ActivatedRoute, private router: Router, public DatahttpService: DatahttpService) { }

    ngOnInit() {

        let rid = this._route.snapshot.paramMap.get('id');
        console.log(rid);

        this.DatahttpService.singleHouse(rid).subscribe(
            data => {
                this.house = data;
                console.log(this.house);
            },

            error => {
                console.log(error.errorMessage);
            }
        );


    }

  
}