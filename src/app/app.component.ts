import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular_1';
  
  products: { name: string; price: number }[] = [];

  addProduct(product: { name: string; price: number }) {
    this.products.push(product);
  }

  deleteProduct(product: { name: string; price: number }) {
    this.products = this.products.filter((p) => p !== product);
  }
}
