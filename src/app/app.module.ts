import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { AuthModule } from './pages/auth/auth.module';
import { HomePageComponent } from './pages/home/containers/home-page/home-page.component';
import { CarouselComponent } from './pages/home/components/carousel/carousel.component';
import { NavComponent } from './pages/home/components/nav/nav.component';
import { CategoryComponent } from './pages/home/components/category/category.component';
import { HeaderComponent } from './pages/home/components/header/header.component';
import { FooterComponent } from './pages/home/components/footer/footer.component';
import { ComputersComponent } from './pages/products/products-category/computers/containers/computers/computers.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CarouselComponent,
    NavComponent,
    CategoryComponent,
    HeaderComponent,
    FooterComponent,
    ComputersComponent
],
  imports: [
    BrowserModule,
    AuthModule,
    DashboardModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    MatCardModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
