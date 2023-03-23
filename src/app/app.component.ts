import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pricelist';
  products: { name: string; price: number; amount: number }[] = [];

  addElement(element: { name: string; price: number; amount: number }) {
    this.products.push(element);
  }

  handleEvent(value: { name: string; price: number; amount: number }) {
    this.products.push(value);
  }
}
