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
  shoppingCart: Order[];
  selectedProduct: Product;
  @ViewChild(ConfirmModalComponent) addProductModal: ConfirmModalComponent;

  constructor() { }

  ngOnInit() {
    this.products = [{name: 'eggs', price: 1.25, stock: 5}, {name: 'milk', price: 0.9, stock: 10}];
    this.shoppingCart = [];
  }

  requestAddProduct(product: Product, amount: number): void {
    this.selectedProduct = product;
    this.addProductModal.confirmReason = `add ${this.selectedProduct.name} to your cart?`;
    this.addProductModal.showModal();
  }

  addProductToCart() {
    // update stock
    const order = new Order(this.selectedProduct.name, 1, this.selectedProduct.price);
    this.selectedProduct.stock --;
    const previousOrder = this.shoppingCart.find(cartOrder => order.productName === cartOrder.productName);

    // update shoppingCart
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
