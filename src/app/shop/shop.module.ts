import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileComponent} from './profile/profile.component';
import {RouterModule} from '@angular/router';
import {ShopComponent} from './shop/shop.component';
import {ProductsPageComponent} from './products-page/products-page.component';
import {AuthGuard} from '../auth.guard';

@NgModule({
  imports: [
    CommonModule,
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
    ProductsPageComponent
  ],
  providers: [
    AuthGuard
  ]
})
export class ShopModule {
}


