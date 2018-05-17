import {Component, OnInit, ViewChild} from '@angular/core';
import {Product} from '../../domain/product';
import {ConfirmModalComponent} from '../../../components/confirm-modal/confirm-modal.component';
import {ProductService} from '../../services/product.service';
import {ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';

export class ProductsResolver implements Resolve<Product[]> {

  constructor(private productService: ProductService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product[]> {
    return this.productService.getProducts();
  }
}

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {

  selectedProduct: Product;
  newProduct: Product;
  productBeforeChange: Product;
  showAddProductModal = false;
  showChangeModal = false;
  products: Product[];
  @ViewChild(ConfirmModalComponent) deleteProductModal: ConfirmModalComponent;


  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.products = data.products
    });
    this.newProduct = new Product(undefined, undefined, undefined);
    this.selectedProduct = new Product(undefined, undefined, undefined);
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
    this.products[index] = this.productBeforeChange;
    this.showChangeModal = false;
  }
}
