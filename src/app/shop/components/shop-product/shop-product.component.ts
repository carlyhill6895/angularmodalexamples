import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from '../../domain/product';

@Component({
  selector: 'app-shop-product',
  templateUrl: './shop-product.component.html',
  styleUrls: ['./shop-product.component.css']
})
export class ShopProductComponent {
  @Input() product: Product;
  @Output() productAdded = new EventEmitter<Product>();

  addProduct() {
    this.product.stock --;

    this.productAdded.emit(this.product);
  }
}



