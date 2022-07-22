import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductComponent } from './product/product.component';
import { MaterialModule } from 'src/app/material.module';
import { objToArrayPipe } from 'src/app/objToArray.pipe';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent,
    objToArrayPipe
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MaterialModule  
  ]
})
export class ProductsModule { }
