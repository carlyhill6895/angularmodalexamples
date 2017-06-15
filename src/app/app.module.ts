import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import { ModalComponent } from './modal/modal.component';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { DeleteConfirmModalComponent } from './delete-confirm-modal/delete-confirm-modal.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import {RouterModule} from '@angular/router';
import { ModalExampleComponent } from './modal-example/modal-example.component';

@NgModule({
  declarations: [
    AppComponent,
    DeleteModalComponent,
    ModalComponent,
    ConfirmModalComponent,
    DeleteConfirmModalComponent,
    ProductsPageComponent,
    ModalExampleComponent
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
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
