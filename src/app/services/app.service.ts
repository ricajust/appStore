import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private urlRoot = "https://fakestoreapi.com"
  
  constructor(private http: HttpClient) {}

  //Get all products
  getProducts(): Observable<any>{
    return this.http.get<any>(`${this.urlRoot}/products`)
      .pipe( 
        map( response => {
          return this.addShortDescription(response);
        })
      );
  }

  //Get one product
  getProduct(productId: number): Observable<any> {
    return this.http.get(`${this.urlRoot}/products/${productId}`)
    .pipe(
      map( response  => {
        return this.addShortDescription(response);
      }
    ))
  }

  //Add description in response (array or object)
  addShortDescription(response: any):any {
    if (Array.isArray(response)) {
      return response.map((product:any) => {
        return {
          ...product,
          shortDescription: product.description.substr(0, 49)
        };
      });
    }
    return {...response, shortDescription: response.description.substr(0, 49)}
  }
}
