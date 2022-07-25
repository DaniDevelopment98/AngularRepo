import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ModeloColumna, ModeloTabla } from './modelos_tabla/tabla';

@Injectable({
  providedIn: 'root'
})
export class UtileriasService {

  constructor() { }

  isEmptyObj(obj : any) : any{
    // if (obj == null) {
    //   console.log("soy null");
    // }
    
    // if (obj == undefined) {
    //   console.log("soy undefined");
    // }
    
    // console.log("Object.keys(obj).",Object.keys(obj).length);
    return (obj != null && obj != undefined && JSON.stringify(obj) !== '{}') ? obj : null;
  }

  crearObjeto(columnas:Array<any>,datos:Array<any>):any
  {

      var obj= {};
      for(var i=0; i<columnas.length;i++)
      { 
        // console.log("correspondencias",columnas[i],datos[i]);
        // obj[columnas[i]]=datos[i];
        
      //obj[consulta.columnas[i]]=consulta.datos[j][i]; 
      } 
      // console.log("objeto",obj);
      //objs.push(obj);
      return obj
  }

  findInvalidControls(f: FormGroup) {
    const invalid = [];
    const controls = f.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        invalid.push(name);
      }
    }
    return invalid;
  }

  FormatoCombo(rows:any, cols:any)
  {
    var objs:Array<any>=new Array<any>(); 

    rows.forEach((fila: any[]) => {
      
      var obj={};
      Object.assign(obj,{});
      for(var i=0; i<cols.length;i++)
      {
        //obj[cols[i]]=fila[i]; 
      } 
      objs.push(obj);
    });
    
    return objs;

  }

  // Esta funcion recibe una consulta universal y regresa la primer fila como un objeto
  FormatoObj(rows:any, cols:any)
  {
    // console.log("inicio FormatoObj", rows);
    var obj={};
    if(rows!=null )
    {
      for(var i=0; i<cols.length;i++)
      {
      //  obj[cols[i]]=rows.length>0?rows[0][i]:null; 
      }
    }
    // console.log("fin FormatoObj");
    return obj;
  }

  // Esta funcion toma una respuesta universal y devuelve un modelo tabla

// Esta funcion toma una respuesta universal y devuelve un modelo tabla
FormatoTabla(consulta:any,  id_index:number)
{
  // console.log("Esta es la tabla", consulta);
  var columnas:Array<ModeloColumna>=new Array<ModeloColumna>();
  var esconder:string = "";

  consulta.columnas.forEach((colName,index) => {
    // console.log("columna ", colName);

  
    
    //Agregar el valor de la columna
    columnas.push(new ModeloColumna({
      campo:colName,
      columna:colName,
      display:esconder
    }));
  });

  
  // console.log("resultado",columnas,consulta.datos);
  return new ModeloTabla({
      columnas:columnas,
      datos:consulta.datos
  });
}
}



