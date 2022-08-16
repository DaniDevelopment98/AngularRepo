import { HttpClient } from '@angular/common/http';
import { Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer, ICustomer, IProduct, Product } from './apiServiceAngular.service';


@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  
  constructor(private http:HttpClient) {
   
}
//Producto
  getProducto():Observable<any>{   
      let apiURL='api/Producto/get' 
    return this.http.get(apiURL);
  }
  getProducto2(id:number):Observable<any>{   
    let apiURL='api/Producto/get2?id' 
  return this.http.get(apiURL+"="+id);
}


//Clientes
  getClient(id: string ):Observable<any>{   
    let apiURL ='api/Clientes/get2?id'
    return this.http.get(apiURL+ "=" +id );
  }
  
  }

  






  

