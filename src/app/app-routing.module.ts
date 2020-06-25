import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductReadComponent } from './components/product/product-read/product-read.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';



const routes: Routes = [
  {path:"product-read",component:ProductReadComponent},
  {path:"product-update/:id/:name/:price",component:ProductUpdateComponent},
  {path:"product-create",component:ProductCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
