import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {Butler} from '@app/services/butler.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
public quantity : number=1; 
public sent : boolean=false; 
public subTotalGral : number=0; 
public preview :any={
  quantity:1,
  image:"",
  subTotal:0,
  product:"",

}; 
  constructor(
public _butler:Butler,

   public router:Router
    ) {
 this.quantity = this._butler.quantity;
 this.subTotalGral = this._butler.subTotalGral;
     }
public addToCar(){
  this.preview.product=this._butler.preview;
  this.preview.quantity=this.quantity;
  this.preview.image=this._butler.imagePreviewProduct;
  this.preview.subTotal=this.quantity*this.preview.product.price;
  this._butler.car.push(this.preview);
  this.calculate();
}
public minus(){
  if (this.quantity>1){
    this.quantity=this.quantity-1;
  }
}
public plus(){
  this.quantity=this.quantity+1;
}
public calculate(){
  this.subTotalGral=0;
  let indice = this._butler.car.length;
    for (let i = 0; i < indice; i++){
      this.subTotalGral=this.subTotalGral+this._butler.car[i].subTotal;
      this._butler.subTotalGral=this.subTotalGral;
  
    }
    this.sent=true;
       this.router.navigate(['/shop']);
}
  ngOnInit(): void {
    if(this._butler.preview.name===undefined){
      this.router.navigate(['/shop']);
    }
  }

}
