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
            const newResponse = response.map((product:any) => {
              return {
                ...product,
                shortDescription: product.description.substr(0, 49)
              }
            })
          return {newResponse}
        })
      );
  }
}
