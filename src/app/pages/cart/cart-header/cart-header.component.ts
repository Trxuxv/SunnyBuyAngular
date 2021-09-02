import { GetCart } from '../models/getCart.model';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ClientService } from '../../client/client.service';

@Component({
  selector: 'app-cart-header',
  templateUrl: './cart-header.component.html',
  styleUrls: ['./cart-header.component.scss']
})
export class CartHeaderComponent implements OnInit {

  clientId: number;
  cart: GetCart[];

  constructor(private cartService: CartService, private clientService: ClientService) { }

  ngOnInit(): void {
    this.get();
  }

  get() {
    return this.cartService._getProductsCart(this.clientService.id)
      .subscribe(products => {
          this.cart = products;
        })
  }
}
