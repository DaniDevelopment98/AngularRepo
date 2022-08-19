
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgModel, Validators } from '@angular/forms';
import { tap } from 'rxjs';
import { Customer, ICustomer, IProduct } from 'src/app/Modelos/API/apiService';
import { Product } from 'src/app/Modelos/API/apiServiceAngular.service';


import { ServiciosService } from 'src/app/Modelos/API/servicios.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
 clientesLista:any=[];
  listCli!:ICustomer[];
  listProd!:IProduct[];
  busqCli!:FormGroup;
  busqProd!:FormGroup;
  forms1!:FormGroup;
  clientes!:ICustomer[]
 // val=new FormControl();
  constructor(private readonly fb:FormBuilder,public service:ServiciosService){}

  initForm():FormGroup{
return this.fb.group({
  bus:[null],
})
  }
  initForm2():FormGroup{
    return this.fb.group({
      busP:[null],
    })
      }
    
  
  ngOnInit(): void {
   this.busqCli=this.initForm();
   this.busqProd=this.initForm2();
  }
  onSubmit():void{
    
  }
  onSubmit1():void{

  }
  onSubmit2():void{

  }

  OnClick2(): void{
    //console.log('click')
    this.buscarProd();
  }
  OnClick(): void{
    //console.log('click')
    this.buscarCli();
  }

   
  buscarProd(){
        const id=this.busqProd.value.busP
        this.service.getProducto2(id)      
        .subscribe(data=>{this.listProd=data.data;
          console.log(this.listProd);
            /*.pipe(tap((listProd:Product[])=>this.listProd=listProd))  */             
        });
      }
// tap((listCli:Customer[])=>this.listCli=listCli))
  buscarCli(){
   const id=this.busqCli.value.bus;   
    this.service.getClient(id)
    .subscribe( list=>{this.listCli=list.data;
      this.clientesLista=this,this.listCli
      console.log(this.listCli)
    
    })
   console.log(this.clientesLista.value)
   var lista1=Object.entries(this.listCli).map(z=>z.join(":")).join("\n")
   console.log('es para saber que clientes trae',lista1)
  }



}
