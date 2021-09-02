import { GetProduct } from './../../products/models/product.model';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../products/products.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  products: GetProduct[];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() 
  {
    return this.productsService.getAllProducts()
    .subscribe
    ( a => this.products = a )
  }
}
