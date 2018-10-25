import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatahttpService } from "src/app/datahttp.service";

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {
    public houses:any[]=[];
    public house;
    private id: number=1;

  constructor(public DatahttpService :DatahttpService) { }

  ngOnInit(id) {
       this.DatahttpService.getHouses(this.id).subscribe(
          data => {
              this.houses = data;
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

      if (id == 8) {
          alert("no further")
      }
      if (id < 9) {
          ++id;
         
      }

      this.setid(id);
      this.ngOnInit(id);

  }

  OnClick() {

      let id = this.getid();

      if (id == 1) {
          alert("Cant go back")
      }


      if (id > 1) {
          --id;
         
      }

      

      this.setid(id);
      this.ngOnInit(id);
  }


}
