import { Component, OnInit  } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { map, tap } from 'rxjs';
import { ApiResult,ClientProducts,Product} from 'src/app/Modelos/API/apiService';
import { ModeloTabla } from 'src/app/Modelos/Herramientas/modelos_tabla/tabla';
import { UtileriasService } from 'src/app/Modelos/Herramientas/utilerias.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],

})

export class ProductsComponent implements OnInit {

public apiProducts!:ClientProducts;
public catalogo!:ModeloTabla;
constructor( 
  public route:ActivatedRoute, 
  public router:Router,
  public utilerias:UtileriasService,
   
  ) {

   } ngOnInit(): void {
    /*primera forma de traer los datos
    this.productSvc.getProducts()
    .pipe(
      tap((products: Product[])=> this.products=products))
      .subscribe();
      
   */
      this.catalogo= new ModeloTabla();
      this.apiProducts=new ClientProducts();
  } 

  getTabla(){
    this.apiProducts.getProducto().then(
      (respuesta:ApiResult)=>{
        this.catalogo=this.utilerias.FormatoTabla(respuesta.data,0);
        console.log("Resultado request : ",respuesta);
      },
      (respuesta:any)=>{
        var resp=JSON.parse(respuesta.response);
      }
    );
  }


}