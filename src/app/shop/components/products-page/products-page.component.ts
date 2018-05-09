import {Component, OnInit, ViewChild} from '@angular/core';
import {Product} from '../../domain/product';
import {ConfirmModalComponent} from '../../../components/confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {

  selectedProduct: Product;
  newProduct: Product;
  productBeforeChange: Product;
  showAddProductModal: boolean;
  showChangeModal: boolean;
  products: Product[];

  @ViewChild(ConfirmModalComponent) deleteProductModal: ConfirmModalComponent;
  constructor() { }

  ngOnInit() {
    this.products = [{name: 'eggs', price: 1.25, stock: 5}, {name: 'milk', price: 0.9, stock: 10}];
    this.newProduct = new Product(undefined, undefined, undefined);
  }

  requestDelete(product: Product) {
    this.selectedProduct = product;
    this.deleteProductModal.showModal();
  }

  requestChange(product: Product) {
    this.selectedProduct = product;
    this.productBeforeChange = new Product(product.name, product.price, product.stock);
    this.showChangeModal = true;
  }

  deleteProduct() {
    this.products = this.products.filter((product) => product !== this.selectedProduct);
  }

  addProduct() {
    this.products.push(this.newProduct);
    this.newProduct = new Product(undefined, undefined, undefined);
    this.showAddProductModal = false;
  }

  cancelChange() {
    const index = this.products.indexOf(this.selectedProduct);
    console.log('put back to previous state: ', this.productBeforeChange);
    this.products[index] = this.productBeforeChange;
    this.showChangeModal = false;
  }
}
