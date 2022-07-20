import { Component, OnInit  } from '@angular/core';


import { tap } from 'rxjs';
import { Product } from './interface/product.interface';
import { ProductsService } from './services/products.service';
//import { ProductsService } from './services/products.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],

})



export class ProductsComponent implements OnInit {
products!: Product[];
displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
dataSource =  this.productSvc.getProducts()
.pipe(
  tap((products: Product[])=> this.products=products)
).subscribe();




  constructor(private productSvc:ProductsService) {
   }
  ngOnInit(): void {
    this.productSvc.getProducts()
    .pipe(
      tap((products: Product[])=> this.products=products)
    ).subscribe();
  }
  
}

