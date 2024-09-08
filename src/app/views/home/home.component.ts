import { Component } from '@angular/core';
import { AppService } from '../../services/app.service';
import { Router } from '@angular/router';
import { state } from '@angular/animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  products: any = [];

  constructor(private http: AppService, private router: Router){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log("Entrei no On Init")
    this.http.getProducts().subscribe({
      next: (response) => {
        this.products = response;
      }
    });
  }

  //Navigate to page product and show product detail 
  showProductDetail(productId: number) {
    this.http.getProduct(productId).subscribe({
      next: (response) => {
        console.log(response);
        this.router.navigate(['/product'], {state: {data: response}}); 
      }
    });
  }

}
