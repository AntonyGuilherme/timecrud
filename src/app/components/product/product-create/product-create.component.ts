import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product.model';
import { FireserviceService } from '../services/fireservice.service';
import { MsgService } from '../services/msg.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent  {
  
  product:Product={name:null,price:null};
  is_Update  = this.route.snapshot.paramMap.get('is_Update');
  count_not_space:number=0;
  constructor(
    private fireServices:FireserviceService,
     private msg:MsgService,
     private route:ActivatedRoute,
     private router:Router ) { }

  create_product():void{
    
    if(this.product.name===""||this.product.price===null || this.field_isEmpty())
      this.msg.msg("Preencha todos os campos",true);
    else{
    this.fireServices.create_product(this.product).then(
      () =>{
      this.msg.msg("Produto Criado.");
    }).catch(
      e =>{
      this.msg.msg("Desculpe , ocorreu um erro.");
    });}
  }
  cancel():void{
    this.router.navigate(['product-read']);
  }

  field_isEmpty():boolean{
     this.count_not_space=0;
    for(let i =0 ;i<this.product.name.length;i++)
      if(!(this.product.name.substr(i,1)===" "))
          this.count_not_space++;
    
    return this.count_not_space>0 ? false:true;
  
  }

}
