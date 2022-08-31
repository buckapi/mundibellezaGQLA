import { Component,OnInit } from '@angular/core';
import { BikersService } from './services';
import { Butler } from './services/butler.service';
import { ScriptService } from './services/script.service';
import { Router } from '@angular/router';

//declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = '';
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
    public script:ScriptService,
    public bikersScript:BikersService,
    public _butler:Butler,
       public router:Router
  ){
 this.quantity = this._butler.quantity;
 this.subTotalGral = this._butler.subTotalGral;

  }
public addToCar(){
  this.preview.product=this._butler.preview;
  this.preview.quantity=this.quantity;
  this.preview.image=this._butler.imagePreviewProduct;
  this.preview.subTotal=this.quantity*this.preview.product.price;
  this._butler.car.push(this.preview);
  this.preview={};
  this.calculate();
  this.quantity=1;
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

  public minus(){
  if (this.quantity>1){
    this.quantity=this.quantity-1;
  }
}
public plus(){
  this.quantity=this.quantity+1;
}
  ngOnInit(): void {
    
    // this.bikersScript.getUserLocation();
    
  }
}
