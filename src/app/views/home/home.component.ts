import { Component } from '@angular/core';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  products: any = [];

  constructor(private http: AppService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log("Entrei no On Init")
    this.http.getProducts().subscribe({
      next: (response) => {
        this.products = response.newResponse;
        console.log("RETORNO AJUSTADO", this.products);
      }
    });
  }

}
