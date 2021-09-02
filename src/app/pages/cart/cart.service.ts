import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GetCart } from './models/getCart.model';
import { Injectable } from '@angular/core';
import { catchError, take } from 'rxjs/operators';
import { ClientService } from '../client/client.service';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private _products = new BehaviorSubject<GetCart[]>([]);
  public products = this._products.asObservable();

  constructor
  (
    private request: HttpClient,
    private clientService: ClientService ) { }

  _getProductsCart(clientId: number)
  {
    localStorage.setItem
    return this.getCartProducts(clientId);
  }

  private getCartProducts(clientId: number)
  {
    return this.request
    .get<GetCart[]>(apiUrl + "/Cart/" + clientId)
    .pipe
    (
      take(1)
    );
  }

  _postCart(model: {clientId: number, productId: number})
  {
    return this.postCart(model);
  }

  private postCart(model: {clientId: number, productId: number}): Observable<boolean>
  {
    console.log(apiUrl)
    return this.request
    .post<boolean>(apiUrl + '/Cart/', model)
    .pipe
    (
      take(1),

     catchError(a  => {
       throw this.clientService._showMessageError('erro kkk')
     })
    );
  }
 
  _deleteProductCart()
  {
    return this.deleteProductsCart();
  }

  private deleteProductsCart()
  {
    return this.request
    .delete<GetCart[]>(apiUrl + "/Cart/")
    .pipe(
      take(1)
    );
  }
}
