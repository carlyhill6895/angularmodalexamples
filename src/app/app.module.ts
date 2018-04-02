import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DeleteModalComponent } from './components/delete-modal/delete-modal.component';
import { ModalComponent } from './components/modal/modal.component';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';
import { DeleteConfirmModalComponent } from './components/delete-confirm-modal/delete-confirm-modal.component';
import { ProductsPageComponent } from './components/products-page/products-page.component';
import {RouterModule} from '@angular/router';
import { ModalExampleComponent } from './components/modal-example/modal-example.component';
import { ShopComponent } from './components/shop/shop.component';
import { ProfileComponent } from './shop/profile/profile.component';
import { PreviewDirective } from './preview.directive';
import { SortPipe } from './sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DeleteModalComponent,
    ModalComponent,
    ConfirmModalComponent,
    DeleteConfirmModalComponent,
    ProductsPageComponent,
    ModalExampleComponent,
    ShopComponent,
    ProfileComponent,
    PreviewDirective,
    SortPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'products',
        component: ProductsPageComponent
      },
      {
        path: 'modals',
        component: ModalExampleComponent
      },
      {
        path: '',
        component: ShopComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
