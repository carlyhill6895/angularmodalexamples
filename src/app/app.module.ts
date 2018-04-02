import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DeleteModalComponent } from './components/delete-modal/delete-modal.component';
import { ModalComponent } from './components/modal/modal.component';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';
import { DeleteConfirmModalComponent } from './components/delete-confirm-modal/delete-confirm-modal.component';
import { ProductsPageComponent } from './shop/products-page/products-page.component';
import {RouterModule} from '@angular/router';
import { ModalExampleComponent } from './components/modal-example/modal-example.component';
import { ShopComponent } from './shop/shop/shop.component';
import { ProfileComponent } from './shop/profile/profile.component';
import { PreviewDirective } from './preview.directive';
import { SortPipe } from './sort.pipe';
import {ShopModule} from './shop/shop.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    DeleteModalComponent,
    ModalComponent,
    ConfirmModalComponent,
    DeleteConfirmModalComponent,
    ModalExampleComponent,
    PreviewDirective,
    SortPipe,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ShopModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'modals',
        component: ModalExampleComponent
      },
      {
        path: 'shop',
        loadChildren: './shop/shop.module#ShopModule'
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'shop'
      }
    ])
  ],
  providers: [],
  exports: [
    ConfirmModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
