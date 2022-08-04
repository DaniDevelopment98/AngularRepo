
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgModel, Validators } from '@angular/forms';
import { Customer, ICustomer } from 'src/app/Modelos/API/apiService';


import { ServiciosService } from 'src/app/Modelos/API/servicios.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
 
  listCli!:any[];
  listProd!:any[];
  busqCli!:FormGroup;
  busqProd!:FormGroup;
  forms1!:FormGroup;
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
    console.log('click')
    this.buscarProd();
  }
  OnClick(): void{
    console.log('click')
    this.buscarCli();
  }

   
  buscarProd(){
        const id=this.busqProd.value.busP
        this.service.getProducto2(id).subscribe(data=>{
          this.listProd=data.data;
          console.log(this.listProd);
        });
      }

  buscarCli(){
   const id=this.busqCli.value.bus;
   
    this.service.getClient(id).subscribe(list=>{     
      this.listCli=list.data;
      console.log(this.listCli)
    })
  }



}
