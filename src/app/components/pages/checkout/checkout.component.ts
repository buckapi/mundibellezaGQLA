import { Component, OnInit } from '@angular/core';
import {Butler} from '@app/services/butler.service';
import {LOCATIONS} from '@app/services/locations.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  public indexCity : number=0; 
  public loaded : boolean=false; 
    // locations$: Observable<Location[]>;
public locations:any=[];
  constructor(
public _butler:Butler,
  public router:Router
    ) {   
      this.locations= LOCATIONS
  }
public setDep(i:any){
  this.indexCity=i;
  console.log(this.indexCity);
  this.loaded=true;

}
  ngOnInit(): void {
  }

}
