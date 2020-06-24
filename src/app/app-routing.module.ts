import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductReadComponent } from './components/product/product-read/product-read.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';



const routes: Routes = [
  {path:"products-read",component:ProductReadComponent},
  {path:"product-create",component:ProductCreateComponent},
  {path:"product-update",component:ProductUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
