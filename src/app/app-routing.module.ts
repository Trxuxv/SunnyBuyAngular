import { PaymentTypeChoosePageComponent } from './pages/payment/payment-type-choose-page.component';
import { ProductDetailComponent } from './pages/products/product-detail/product-detail.component';
import { ProductsCardComponent } from './pages/products/products-card/products-card.component';
import { ProductsComponent } from './pages/products/products.component';
import { CreditcardPageComponent } from './pages/payment/creditcard/creditcard-page.component';
import { BilletPageComponent } from './pages/payment/billet/billet-page.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { PixPageComponent } from './pages/payment/pix/pix-page.component';
import { ClientPageComponent } from './pages/client/client-page.component';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HelpPageComponent } from './pages/help/help-page.component';
import { CartPageComponent } from './pages/cart/cart-page.component';
import { NgModule } from '@angular/core';

const routes: Routes =
  [
    
    { path: '', pathMatch: 'full', component: HomePageComponent },
    {
      path: 'products', component: ProductsComponent,
      children:
        [
          { path: 'detail/:id', component: ProductDetailComponent },
          { path: 'product-card/:categoryid', component: ProductsCardComponent, pathMatch: 'full' }
        ]
    },

    { path: 'client', pathMatch: 'full', component: ClientPageComponent },
    { path: 'cart', pathMatch: 'full', component: CartPageComponent },
    { path: 'help', component: HelpPageComponent },
    {
      path: 'payment', component: PaymentTypeChoosePageComponent,
      children:
        [
          { path: 'creditCard', component: CreditcardPageComponent },
          { path: 'billet', component: BilletPageComponent },
          { path: 'pix', component: PixPageComponent },
        ]
    },

    {
      path: '**',
      redirectTo: '404'
    }
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }