import { Component, OnInit } from '@angular/core';
import {Butler} from '@app/services/butler.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
    public delivery : number=12000; 
public subTotalGral : number=0; 
public totalGral : number=0; 
  constructor(
public _butler:Butler,
  public router:Router
    ) { 
  }
  public remove(i:any){
      this._butler.car.splice(i, 1);
    let size =this._butler.car.length;
      this.calculate();
    if(size<1){
      this.router.navigate(['/shop']);
    }
  }
public calculate(){
  this.subTotalGral=0;
  let size = this._butler.car.length;
    for (let i = 0; i < size; i++){
      this.subTotalGral=this.subTotalGral+this._butler.car[i].subTotal;
      this._butler.subTotalGral=this.subTotalGral;
    }
    if (size==0){
      this._butler.subTotalGral=0;
    }
    this.setDelivery();
}
public setDelivery(){
   this.totalGral=0;
   if(this._butler.subTotalGral>120000){
      this.totalGral=this._butler.subTotalGral;
    }
   else{
     this.totalGral=this._butler.subTotalGral+this.delivery;   
      }
}
  ngOnInit(): void {
this.setDelivery();
     if(this._butler.subTotalGral===0){
      this.router.navigate(['/shop']);
    }
  }

}
