import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product.model';
import { FireserviceService } from '../services/fireservice.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent  {
  product:Product={name:"",price:null};
  
  constructor(private fireServices:FireserviceService) { }

  create_product():void{
    this.fireServices.create_product(this.product).then(() =>{
      console.log('Salvo com sucesso');
    }).catch(e=>{console.log("Erro",e)});
  }

}
