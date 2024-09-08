import { Routes } from '@angular/router';
import { ProductComponent } from './views/product/product.component';
import { HomeComponent } from './views/home/home.component';

export const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'product', component: ProductComponent }
];
