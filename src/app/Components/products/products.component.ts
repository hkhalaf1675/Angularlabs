import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  @Output() productAdded = new EventEmitter<{ name: string; price: number }>();
  name = '';
  price = 0;
  isValidName(){
    return this.name != '' && this.name.length > 5
  }

  get isValidAge(){
    return this.price >=1000 && this.price<=9000
  }

  addProduct() {
    this.productAdded.emit({ name: this.name, price: this.price });
    this.name = '';
    this.price = 0;
  }
}
