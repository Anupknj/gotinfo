import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatahttpService } from "src/app/datahttp.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})


export class CharactersComponent implements OnInit {

    public characters:any[] = [];
    public character;
    public id : number=1;
  


    constructor(public DatahttpService: DatahttpService) {

    }

    ngOnInit(id) {

        this.DatahttpService.getCharacters(this.id).subscribe(

            data => {

                this.characters = data;

            },

            error => {
                console.log(error.errorMessage);

            }
        );


    }

    getid() {
        return this.id;
    }

    setid(id) {
        this.id = id;
        return this.id;
    }

    OnClickMe() {
        
        let id = this.getid();
        if (id < 44) {
            ++id;
           }
        this.setid(id);

        if (id == 42) {
            alert("That's it ..........Cant go next")
        }
        this.ngOnInit(id);

    }

    OnClick() {
        let id = this.getid();
        if (id > 1) {
            --id;
        }

        if (id == 1) {
            alert("Thats's it ..........Cant go back")
        }

        this.setid(id);
        this.ngOnInit(id);
    }

    

}
