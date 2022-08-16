import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrdersRoutingModule } from './orders-routing.module';
import { MaterialModule } from 'src/app/material.module';




@NgModule({
  declarations: [
  

  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class OrdersModule { }
