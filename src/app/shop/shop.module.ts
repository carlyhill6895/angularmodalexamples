import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileComponent} from './components/profile/profile.component';
import {RouterModule} from '@angular/router';
import {ShopComponent} from './components/shop/shop.component';
import {ProductsPageComponent} from './components/products-page/products-page.component';
import {AuthGuard} from '../auth.guard';
import { ConfirmationModalComponent } from './components/confirmation-modal/confirmation-modal.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: 'products',
        component: ProductsPageComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthGuard]
      },
      {
        path: '',
        component: ShopComponent
      }
    ]),
  ],
  declarations: [
    ProfileComponent,
    ShopComponent,
    ProductsPageComponent,
    ConfirmationModalComponent
  ],
  providers: [
    AuthGuard
  ]
})
export class ShopModule {
}


