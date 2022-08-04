import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { objToArrayPipe } from 'src/app/objToArray.pipe';



@NgModule({
  declarations: [
    //ProductsComponent,    

    //ProductComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MaterialModule  
  ]
})
export class ProductsModule { }
