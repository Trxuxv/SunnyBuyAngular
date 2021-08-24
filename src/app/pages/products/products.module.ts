import { ComputersComponent } from './products-category/computers/containers/computers/computers.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { NgxEchartsModule } from 'ngx-echarts';
import { TrendModule } from 'ngx-trend';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './containers/products/products.component';
import { FooterComponent } from '../home/components/footer/footer.component';
import { CategoryComponent } from '../home/components/category/category.component';
import { ComputersHeaderComponent } from './products-category/computers/components/computers-header/computers-header.component';
import { ComputersCardComponent } from './products-category/computers/components/computers-card/computers-card.component';
import { ComputersCategoryComponent } from './products-category/computers/components/computers-category/computers-category.component';

@NgModule({
  declarations: [
    ProductsComponent,
    ComputersHeaderComponent,
    ComputersCardComponent,
    ComputersCategoryComponent,
    ComputersComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    NgxEchartsModule,
    TrendModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatGridListModule,
    MatSelectModule,
    MatInputModule,
    NgApexchartsModule,
    FormsModule,
    FooterComponent,
    CategoryComponent,
    ComputersComponent,
    ComputersHeaderComponent
  ],
  exports: [
    ProductsComponent
  ],
  providers: [
    ProductsComponent
  ]
})
export class ProductsModule { }