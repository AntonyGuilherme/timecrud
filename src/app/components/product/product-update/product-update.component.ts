import { Component, OnInit } from '@angular/core';
import { FireserviceService } from '../services/fireservice.service';
import { MsgService } from '../services/msg.service';
import { Product } from '../model/product.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent  {
  product:Product={
  name:this.route.snapshot.paramMap.get('name'),
  price:Number(this.route.snapshot.paramMap.get('price'))};
  id:string=this.route.snapshot.paramMap.get('id');
  count_not_space:number=0;

  constructor(
    private fireServices:FireserviceService,
    private msg:MsgService,
    private route:ActivatedRoute,
    private router:Router) { }
  

  update_product(){
    
    if(this.product.name===""||this.product.price===null || this.field_isEmpty())
    this.msg.msg("Preencha todos os campos",true);
    else{
    this.fireServices.update_product(this.id,this.product).then(
      ()=>{
        this.msg.msg("Produto Atualizado.");
      }
    ).catch(e =>{
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
