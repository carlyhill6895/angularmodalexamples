import {Component, OnInit, ViewChild} from '@angular/core';
import {Product} from '../../domain/product';
import {Order} from '../../domain/order';
import {ConfirmationModalComponent} from '../confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  products: Product[];
  shoppingCart: Order[];
  @ViewChild('deleteModal') deleteModal: ConfirmationModalComponent;

  constructor() { }

  ngOnInit() {
    this.products = [{name: 'eggs', price: 1.25, stock: 5}, {name: 'milk', price: 0.9, stock: 10}];
    this.shoppingCart = [];
  }

  requestDeleteAll() {
    if (this.shoppingCart.length > 0) {
      this.deleteModal.showModal();
    }
  }

  updateCart(product: Product) {
    const order = new Order(product.name, 1, product.price);
    const previousOrder =
      this.shoppingCart.find(cartOrder => order.productName === cartOrder.productName);

    if (previousOrder) {
      previousOrder.amount ++;
      previousOrder.totalPrice += order.totalPrice;
    } else {
      this.shoppingCart.push(order);
    }
  }

  getTotalPrice(): number {
    let price = 0;
    this.shoppingCart.forEach(order => price += order.totalPrice);
    return price;
  }
}
