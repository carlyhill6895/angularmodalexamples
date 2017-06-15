import { Component, OnInit } from '@angular/core';

interface Product {
  name: string;
  price: number;
}

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {

  selectedProduct: Product;
  showDeleteModal: boolean;
  products: Product[];
  constructor() { }

  ngOnInit() {
    this.products = [{name: 'eggs', price: 1.25}, {name: 'milk', price: 0.9}];
  }

  requestDelete(product: Product) {
    this.selectedProduct = product;
    this.showDeleteModal = true;
  }

  deleteProduct() {
    this.products = this.products.filter((product) => product !== this.selectedProduct);
  }
}
