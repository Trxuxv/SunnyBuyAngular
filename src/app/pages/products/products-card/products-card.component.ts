import { GetProduct } from '../models/product.model';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-products-card',
  templateUrl: './products-card.component.html',
  styleUrls: ['./products-card.component.scss']
})
export class ProductsCardComponent implements OnInit {

  categoryId: number;
  products: GetProduct[] = [];

  constructor(private productsService: ProductsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.route.params
    .subscribe(params => this.categoryId = +params[ 'categoryId'])
    
    this.productsService.getProductsCategory(this.categoryId)
    .subscribe
    (
      x => this.products = x
    );

    /* this.route.params
      .pipe(
        tap(params => this.categoryid = params['categoryid']),
        switchMap(() => this.get()))
      .subscribe(); */
  }
/* 
  get() {

    return this.productsService.getProductsCategory(this.categoryId)
      .pipe(
        tap(product => {
          this.products = product;
        }))
  } */
}
