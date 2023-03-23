import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'form-component',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  @Output() createProductEvent: EventEmitter<{
    name: string;
    price: number;
    amount: number;
  }> = new EventEmitter();

  name: string = '';
  price: number = 0;
  amount: number = 0;

  createProduct() {
    this.createProductEvent.emit({
      name: this.name,
      price: this.price,
      amount: this.amount,
    });
  }

  resetInputs() {
    this.name = '';
    this.price = 0;
    this.amount = 0;
  }
}
