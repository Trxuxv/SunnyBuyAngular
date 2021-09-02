import { PaymentTypeChoosePageComponent } from './pages/payment/payment-type-choose-page.component';
import { ProductsCategoryComponent } from './pages/products/products-category/products-category.component';
import { ProductsHeaderComponent } from './pages/products/products-header/products-header.component';
import { PaymentTypeHeaderComponent } from './pages/payment/payment-header/payment-type-header.component';
import { ProductDetailComponent } from './pages/products/product-detail/product-detail.component';
import { ProductsCardComponent } from './pages/products/products-card/products-card.component';
import { CreditcardHeaderComponent } from './pages/payment/creditcard/creditcard-header/creditcard-header.component';
import { BilletHeaderComponent } from './pages/payment/billet/billet-header/billet-header.component';
import { ProductsComponent } from './pages/products/products.component';
import { CreditcardPageComponent } from './pages/payment/creditcard/creditcard-page.component';
import { ClientHeaderComponent } from './pages/client/client-header/client-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartPageComponent } from './pages/cart/cart-page.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './pages/auth/auth.module';
import { HomePageComponent } from './pages/home/home-page.component';
import { CarouselComponent } from './pages/home/carousel/carousel.component';
import { NavComponent } from './pages/home/nav/nav.component';
import { CategoryComponent } from './pages/home/category/category.component';
import { HeaderComponent } from './pages/home/header/header.component';
import { FooterComponent } from './pages/home/footer/footer.component';
import { ClientPageComponent } from './pages/client/client-page.component';
import { BilletPageComponent } from './pages/payment/billet/billet-page.component';
import { PixHeaderComponent } from './pages/payment/pix/pix-header/pix-header.component';
import { AddCardComponent } from './pages/payment/creditcard/add-card/add-card.component';
import { CartHeaderComponent } from './pages/cart/cart-header/cart-header.component';
import { ClientNavComponent } from './pages/client/client-nav/client-nav.component';
import { HelpPageComponent } from './pages/help/help-page.component';
import { PixPageComponent } from './pages/payment/pix/pix-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { NgModule } from '@angular/core';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavComponent,
    CartPageComponent,
    CarouselComponent,
    CategoryComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    ProductsHeaderComponent,
    ProductsCategoryComponent,
    ProductsCardComponent,
    ClientPageComponent,
    ClientNavComponent,
    ClientHeaderComponent,
    CartHeaderComponent,
    HelpPageComponent,
    CreditcardPageComponent,
    PaymentTypeChoosePageComponent,
    PaymentTypeHeaderComponent,
    CreditcardHeaderComponent,
    BilletPageComponent,
    BilletHeaderComponent,
    PixHeaderComponent,
    PixPageComponent,
    AddCardComponent,
    ProductDetailComponent,
  ],
  
  imports: [
    MatSnackBarModule,
    BrowserModule,
    AuthModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
