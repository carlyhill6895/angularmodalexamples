import {Component, OnInit, ViewChild} from '@angular/core';
import {Product} from '../../domain/product';
import {Order} from '../../domain/order';
import {ConfirmModalComponent} from '../confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  products: Product[];
  cart: Order[];
  selectedProduct: Product;
  @ViewChild(ConfirmModalComponent) addProductModal: ConfirmModalComponent;

  constructor() { }

  ngOnInit() {
    this.products = [{name: 'eggs', price: 1.25, stock: 5}, {name: 'milk', price: 0.9, stock: 10}];
    this.cart = [];
  }

  requestAdd(product: Product) {
    this.selectedProduct = product;
    this.addProductModal.confirmReason = `add ${this.selectedProduct.name} to your cart?`;
    this.addProductModal.show();
  }

  addProductToCart() {
    const order = new Order(this.selectedProduct.name, 1, this.selectedProduct.price);
    this.selectedProduct.stock --;
    const previousOrder = this.cart.find(cartOrder => order.productName === cartOrder.productName);

    if (previousOrder) {
      previousOrder.amount ++;
      previousOrder.totalPrice += order.totalPrice;
    } else {
      this.cart.push(order);
    }
  }

  getTotalPrice(): number {
    let price = 0;
    this.cart.forEach(order => price += order.totalPrice);
    return price;
  }
}
