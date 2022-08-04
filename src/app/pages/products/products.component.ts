import { Component, OnInit  } from '@angular/core';
import { ApiResult,ClientProducts,Product} from 'src/app/Modelos/API/apiService';
import { ServiciosService } from 'src/app/Modelos/API/servicios.service';
import {} from 'src/app/Modelos/API/apiServiceAngular.service';
import { ModeloTabla } from 'src/app/Modelos/Herramientas/modelos_tabla/tabla';
import { UtileriasService } from 'src/app/Modelos/Herramientas/utilerias.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],

})

export class ProductsComponent implements OnInit {

listProd:any[]=[];

constructor( public service:ServiciosService,public utilerias:UtileriasService,){} 
ngOnInit(): void {
    /*primera forma de traer los datos
    this.productSvc.getProducts()
    .pipe(
      tap((products: Product[])=> this.products=products))
      .subscribe();
      
   */
      this.service.getProducto().subscribe(data=>{
        this.listProd=data.data;
      });

      
   
      /*
      this.catalogo= new ModeloTabla();
      this.apiProducts=new ClientProducts();
      */
  } 
 
  /*Obtuve mi tabla de la siguiente manera, pero existe un error en utilerias.formatoTabla

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
*/

}