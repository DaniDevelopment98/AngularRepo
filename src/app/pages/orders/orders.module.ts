import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { MaterialModule } from 'src/app/material.module';

import { objToArrayPipe } from 'src/app/objToArray.pipe';




@NgModule({
  declarations: [


  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    MaterialModule
  
    
  ]
})
export class OrdersModule { }
