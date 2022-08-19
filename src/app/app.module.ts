import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { HeaderComponent } from './shared/Components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ProductsComponent } from './pages/products/products.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { objToArrayPipe } from './objToArray.pipe';
import {  RouterModule, Routes } from '@angular/router';
import { HomeCComponent } from './pages/home/home-c/home-c.component';


const Approutes:Routes=[
  //{path:'',component:HeaderComponent},
  {path:'orders',component:OrdersComponent},
  {path:'products',component:ProductsComponent},
  {path:'home',component:HomeCComponent},
  {path:'**', redirectTo:'', pathMatch:'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    OrdersComponent,
    objToArrayPipe
  ],
  imports: [
    FormsModule,
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    RouterModule.forRoot(Approutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
