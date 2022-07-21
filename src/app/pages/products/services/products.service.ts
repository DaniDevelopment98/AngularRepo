import { HttpClient, HttpHeaders, HttpResponse, HttpResponseBase } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../interface/product.interface';

import { mergeMap as _observableMergeMap, catchError as _observableCatch } from 'rxjs/operators';
import {  throwError as _observableThrow, of as _observableOf } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
private apiURL= 'api/Producto/get'
  constructor(private http:HttpClient) { }

  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.apiURL);
 }

 getProducto(): Observable<Product[]> {
  let url_ =this.apiURL;
  url_ = url_.replace(/[?&]$/, "");

  let options_ : any = {
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
          "Accept": "text/plain"
      })
  };

  return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
      return this.processGetProducto(response_);
  })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
          try {
              return this.processGetProducto(response_ as any);
          } catch (e) {
              return _observableThrow(e) as any as Observable<Product[]>;
          }
      } else
          return _observableThrow(response_) as any as Observable<Product[]>;
  }));
}

protected processGetProducto(response: HttpResponseBase): Observable<Product[]> {
  const status = response.status;
  const responseBlob =
      response instanceof HttpResponse ? response.body :
      (response as any).error instanceof Blob ? (response as any).error : undefined;

  let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
  if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
      let result200: any = null;
      let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
      result200 = ApiResult.fromJS(resultData200);
      return _observableOf(result200);
      }));
  } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
      return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
  }
  return _observableOf(null as any);
}


}

export class ApiException extends Error {
  override message: string;
  status: number;
  response: string;
  headers: { [key: string]: any; };
  result: any;

  constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
      super();

      this.message = message;
      this.status = status;
      this.response = response;
      this.headers = headers;
      this.result = result;
  }

  protected isApiException = true;

  static isApiException(obj: any): obj is ApiException {
      return obj.isApiException === true;
  }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): Observable<any> {
  if (result !== null && result !== undefined)
      return _observableThrow(result);
  else
      return _observableThrow(new ApiException(message, status, response, headers, null));
}

function blobToText(blob: any): Observable<string> {
  return new Observable<string>((observer: any) => {
      if (!blob) {
          observer.next("");
          observer.complete();
      } else {
          let reader = new FileReader();
          reader.onload = event => {
              observer.next((event.target as any).result);
              observer.complete();
          };
          reader.readAsText(blob);
      }
  });
}
