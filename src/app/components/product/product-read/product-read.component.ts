import { Component, OnInit } from '@angular/core';
import { FireserviceService } from '../services/fireservice.service';
import { Product } from '../model/product.model';
import { MsgService } from '../services/msg.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {
  products:Product[];
  displayedColumns = ['id', 'name','price','action'];
  constructor(private fireService:FireserviceService,private msg:MsgService,private router:Router) { }

  ngOnInit(): void {
    this.fireService.get_Allregister().subscribe(products=>{
    this.products=products.map(product=>{
      return {
          id:product.payload.doc.id,
          name:product.payload.doc.data()['name'],
          price:product.payload.doc.data()['price']
      };
    }); 
    });
  }


  delete_product(id:string):void{
    this.fireService.delete_product(id).then(
      ()=>{
        this.msg.msg('Produto excluído com sucesso.');
      }
    ).catch(
      e=>{
        this.msg.msg('Desculpe, ocorreu um erro.',true);
      }
    );
    
  }
 
  update_product(product:Product):void{
    this.router.navigate([`product-update/${product.id}/${product.name}/${product.price}`]);
  }

}
