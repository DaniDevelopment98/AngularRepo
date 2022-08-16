import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{path:'products',loadChildren:()=> import ('./pages/products/products.module').then (m=> m.ProductsModule)},
{ path: 'orders', loadChildren: () => import('./pages/orders/orders.module').then(m => m.OrdersModule) },


{path:'**', redirectTo:'', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
